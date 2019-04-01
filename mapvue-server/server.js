
const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa
const router = new KoaRouter
const datas = require('./datas/data.json')
router.get('/',async(ctx,next)=>{
//获取用户的参数
//   let {req} = ctx.query
//  处理逻辑
//  返回响应数据
  ctx.body='服响务器返回的响应数据'
})
router.get('/searchBooks',async(ctx,next)=>{
  let result
//获取用户的参数
  let {req} = ctx.query
//  发送请求
//    result = await get(`https://api.douban.com/v2/book/search?req=${req}`)
   result = datas
//  返回响应数据
  ctx.body=result
})
app
  .use(router.routes())//声明可使用路由
  .use(router.allowedMethods())//允许使用路由的方法
app.listen('3000',()=>{
  console.log('服务器启动成功')
  console.log('服务器地址:http://localhost:3000')
})

