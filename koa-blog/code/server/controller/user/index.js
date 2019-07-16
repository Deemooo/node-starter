const userModel = require('../../models/user');

module.exports = {
    signup: async (ctx, next) => {
        let paramsData = ctx.request.body;
        let { userId } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userId });
            if (data && data.length !== 0) {
                ctx.sendError('账户已经存在, 请重新添加!');
            } else {
                let data = await ctx.addUser(userModel, paramsData);
                ctx.send(data, '账号注册成功!');
            }
        } catch (error) {
            ctx.sendError(error);
        }
    },
    login: async (ctx, next) => {
        let paramsData = ctx.request.body;
        let { userId, pwd } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userId });
            if (data && data.length !== 0) {
                if (data.pwd !== pwd) {
                    ctx.sendError('密码错误!');
                    return false;
                }
                await ctx.updateOne(userModel, { userId }, {loginTime: new Date()});
                ctx.send({message: '登录成功!'});
            } else {
                ctx.sendError('账户不存在!');
            }
        } catch (error) {
            ctx.sendError(error);
        }
    }
};