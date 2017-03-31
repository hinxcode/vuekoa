const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const port = process.env.PORT || config.dev.port

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const rewrite = require('koa-rewrite')
// var session = require('koa-session')
const path = require('path')
const middleware = require('koa-webpack')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')

const app = new Koa();
const router = new Router();
const compiler = webpack(webpackConfig)

router.get('/api', async (ctx, next) => {
  await next()
})

app
  .use(
    rewrite('/test', '/')
  )
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('static'))
  .use(middleware({
    compiler: compiler
  }))

app.listen(port)

console.log(`Listening on: http://localhost:${port}`)
