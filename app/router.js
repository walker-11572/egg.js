'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  require('./router/user')(app);
  router.get('/api/generateHomePosts', controller.home.generateHomePosts);
  router.get('/api/getCategory/:id', controller.home.getCategory);
  router.get('/api/getTag/:id', controller.home.getTag);
  router.get('/api/getBlog/:id', controller.home.getBlog);
  router.get('/api/isLiked', controller.like.isLiked);
  router.post('/api/like', controller.like.like);
  router.delete('/api/dislike/:user_id/:likeable_type/:likeable_id', controller.like.dislike);
  router.get('/api/isCollected', controller.collection.isCollected);
  router.post('/api/collect', controller.collection.collect);
  router.delete('/api/uncollect/:user_id/:post_type/:post_id', controller.collection.uncollect);
};
