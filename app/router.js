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
  router.get('/user/:id', 'user.getUserById');
  router.put('/user/:id', 'user.update');
  router.delete('/user/:id', 'user.delete');
  // diary
  router.get('/diary/list', 'diary.list');
  router.post('/diary/add', controller.diary.add);
  router.post('/diary/update', controller.diary.update);
  router.get('/diary/detail/:id', controller.diary.getDiaryById);
  router.delete('/diary/delete/:id', controller.diary.delete);

  // test
  app.router.get('/search',middleware.uppercase(), controller.search.index);
  app.router.get('/search/:id/:name', controller.search.info);
  app.router.post('/form/create', controller.form.create);

  // RESTFUL风格的api
  router.resources('posts', '/api/posts', controller.posts);
};