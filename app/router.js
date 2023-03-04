'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/generateHomePosts', controller.home.generateHomePosts);
  router.get('/api/getCategory/:id', controller.home.getCategory);
  router.get('/api/getTag/:id', controller.home.getTag);
};
