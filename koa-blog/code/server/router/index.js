const koaRouter  = require('koa-router');
const router = koaRouter();
const controller = require('../controller');

module.exports = (app) => {

    // 注册
    router.post('/signup', controller.user.signup);
    // 登陆
    router.post('/login', controller.user.login);
    // 获取文章列表
    router.get('/getArticleList', controller.blog.getArticleList);
    // 获取某篇文章
    router.get('/getArticle/:blogId', controller.blog.getArticle);
    // 新增文章
    router.post('/addArticle', controller.blog.addArticle);
    // 更新文章
    router.put('/updateArticle', controller.blog.updateArticle);
    // 删除文章
    router.delete('/deleteArticle', controller.blog.deleteArticle);

    app.use(router.routes());
};