const koaRouter  = require('koa-router');
const router = koaRouter();
const controller = require('../controller');

module.exports = (app) => {
    // 注册
    router.post('/signup', controller.user.signup);

    app.use(router.routes());
};