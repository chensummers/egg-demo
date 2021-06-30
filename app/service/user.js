'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async regster() {
    const { app } = this;
    try {
      const result = await app.mysql.select('diary');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async login() {
    const { app } = this;
    try {
      const result = await app.mysql.select('diary');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async loginOut() {
    const { app } = this;
    try {
      const result = await app.mysql.select('diary');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select('diary');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async update(params) {
    const { app } = this;
    try {
      const result = await app.mysql.update('diary', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async findOne(username) {
    const { app } = this;
    if (!username) {
      console.log('username不能为空');
      return null;
    }
    try {
      const result = await app.mysql.select('user', {
        where: { username },
      });
      console.log('/user.js [75]--1--result',result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async userById(id) {
    const { app } = this;
    if (!id) {
      console.log('id不能为空');
      return null;
    }
    try {
      const result = await app.mysql.select('user', {
        where: { id },
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async deleteById(id) {
    const { app } = this;
    try {
      const result = await app.mysql.delete('diary', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
    
}
module.exports = UserService;