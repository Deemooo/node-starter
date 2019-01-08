// 按照官方示例
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>';
});

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>Not Found</h1>';
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
});