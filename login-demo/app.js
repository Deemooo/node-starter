// 按照官方示例
const Koa = require('koa');
const path = require('path');
const router = require('./router');
const bodyParse = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');

const app = new Koa();

app.use(bodyParse());
app.use(staticFiles(path.resolve(__dirname, './public')));
app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        trimBlocks: true
    }
}));
router(app);

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
});