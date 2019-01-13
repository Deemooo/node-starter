const path = require('path');
const nunjucks = require('koa-nunjucks-2');
module.exports = (opts = {}) => {
    const env = opts.env || process.env.NODE_ENV || 'developemnt';
    const folder = opts.errorPageFolder;
    const templatePath = path.resolve(__dirname, './error.html');
    let filename = 'other';
    return async (ctx, next) => {
        try {
            await next();
            if (ctx.response.status === 404 && !ctx.response.body) {
                ctx.throw(404);
            }
        } catch (e) {
            let status = parseInt(e.status);
            const message = e.message;
            if (status >= 400) {
                switch (status) {
                    case 400:
                    case 404:
                    case 500:
                        fileName = status;
                        break;
                    default: fileName = 'other';
                }
            } else {
                status = 500;
                filename = status;
                const filePath = folder ? Path.join(folder, `${fileName}.html`) : templatePath;
                try {
                    nunjucks.configure(folder ? folder : __dirname);
                    const data = await nunjucks.render(filePath, {
                        env: env,
                        status: e.status,
                        error: e.message,
                        stack: e.stack
                    });
                    ctx.status = status;
                    ctx.body = data;
                } catch (e) {
                    ctx.throw(500, `error page renders fault: ${e.message}`);
                }
            }
        }
    };
};