/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624587491281_3650';

  // add your middleware config here
  config.middleware = [
    'formatResponse'
    
  ];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  };
  config.cors = {
    origin: 'http://localhost:3000', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  //前端模板编译html
  config.view = {
    defaultViewEngine: 'ejs',
    mapping: { '.html': 'ejs' } //左边写成.html后缀，会自动渲染.html文件
  };

  // 表单校验
  config.validate = {
    convert: true,
    widelyUndefined:true
  };
  config.mysql = {
    // 单数据库信息配置
    //  mysql -utest -hlocalhost -ptest
    //  mysql -u root -pchenyou

    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // user: 'test',
      // 密码
      password: 'chenyou',
      // password: 'test',
      // 数据库名
      database: 'test1',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 加密鉴权
  config.jwt = {
    secret: 'chy@egg%demo'
  };

  // config.io = {
  //   // # namespace命名空间配置为
  //   namespace: {
  //     '/': {
  //       // # 预处理器中间件, 我们这里配置了一个auth, 进行权限判断, 它对应的文件是/app/io/middleware/auth.js, 这里可以配置多个文件, 用逗号隔开
  //       connectionMiddleware: ['auth'], //#这里我们可以做一些权限校验之类的操作
  //       packetMiddleware: [], //# 通常用于对消息做预处理，又或者是对加密消息的解密等操作
  //     },
  //   },
  //   // # 配置redis, 非必须, 不需要的可以不配置这块, egg-socket.io内置了socket-io-redis， 在cluster模式下, 使用redis可以较为简单的实现clients/rooms等信息共享
  //   redis: {
  //     host: 'ip地址',
  //     prot: 6379,
  //     auth_pass: 123456,
  //     db:0, 
  //   }
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
  
};

