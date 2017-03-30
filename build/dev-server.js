const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const mountHtml = require('koa-mount-html')
// var session = require('koa-session')
const path = require('path')
const middleware = require('koa-webpack')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')
// const webpackDevMiddleware = require('webpack-dev-middleware')
const mount = require('koa-mount');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

const app = new Koa();
const router = new Router();
const compiler = webpack(webpackConfig)
const publicPath = webpackConfig.output.publicPath

router.get('/a', (ctx, next) => {
  
})

// app.use(mountHtml(async (ctx, next) => {
//   await send(ctx, '/index.html', { root: __dirname + '/static' });
// }, { defer: true }))

// app.use(mountHtml(
//   publicPath, webpackDevMiddleware(compiler)
// ))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('static'))
  .use(middleware({
    compiler: compiler
  }))

app.listen(port)

console.log(`http://localhost:${port}`)
