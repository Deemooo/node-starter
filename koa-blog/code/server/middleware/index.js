const path = require('path');
const bodyParser = require('koa-bodyparser');
const staticFiles = require('koa-static');

const send = require('./send');
const fun = require('./fun');

module.exports = (app) => {
    app.use(send());
    app.use(fun());

    app.use(bodyParser());
    app.use(staticFiles(path.resolve(__dirname, '../../../public')));
};