//引入 koa模块
const Koa = require('koa');
const Router = require('koa-router');

//实例化
const app = new Koa();
const router = new Router();



router.get('/', async (ctx) => {
    // 设置 cookie
    ctx.cookies.set('userinfo',encodeURIComponent('张三'),{maxAge:10*1000})
    // await ctx.render('index', {});
});

router.get('/news', async (ctx) => {
    // 获取 cookie
    console.log(decodeURIComponent(ctx.cookies.get('userinfo')));
    // await ctx.render('index', {});
});

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);