const path = require('path');
const bodyParse = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');

const miSend = require('./mi-send');
const miLog = require('./mi-log');
module.exports = (app) => {
    app.use(miLog());
    app.use(staticFiles(path.resolve(__dirname, "../public")));
    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }));
    app.use(bodyParse());
    app.use(miSend());
};