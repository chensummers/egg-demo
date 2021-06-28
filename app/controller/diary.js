// /app/controller/diary.js
'use strict';

const Controller = require('egg').Controller;

// 大驼峰
class DiaryController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
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
    const result = await ctx.service.diary.add(params);
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
    const params = {
      ...ctx.request.body,
      update_time: new Date()
    };
    const result = await ctx.service.diary.update(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑失败',
      };
    }
  }
  
  async getDiaryById() {
    const { ctx } = this;
    const result = await ctx.service.diary.diaryById(ctx.params.id);
    if (result[0]) {
      ctx.body = {
        status: 200,
        data: result[0],
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
  async delete() {
    const { ctx } = this;
    console.log('ctx.params--delete', ctx.params);
    const result = await ctx.service.diary.deleteById(ctx.params.id);
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
}

module.exports = DiaryController;