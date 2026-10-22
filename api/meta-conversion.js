import crypto from 'node:crypto';

/**
 * SHA-256 helper for hashing user data per Meta Conversions API specifications.
 * Meta requires lowercase hex strings.
 */
function hashValue(value) {
  if (!value || typeof value !== 'string') return null;
  const clean = value.trim().toLowerCase();
  if (!clean) return null;
  return crypto.createHash('sha256').update(clean).digest('hex');
}

/**
 * Normalize and hash phone numbers for Meta.
 * Strips all non-digit characters and ensures country code.
 */
function hashPhone(phone) {
  if (!phone || typeof phone !== 'string') return null;
  let digits = phone.replace(/\D/g, '');
  if (!digits) return null;
  // If 10-digit Indian number without country code, prepend 91
  if (digits.length === 10) {
    digits = `91${digits}`;
  }
  return crypto.createHash('sha256').update(digits).digest('hex');
}

/**
 * Vercel Serverless Function handler for Meta Conversions API (CAPI).
 * Endpoint: POST /api/meta-conversion
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const {
      eventName,
      eventId,
      eventSourceUrl,
      userData = {},
      customData = {},
      testEventCode: requestTestCode
    } = body;

    if (!eventName) {
      return res.status(400).json({ error: 'eventName is required.' });
    }

    const token =
      process.env.META_CONVERSION_API_TOKEN ||
      process.env.META_ACCESS_TOKEN ||
      process.env.META_CONVERSION_TOKEN;

    const pixelId =
      process.env.META_PIXEL_ID ||
      process.env.VITE_META_PIXEL_ID ||
      '2540746766357872';

    const testEventCode =
      requestTestCode ||
      process.env.META_TEST_EVENT_CODE ||
      null;

    if (!token) {
      // Gracefully report unconfigured token so the frontend does not break
      return res.status(200).json({
        success: false,
        configured: false,
        message: 'META_CONVERSION_API_TOKEN is not set in environment variables. Conversion event skipped.'
      });
    }

    // Extract client IP and User Agent
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = forwarded
      ? forwarded.split(',')[0].trim()
      : req.socket?.remoteAddress || '';
    const clientUserAgent = req.headers['user-agent'] || '';

    // Prepare hashed user data for privacy and Meta CAPI match quality
    const hashedUserData = {
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
    };

    if (userData.fbp) hashedUserData.fbp = userData.fbp;
    if (userData.fbc) hashedUserData.fbc = userData.fbc;

    if (userData.email) {
      const hashedEm = hashValue(userData.email);
      if (hashedEm) hashedUserData.em = [hashedEm];
    }

    if (userData.phone) {
      const hashedPh = hashPhone(userData.phone);
      if (hashedPh) hashedUserData.ph = [hashedPh];
    }

    if (userData.firstName) {
      const hashedFn = hashValue(userData.firstName);
      if (hashedFn) hashedUserData.fn = [hashedFn];
    }

    if (userData.lastName) {
      const hashedLn = hashValue(userData.lastName);
      if (hashedLn) hashedUserData.ln = [hashedLn];
    }

    // Build event payload
    const eventTime = Math.floor(Date.now() / 1000);
    const eventData = {
      event_name: eventName,
      event_time: eventTime,
      event_id: eventId || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      event_source_url: eventSourceUrl || req.headers.referer || 'https://dilipwoodworks.com',
      action_source: 'website',
      user_data: hashedUserData,
      custom_data: customData
    };

    const payload = {
      data: [eventData],
      ...(testEventCode ? { test_event_code: testEventCode } : {})
    };

    // Send to Meta Graph API v19.0
    const metaApiUrl = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`;

    const response = await fetch(metaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('Meta CAPI Error Response:', result);
      return res.status(response.status).json({
        success: false,
        error: result.error?.message || 'Meta Graph API error',
        metaDetails: result.error
      });
    }

    return res.status(200).json({
      success: true,
      eventsReceived: result.events_received ?? 1,
      fbTraceId: result.fbtrace_id
    });
  } catch (error) {
    console.error('Error forwarding to Meta Conversions API:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
