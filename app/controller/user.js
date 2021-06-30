// /app/controller/user.js
'use strict';

const Controller = require('egg').Controller;

// 大驼峰
class UserController extends Controller {
  // 生成token
  async getToken(obj) {
    return this.app.jwt.sign(obj, this.app.config.jwt.secret);
  }
  //验证token
  async checkToken(token) {
    return this.app.jwt.verify(token, app.config.jwt.secret)
  }
  async register() {
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
      // return ctx.error(ctx.paramErrors, '注册失败')
    }

    // 用户是否存在
    console.log('/user.js [37]--1', await ctx.service.user.findOne({ username }));
    if ((await ctx.service.user.findOne({ username })).length > 0) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '用户已注册'
      }
      return;
      // return ctx.error('','用户曾经存在，毋庸注册')
    }
    // 插入用户数据
    let params = {
      username,
      password,
      create_time: new Date()
    }
    let user = await ctx.service.user.create(params)
    console.log('/user.js [54]--1', user);
    if (!user) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '注册失败'
      }
      // return ctx.error('', '创立用户失败')
    } else {
      let user = await ctx.service.user.findOne({ username })
      ctx.body = {
        status: 200,
        data: { ...user[0] },
        success: true,
        msg: '注册成功'
      }
    }

  }
  async login() {
    const { ctx } = this;
    let { username, password } = ctx.request.body
    // 参数验证
    // ctx.validate({
    //   username: { type: 'string', required: true, desc: '用户名', range: { min: 5, max: 10, } },
    //   password: { type: 'string', required: true, desc: "明码" },
    // });
    // if (ctx.paramErrors) {
    //   ctx.body = {
    //     status: 50001,
    //     success: false,
    //     msg: '用户名或密码不正确'
    //   }
    //   return;
    // }
    // 验证用户是否存在
    let result = await ctx.service.user.findOne({ username });

    if (result.length === 0) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '用户名输入错误'
      }
      return;
    }

    // 校验明码是否正确
    if (result[0].password != password) {
      ctx.body = {
        status: 50001,
        success: false,
        msg: '密码错误'
      }
      return;
    }

    // 生成token
    let token = await this.getToken({ username, password });

    // 退出session/cookie/缓存中
    ctx.session.token = token;

    ctx.body = {
      status: 200,
      data: { token },
      msg: 'login success'
    }
  }
  async loginOut() {
    const { ctx } = this;
    ctx.session.token = null;
    ctx.body = {
      status: 200,
      data: null,
      msg: 'loginout success'
    }
  }
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