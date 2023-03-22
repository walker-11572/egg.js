'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/login', controller.user.login);
  router.post('/api/user/register', controller.user.register);
};
