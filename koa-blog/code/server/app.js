const koa  = require('koa');
const router = require('./router');
const config = require('./config');
const middleware = require('./middleware');
require('./db');

const app = new koa();
middleware(app);
router(app);

app.listen(config.port, '0.0.0.0', () => {
    console.log(`server is running at http://localhost:${config.port}`);
});