/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-28 09:47:37
 * @LastEditors: 舌红
 * @LastEditTime: 2024-05-27 19:06:41
 */
const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'lib',
  assetsDir: 'static',
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    output: {
      filename: `[name].${timeStamp}.js`
    }
  }
})
