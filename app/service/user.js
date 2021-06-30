'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      console.log('/user.js [49]--1',result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select('user');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async update(params) {
    const { app } = this;
    try {
      await app.mysql.update('user', params);
      const user = await this.findOne({id:params.id})
      return user&&user[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async findOne(params) {
    const { app } = this;
    if (params && Object.keys(params).length===0) {
      console.log('params不能为空');
      return null;
    }
    try {
      const result = await app.mysql.select('user', {
        where: params,
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
      const result = await app.mysql.delete('user', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
    
}
module.exports = UserService;