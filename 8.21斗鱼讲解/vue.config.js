const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      // 配置服务器代理
      proxy: {
        "/douyu": {
          target: "http://open.douyucdn.cn",
          changeOrigin: true,
          pathRewrite: {
            "^/douyu": ""
          }
        }
      }
    }
  }
});
