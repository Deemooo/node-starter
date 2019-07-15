const userModel = require('../../models/user');

module.exports = {
    signup: async (ctx, next) => {
        let paramsData = ctx.request.body;
        let { userId } = paramsData;
        try {
            let data = await ctx.findOne(userModel, { userId });
            if (data && data.length !== 0) {
                ctx.sendError('数据已经存在, 请重新添加!');
            } else {
                let data = await ctx.addUser(userModel, paramsData);
                ctx.send(data, '账号注册成功!');
            }
        } catch (e) {
            ctx.sendError(e);
        }
    }
};