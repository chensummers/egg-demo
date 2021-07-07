'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // cors
  cors:{
    enable: true,
    package:'egg-cors'
  },
  // 模版编译
  ejs:{
    enable: true,
    package: 'egg-view-ejs'
  },
  // 数据库
  mysql:{
    enable: true,
    package: 'egg-mysql'
  },
  // 表单校验
  validate:{
    enable: true,
    package: 'egg-validate',
  },
  // 加密鉴权
  jwt:{
    enable: true,
    package: "egg-jwt"
  },
  // io:{
  //   enable: true,
  //   package: 'egg-socket.io',
  // }
};
