import jwt from 'jsonwebtoken';
import configig from '../../configig';

module.exports = () => {
    const auth = ctx => {
        return () => {
            if ( config.auth.blackList.some(v => ctx.path.indexOf(v) >= 0) ) {
                let token = ctx.cookies.get(config.auth.tokenKey);
                try {
                    jwt.verify(token, config.auth.admin_secret);
                }catch (e) {
                    if ('TokenExpiredError' === e.name) {
                        ctx.sendError('token已过期, 请重新登录!');
                        ctx.throw(401, 'token expired,请及时本地保存数据！');
                    }
                    ctx.sendError('token验证失败, 请重新登录!');
                    ctx.throw(401, 'invalid token');
                }
                console.log("鉴权成功");
            }
        }
    };
    return async (ctx, next) => {
        ctx.auth = auth(ctx);
        await next();
    };
};