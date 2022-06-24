const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  // proxy: 'http://localhost:8000'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "../app/src/assets/css/main.scss";
        `
      }
    }
  }
}
