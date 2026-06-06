export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    status: 'healthy',
    service: 'API-ZERO',
    version: '1.0.0',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
    }
