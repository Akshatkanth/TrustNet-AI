import http from 'http';
import handler from 'serve-handler';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  // Check if requested file exists in dist
  const filePath = join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  
  // If it's not a file (like /home, /about) or doesn't exist, serve index.html
  if (!req.url.includes('.') && !existsSync(filePath)) {
    req.url = '/index.html';
  }
  
  return handler(req, res, {
    public: 'dist',
    cleanUrls: false,
    headers: [
      {
        source: '**/*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=600' }
        ]
      }
    ]
  });
});

server.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});
