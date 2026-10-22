import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import crypto from 'node:crypto';

function hashValue(value) {
  if (!value || typeof value !== 'string') return null;
  const clean = value.trim().toLowerCase();
  if (!clean) return null;
  return crypto.createHash('sha256').update(clean).digest('hex');
}

function hashPhone(phone) {
  if (!phone || typeof phone !== 'string') return null;
  let digits = phone.replace(/\D/g, '');
  if (!digits) return null;
  if (digits.length === 10) digits = `91${digits}`;
  return crypto.createHash('sha256').update(digits).digest('hex');
}

/**
 * Dev server middleware to simulate /api/meta-conversion during local development (vite dev)
 */
function metaConversionDevPlugin() {
  let env = {};
  return {
    name: 'meta-conversion-dev-middleware',
    configResolved(config) {
      env = loadEnv(config.mode, process.cwd(), '');
    },
    configureServer(server) {
      server.middlewares.use('/api/meta-conversion', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          return res.end();
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        }

        let bodyRaw = '';
        req.on('data', (chunk) => {
          bodyRaw += chunk;
        });

        req.on('end', async () => {
          try {
            const body = bodyRaw ? JSON.parse(bodyRaw) : {};
            const token =
              env.META_CONVERSION_API_TOKEN ||
              env.META_ACCESS_TOKEN ||
              process.env.META_CONVERSION_API_TOKEN;

            const pixelId =
              env.META_PIXEL_ID ||
              env.VITE_META_PIXEL_ID ||
              '2540746766357872';

            const testEventCode =
              body.testEventCode ||
              env.META_TEST_EVENT_CODE ||
              process.env.META_TEST_EVENT_CODE;

            if (!token) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              return res.end(
                JSON.stringify({
                  success: false,
                  configured: false,
                  message: 'META_CONVERSION_API_TOKEN is not configured in .env'
                })
              );
            }

            const forwarded = req.headers['x-forwarded-for'];
            const clientIp = forwarded
              ? forwarded.split(',')[0].trim()
              : req.socket?.remoteAddress || '127.0.0.1';
            const clientUserAgent = req.headers['user-agent'] || '';
            const userData = body.userData || {};

            const hashedUserData = {
              client_ip_address: clientIp,
              client_user_agent: clientUserAgent
            };

            if (userData.fbp) hashedUserData.fbp = userData.fbp;
            if (userData.fbc) hashedUserData.fbc = userData.fbc;
            if (userData.email) {
              const em = hashValue(userData.email);
              if (em) hashedUserData.em = [em];
            }
            if (userData.phone) {
              const ph = hashPhone(userData.phone);
              if (ph) hashedUserData.ph = [ph];
            }

            const payload = {
              data: [
                {
                  event_name: body.eventName,
                  event_time: Math.floor(Date.now() / 1000),
                  event_id: body.eventId || `ev_${Date.now()}`,
                  event_source_url: body.eventSourceUrl || 'http://localhost:5173',
                  action_source: 'website',
                  user_data: hashedUserData,
                  custom_data: body.customData || {}
                }
              ],
              ...(testEventCode ? { test_event_code: testEventCode } : {})
            };

            const metaRes = await fetch(
              `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
              }
            );

            const result = await metaRes.json().catch(() => ({}));
            res.statusCode = metaRes.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    metaConversionDevPlugin()
  ],
});


