module.exports = () => {
    const render = ctx => {
        return (json, msg) => {
            ctx.set('Content-Type', 'application/json');
            ctx.body = JSON.stringify({
                code: 200,
                data: json || {},
                msg: msg || 'success'
            });
        };
    };
    const renderError = ctx => {
        return msg => {
            ctx.set('Content-Type', 'application/json');
            ctx.body = JSON.stringify({
                code: 500,
                data: {},
                msg: msg.toString()
            });
        };
    };
    return async (ctx, next) => {
        ctx.send = render(ctx);
        ctx.sendError = renderError(ctx);
        await next();
    };
};