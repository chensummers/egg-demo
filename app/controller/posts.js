
const Controller = require('egg').Controller;

class PostsController extends Controller {
    async index () {
    
        this.ctx.body = 'RESTful index'
    }
    async new () {
        this.ctx.body = 'RESTful new'
    }

    async create () {
        this.ctx.body = 'RESTful create'
    }
    async show () {
        this.ctx.body = 'RESTful show'
    }
    async edit () {
        this.ctx.body = 'RESTful edit'
    }
    async update () {
        this.ctx.body = 'RESTful update'
    }
    async destroy () {
        this.ctx.body = 'RESTful destroy'
    }
}

module.exports = PostsController;