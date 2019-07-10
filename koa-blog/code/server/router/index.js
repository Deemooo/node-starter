const koaRouter  = require('koa-router');
const router = koaRouter();

module.exports = (app) => {
    router.get('/test', async (ctx, next) => {
        ctx.response.body = `Hello World!`;
    });
    app.use(router.routes());
};