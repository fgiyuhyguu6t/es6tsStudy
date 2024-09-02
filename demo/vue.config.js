const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  resolve: {
    //路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
