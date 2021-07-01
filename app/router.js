// app/router.js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  
  router.get('/', controller.home.index);
  // login
  router.post('/register', 'login.register');
  router.post('/login', 'login.login');
  router.post('/loginout', 'login.loginOut');
  // user
  router.post('/user/list', 'user.list');
  router.get('/user/get', middleware.checkToken(), 'user.getUserInfo');
  router.get('/user/:id', 'user.getUserById'); //通配路由写在后面
  router.put('/user/:id', 'user.update');
  router.delete('/user/:id', 'user.delete');
  // diary
  router.get('/diary/list', middleware.checkToken(), 'diary.list');
  router.post('/diary/add', middleware.checkToken(), controller.diary.add);
  router.post('/diary/update', middleware.checkToken(), controller.diary.update);
  router.get('/diary/detail/:id', middleware.checkToken(), controller.diary.getDiaryById);
  router.delete('/diary/delete/:id', middleware.checkToken(), controller.diary.delete);

  // test
  app.router.get('/search',middleware.uppercase(), controller.search.index);
  app.router.get('/search/:id/:name', controller.search.info);
  app.router.post('/form/create', controller.form.create);

  // RESTFUL风格的api
  router.resources('posts', '/api/posts', controller.posts);
};