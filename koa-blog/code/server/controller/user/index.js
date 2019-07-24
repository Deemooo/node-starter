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
                ctx.session.userId = data[0].userId;
                ctx.send(data, '账号注册成功!');
            }
        } catch (error) {
            ctx.sendError(error);
        }
    },
    login: async (ctx, next) => {
        let paramsData = ctx.request.body;
        let { userName, pwd } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userName });
            if (data && data.length !== 0) {
                if (data[0].pwd !== pwd) {
                    ctx.sendError('密码错误!');
                    return false;
                }
                await ctx.updateOne(userModel, { userName }, {loginTime: new Date()});
                ctx.session.userId = data[0].userId;
                ctx.send({message: '登录成功!'});
            } else {
                ctx.sendError('账户不存在!');
            }
        } catch (error) {
            ctx.sendError(error);
        }
    },
    loginout: async (ctx, next) => {
        try {
            ctx.session.userId = null;
            ctx.send({message: '退出登录成功!'});
        } catch (error) {
            ctx.sendError(error);
        }
    }
};