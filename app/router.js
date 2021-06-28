// app/router.js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  
  router.get('/diary/list', controller.diary.list);
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