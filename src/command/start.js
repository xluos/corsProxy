const express = require('express')
const cors = require('cors')
const proxy = require('http-proxy-middleware')
import { getHost } from '../../lib/utils'

export default function startProxy (argv) {

  const host = getHost(argv)

  
  const app = express()
  // 添加跨域请求头
  app.use(cors())

  // 代理
  app.use('/', proxy({ target: host, changeOrigin: true }))
  // options 预检请求处理
  app.options('/', function (req, res) {
    res.status(204).send('ok')
  })

  app.listen(3000)
}