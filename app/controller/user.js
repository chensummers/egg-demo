// /app/controller/user.js
'use strict';
const Controller = require('egg').Controller;

// 大驼峰
class UserController extends Controller {
  async list() {
    const { ctx } = this;
    console.log('/user.js [9]--1',ctx);
    const result = await ctx.service.user.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        msg: '获取失败',
      };
    }
  }
  async add() {
    const { ctx } = this
    const { username, password } = ctx.request.body
    //参数验证
    ctx.validate({
      username: { type: 'string', required: true, desc: '用户名', range: { min: 5, max: 10, } },
      password: { type: 'string', required: true, desc: "明码" },
    });

    console.log('register----err', ctx.paramErrors);
    // 校验失败返回
    if (ctx.paramErrors) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '用户注册信息不对'
      }
      return;
    }

    // 用户是否存在
    console.log('/user.js [37]--1', await ctx.service.user.findOne({ username }));
    if ((await ctx.service.user.findOne({ username }))) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '用户已注册'
      }
      return;
    }
    // 插入用户数据
    let params = {
      username,
      password,
      create_time: new Date()
    }
    let user = await ctx.service.user.create(params)
    if (!user) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '添加失败'
      }
    } else {
      let user = await ctx.service.user.findOne({ username })
      ctx.body = {
        status: 200,
        data: { ...user,userid:user.id},
      }
    }
  }
  async update() {
    const { ctx } = this;
    delete ctx.request.body.create_time;
    const params = {
      ...ctx.request.body,
      update_time: new Date()
    };
    const result = await ctx.service.user.update(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        msg: '更新失败',
      };
    }
  }

  async getUserInfo() {
    const {app} = this;
    const {userid} = app;
    console.log('/user.js [72]--1',userid);
    await this.getUserById(userid)
  }

  async getUserById(id) {
    const { ctx } = this;
    const _id = ctx.params.id||id;
    console.log('/user.js [79]--1',_id);
    if (!_id) {
      ctx.body = {
        status: 50001,
        msg: 'id 不能为空'
      }
      return;
    }
    const result = await ctx.service.user.findOne({ id:_id });
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500001,
        msg: '获取失败',
      };
    }
  }

  async delete() {
    const { ctx } = this;

    if (await ctx.service.user.deleteById(ctx.params.id)) {
      ctx.body = {
        status: 200,
        data: null,
      };
    } else {
      ctx.body = {
        status: 500,
        msg: '获取失败',
      };
    }
  }
}

module.exports = UserController;