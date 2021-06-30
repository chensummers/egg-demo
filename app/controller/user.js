// /app/controller/user.js
'use strict';

const Controller = require('egg').Controller;

// 大驼峰
class UserController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.user.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
  async add() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
      create_time: new Date()
    };
    const result = await ctx.service.user.add(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    if (!id) {
      ctx.body = {
        status: 500,
        errMsg: 'id 不能为空',
      };
    }
    const params = {
      id: Number(id),
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
        errMsg: '更新失败',
      };
    }
  }

  async getUserById() {
    const { ctx } = this;
    const id = ctx.params.id;
    if (!id) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: 'id 不能为空'
      }
      return;
    }
    const result = await ctx.service.user.findOne({ id });
    if (result[0]) {
      ctx.body = {
        status: 200,
        data: result[0],
      };
    } else {
      ctx.body = {
        status: 500001,
        errMsg: '获取失败',
      };
    }
  }
  async delete() {
    const { ctx } = this;
    console.log('ctx.params--delete', ctx.params);

    if (await ctx.service.user.deleteById(ctx.params.id)) {
      ctx.body = {
        status: 200,
        data: null,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
}

module.exports = UserController;