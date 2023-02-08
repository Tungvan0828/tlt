const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'https://nguyenvantungd13cnpm3.onrender.com',
      changeOrigin: true,
    })
  );
};
