module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  outputDir: "dist",
  devServer: {
    host: "localhost",
    https: true,
    hotOnly: false,
  },
  lintOnSave: true
};
