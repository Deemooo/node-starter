// 按照官方示例
const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyParse = require('koa-bodyparser');

app.use(bodyParse());
router(app);

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
});