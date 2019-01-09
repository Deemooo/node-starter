const homeService = require('../service/home');
module.exports = {
    index: async (ctx, next) => {
        ctx.response.body = '<h1>index page</h1>';
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.response.body = '<h1>HOME page</h1>';
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = '<h1>HOME page /:id/:name</h1>';
    },
    login: async () => {
        ctx.response.body = `
            <form action="/user/register" method="post">
                <input type="text" name="name" placeholder="please input your name:">
                <br/>
                <input type="text" name="password" placeholder="please input your password">
                <br/>
                <button>Go!</button>
            </form>
        `;
    },
    register: async (ctx, next) => {
        let {name, password} = ctx.request.body;
        let data = await homeService.register(name, password);
        ctx.response.body = data;
    }
};