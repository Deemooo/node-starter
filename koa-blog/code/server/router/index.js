const koaRouter  = require('koa-router');
const router = koaRouter();
const userModel = require('../models/user');

module.exports = (app) => {
    // 注册
    router.post('/signup', async (ctx, next) => {
        let paramsData = ctx.request.boody;
        let { userId } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userId });
            if (data) {
                ctx.sendError('数据已经存在, 请重新添加!');
            } else {
                let data = await ctx.addUser(userModel, paramsData);
                ctx.send(data);
            }
        } catch (e) {
            ctx.sendError(e);
        }
    });

    app.use(router.routes());
};