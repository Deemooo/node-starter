module.exports = {
    port: 3033,
    mongodb: {
        username: 'cd',
        pwd: 123456,
        address: 'localhost:27017',
        db: 'koa-blog'
    },
    auth: {
        admin_secret: 'admin-token',
        tokenKey: 'Token-Auth',
        whiteList: ['login', 'client_api'],
        blackList: ['admin_api']
    }
};