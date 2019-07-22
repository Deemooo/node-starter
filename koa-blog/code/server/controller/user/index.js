const userModel = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config');

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
        let { _id, userId, username, pwd, roles } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userId });
            if (data && data.length !== 0) {
                if (data.pwd !== pwd) {
                    ctx.sendError('密码错误!');
                    return false;
                }
                await ctx.updateOne(userModel, { userId }, {loginTime: new Date()});
                let payload = {
                    _id,
                    userId,
                    username,
                    pwd,
                    roles
                };
                let token = jwt.sign(payload, conf.auth.admin_secret, {expiresIn: '24h'});
                ctx.cookies.set(conf.auth.tokenKey, token, {
                    httpOnly: false
                });
                ctx.send({message: '登录成功!'});
            } else {
                ctx.sendError('账户不存在!');
            }
        } catch (error) {
            ctx.sendError(error);
        }
    },
    loginout: async (ctx, next) => {
        let paramsData = ctx.request.body;
        let { userId, pwd } = paramsData;
        try {

        } catch (error) {
            ctx.sendError(error);
        }
    }
};