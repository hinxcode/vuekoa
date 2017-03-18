var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var Koa = require('koa')
var middleware = require('koa-webpack')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

const app = new Koa();
const compiler = webpack(webpackConfig)

app.use(middleware({
  compiler: compiler
}))

var uri = 'http://localhost:' + port

app.listen(port)
console.log(`fuckyou: ${uri}`)
