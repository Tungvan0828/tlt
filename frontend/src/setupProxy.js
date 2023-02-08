const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://nguyenvantungd13cnpm3.onrender.com',
      changeOrigin: true,
    })
  );
};