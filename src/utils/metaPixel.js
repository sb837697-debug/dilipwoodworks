/**
 * Meta (Facebook) Tracking Utility with Dual Pixel & Conversions API (CAPI) Deduplication.
 * 
 * Tracks events simultaneously in:
 * 1. Client Browser (Meta Pixel fbq)
 * 2. Server-side Conversions API (/api/meta-conversion)
 * 
 * Using matching `eventID` allows Meta to automatically deduplicate events,
 * preventing double counting while capturing 100% of signals even if ad-blockers are active.
 */

/**
 * Retrieve a cookie value by name from document.cookie
 */
export function getCookie(name) {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : '';
}

/**
 * Generate a unique event ID for deduplicating browser Pixel and server CAPI events.
 */
export function generateEventId(prefix = 'ev') {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${randomStr}`;
}

/**
 * Extract or reconstruct Facebook click parameters (_fbp, _fbc)
 */
export function getMetaCookies() {
  if (typeof window === 'undefined') return { fbp: '', fbc: '' };

  let fbp = getCookie('_fbp');
  let fbc = getCookie('_fbc');

  // If _fbc is not found but fbclid is present in the current URL query, format it according to Meta spec
  if (!fbc && window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    if (fbclid) {
      fbc = `fb.1.${Date.now()}.${fbclid}`;
    }
  }

  return { fbp, fbc };
}

/**
 * Core event tracking function.
 * Sends event both to browser fbq (if available) and server Conversions API.
 * 
 * @param {string} eventName - Standard Meta event name (e.g., 'Lead', 'Contact', 'PageView', 'ViewContent')
 * @param {object} options - Event parameters
 * @param {string} [options.eventId] - Unique identifier for deduplication
 * @param {object} [options.userData] - Raw or partially hashed user data { email, phone, fullName }
 * @param {object} [options.customData] - Additional event parameters { content_name, value, currency, etc. }
 * @param {string} [options.testEventCode] - Optional test event code from Meta Events Manager
 */
export async function trackMetaEvent(eventName, options = {}) {
  if (typeof window === 'undefined') return null;

  const eventId = options.eventId || generateEventId(eventName.toLowerCase());
  const customData = options.customData || {};
  const { fbp, fbc } = getMetaCookies();

  const userData = {
    fbp,
    fbc,
    ...(options.userData || {})
  };

  // 1. Browser Meta Pixel Event
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, customData, { eventID: eventId });
    }
  } catch (err) {
    console.debug('[Meta Pixel] Browser event error:', err);
  }

  // 2. Server-side Conversions API (CAPI) Event
  try {
    const payload = {
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      userData,
      customData,
      testEventCode: options.testEventCode
    };

    fetch('/api/meta-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        console.debug('[Meta CAPI] Server dispatch note:', errorText);
      }
    }).catch((err) => {
      // Non-blocking catch to ensure website interactions are never hindered
      console.debug('[Meta CAPI] Dispatch error:', err.message);
    });
  } catch (err) {
    console.debug('[Meta CAPI] Failed to initialize dispatch:', err);
  }

  return eventId;
}

/**
 * Track a Form Submission Lead
 * @param {object} leadData - { fullName, email, phone, subject, value }
 */
export function trackLead({ fullName = '', email = '', phone = '', subject = '', value = 0 } = {}) {
  const eventId = generateEventId('lead');

  // Split full name if present
  let firstName = '';
  let lastName = '';
  if (fullName) {
    const parts = fullName.trim().split(/\s+/);
    firstName = parts[0] || '';
    lastName = parts.slice(1).join(' ') || '';
  }

  return trackMetaEvent('Lead', {
    eventId,
    userData: {
      email,
      phone,
      firstName,
      lastName
    },
    customData: {
      content_name: subject || 'Woodwork Inquiry',
      content_category: 'Inquiry Form',
      currency: 'INR',
      value: value || 0
    }
  });
}

/**
 * Track a Direct Contact Interaction (WhatsApp chat click, phone call click)
 * @param {object} contactData - { method: 'whatsapp' | 'phone' | 'email', contentName: string, value?: number }
 */
export function trackContact({ method = 'whatsapp', contentName = '', value = 0 } = {}) {
  const eventId = generateEventId('contact');

  return trackMetaEvent('Contact', {
    eventId,
    userData: {},
    customData: {
      content_name: contentName || `${method.toUpperCase()} Direct Click`,
      content_category: method,
      currency: 'INR',
      value: value || 0
    }
  });
}

/**
 * Track Product or Content View
 * @param {object} viewData - { contentName, contentId, contentType, value, currency }
 */
export function trackViewContent({
  contentName = '',
  contentId = '',
  contentType = 'product',
  value = 0,
  currency = 'INR'
} = {}) {
  const eventId = generateEventId('view');

  return trackMetaEvent('ViewContent', {
    eventId,
    userData: {},
    customData: {
      content_name: contentName,
      content_ids: contentId ? [String(contentId)] : [],
      content_type: contentType,
      currency,
      value
    }
  });
}

/**
 * Track PageView across SPA route transitions
 */
export function trackPageView(url) {
  const eventId = generateEventId('pageview');

  return trackMetaEvent('PageView', {
    eventId,
    userData: {},
    customData: {
      page_url: url || (typeof window !== 'undefined' ? window.location.href : '')
    }
  });
}
