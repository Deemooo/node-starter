const log4js = require('log4js');
module.exports = (options) => {
    return async (ctx, next) => {
        const start = Date.now();
        log4js.configure({
            appenders: { cheese: {
                    type: 'file',
                    filename: 'cheese.log'
                }},
            categories: { default: {
                    appenders: ['cheese'],
                    level: 'error'
                }}
        });
        const logger = log4js.getLogger('cheese');
        await next();
        const end = Date.now();
        const responseTime = end - start;
        logger.info(`response time is ${responseTime/1000}s`);
    }
};