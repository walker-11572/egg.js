const jwt = require('jsonwebtoken');

module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.session.userToken;
    if (!token) {
      ctx.status = 401;
      ctx.body = { message: 'Authentication failed' };
      return;
    }

    try {
      const decoded = jwt.verify(token, 'secret');
      ctx.state.userId = { id: decoded.id };
      await next();
    } catch (err) {
      ctx.status = 401;
      ctx.body = { message: 'Authentication failed' };
    }
  };
};
