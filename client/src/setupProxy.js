const { createProxyMiddleware } = require("http-proxy-middleware");
// const morgan = require("morgan");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:5001",
      changeOrigin: true,
      // pathRewrite: {
      //   "^api": "/api/v1",
      // },
    })
  );

  // app.use(morgan("combined"));
};
