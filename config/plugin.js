'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors:{
    enable: true,
    package:'egg-cors'
  },
  ejs:{
    enable: true,
    package: 'egg-view-ejs'
  },
  mysql:{
    enable: true,
    package: 'egg-mysql'
  },
  // 表单校验
  validate:{
    enable: true,
    package: 'egg-validate',
  }
};
