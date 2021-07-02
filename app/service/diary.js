'use strict';

const Service = require('egg').Service;

class DiaryService extends Service {
  async list(params) {
    const { app } = this;
    try {
      const result = await app.mysql.select('diary',{
        where:params
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async add(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('diary', params);
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
  async diaryById(id) {
    const { app } = this;
    
    try {
      const result = await app.mysql.select('diary', {
        where: {id},
      });
      return result[0];
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
module.exports = DiaryService;