import http from 'http';
import handler from 'serve-handler';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  return handler(req, res, {
    public: 'dist',
    cleanUrls: true,
    rewrites: [
      { source: '**', destination: '/index.html' }
    ],
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
