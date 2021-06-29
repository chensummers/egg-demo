const Service = require('egg').Service;

let memoryCache = {};
const mockCheck = () => true;
const mockFetch = () => ({name:''});
class SourceService extends Service {
  get(key) {
    return memoryCache[key];
  }

  async checkUpdate() {
    // check if remote data source has changed
    const updated = await mockCheck();
    console.log('/source.js [13]--1','checkupdate');
    this.ctx.logger.info('check update response %s', updated);
    return updated;
  }

  async update() {
    // update memory cache from remote
    memoryCache = await mockFetch();
    console.log('/source.js [20]--1','update---');
    this.ctx.logger.info('update memory cache from remote: %j', memoryCache);
  }
}

module.exports = SourceService;