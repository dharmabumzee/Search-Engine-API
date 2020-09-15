const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "auth/google"],
    createProxyMiddleware({
      target: "https://tinyllama.dharmabumzee.vercel.app/",
      changeOrigin: true,
    })
  );
};
