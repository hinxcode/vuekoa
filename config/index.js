var path = require('path')

module.exports = {
  prod: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    extractText: true
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true,
    extractText: false,
    proxyTable: {}
  }
}
