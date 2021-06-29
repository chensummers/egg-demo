const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index () {
        const {ctx} = this;
        ctx.app.locals = { appName: 'egg' };
        const data = { name: 'welcome to egg' };

        await ctx.render('index',data)
        // will auto merge `data` to `ctx.locals`, output: egg - showcase
        ctx.body = await ctx.renderString('<%-name%> - <%-appName%>', data);

        // helper, ctx, request will auto inject
        // ctx.body = await ctx.renderString('<%-name%> - <%-helper.lowercaseFirst(ctx.app.config.baseDir)%>', data);
        // this.ctx.body = 'RESTful index'
    }
}

module.exports = HomeController;