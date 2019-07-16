const koaRouter  = require('koa-router');
const router = koaRouter();
const controller = require('../controller');

module.exports = (app) => {
    // 注册
    router.post('/signup', controller.user.signup);
    // 登陆
    router.post('/login', controller.user.login);

    app.use(router.routes());
};