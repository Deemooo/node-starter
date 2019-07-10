const koa  = require('koa');
const router = require('./router');
const config = require('./config');
require('./db');

const app = new koa();
router(app);

app.listen(config.port, '0.0.0.0', () => {
    console.log(`server is running at http://localhost:${config.port}`);
});