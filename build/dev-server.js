const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const port = process.env.PORT || config.dev.port

const Koa = require('koa')
const Router = require('koa-router')
const webpackMiddleware = require('koa-webpack')
const historyMiddleWare = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')

const app = new Koa();
const router = new Router();
const compiler = webpack(webpackConfig)

router.get('/api/test', async (ctx, next) => {
  await next()
  console.log('api: ' + 'test')
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use((ctx, next) => {
    historyMiddleWare()(ctx, null, () => {})
    return next()
  })
  .use(webpackMiddleware({
    compiler: compiler
  }))

app.listen(port)

console.log(`Listening on: http://localhost:${port}`)
