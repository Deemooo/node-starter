const db = require('./db');

module.exports = () => {
    const funs = Object.assign({}, db);
    return async (ctx, next) => {
        Object.keys(funs).forEach((item) => {
            if (funs.hasOwnProperty(item)) {
                ctx[item] = funs[item];
            }
        });
        await next();
    };
};