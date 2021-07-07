// app/router.js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const checkToken = middleware.checkToken();
  const checkPrivilege = middleware.checkPrivilege();
  
  router.get('/', controller.home.index);
  // login
  router.post('/register', 'login.register');
  router.post('/login', 'login.login');
  router.post('/loginout', 'login.loginOut');
  // user
  router.post('/user/list',checkToken, checkPrivilege, 'user.list');
  router.post('/user/add', checkToken, 'user.add');
  router.get('/user/get', checkToken, 'user.getUserInfo');
  router.get('/user/:id', checkToken, 'user.getUserById'); //通配路由写在后面
  router.put('/user/update', checkToken, 'user.update');
  router.delete('/user/:id',checkToken, 'user.delete');
  // diary
  router.get('/diary/list', checkToken, 'diary.list');
  router.post('/diary/add', checkToken, controller.diary.add);
  router.post('/diary/update', checkToken, controller.diary.update);
  router.get('/diary/detail/:id', checkToken, controller.diary.getDiaryById);
  router.delete('/diary/delete/:id', checkToken, controller.diary.delete);

  // test
  app.router.get('/search',middleware.uppercase(), controller.search.index);
  app.router.get('/search/:id/:name', controller.search.info);
  app.router.post('/form/create', controller.form.create);

  // RESTFUL风格的api
  router.resources('posts', '/api/posts', controller.posts);
};