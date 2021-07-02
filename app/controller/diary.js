// /app/controller/diary.js
'use strict';

const Controller = require('egg').Controller;

// 大驼峰
class DiaryController extends Controller {
  async list() {
    const { ctx, app} = this;
    const {userid} = app;
    const result = await ctx.service.diary.list({userid});
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 50001,
        errMsg: '获取失败',
      };
    }
  }
  async add() {
    const { ctx, app } = this;
    const {userid} = app;
    const params = {
      userid,
      ...ctx.request.body,
      create_time: new Date()
    };
    const result = await ctx.service.diary.add(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: null,
        success:true,
        msg:'success'
      };
    } else {
      ctx.body = {
        status: 50001,
        errMsg: '添加失败',
      };
    }
  }
  async update() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
      update_time: new Date()
    };
    delete params.create_time
    const result = await ctx.service.diary.update(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 50001,
        errMsg: '编辑失败',
      };
    }
  }
  
  async getDiaryById() {
    const { ctx, app } = this;
    const {id} = ctx.params;
    if (!id) {
      ctx.body = {
        status: 50001,
        errMsg: 'id 不能为空',
      };
      return;
    }

    const result = await ctx.service.diary.diaryById(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
        success: true,
        msg:'success'
      };
    } else {
      ctx.body = {
        status: 50001,
        errMsg: '获取失败',
      };
    }
  }
  async delete() {
    const { ctx } = this;
    const {id} = ctx.params;
    const result = await ctx.service.diary.deleteById(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: null,
        success: true,
        msg:'success'
      };
    } else {
      ctx.body = {
        status: 50001,
        errMsg: '删除失败',
      };
    }
  }  
}

module.exports = DiaryController;