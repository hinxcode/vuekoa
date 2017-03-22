var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var Koa = require('koa')
var Router = require('koa-router')
var send = require('koa-send')
var path = require('path')
var middleware = require('koa-webpack')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

const app = new Koa();
const router = new Router();
const compiler = webpack(webpackConfig)

router.redirect('/*', '/');

app.use(middleware({
    compiler: compiler
  }))
  .use(router.routes())
  .use(router.allowedMethods())

var uri = 'http://localhost:' + port

app.listen(port)
console.log(`Listening on: ${uri}`)
