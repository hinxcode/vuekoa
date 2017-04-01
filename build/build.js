var webpack = require('webpack')
var path = require('path')
var rm = require('rimraf')

var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

rm(path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory), err => {
  if (err) throw err

  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
  })
})
