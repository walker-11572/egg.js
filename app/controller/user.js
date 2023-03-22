'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const userId = await service.user.login();
    if (userId) {
      const token = jwt.sign(
        {
          id: userId,
          username: await service.user.getUsername(userId),
        },
        'secret',
        { expiresIn: '7d' }
      );
      ctx.session.userToken = token;
      // 生成csrf token并将其存入session中
      const csrfToken = ctx.csrf;
      ctx.session.csrfToken = csrfToken;
      ctx.body = { success: true, ...userId[0], csrfToken };
    } else {
      ctx.body = { success: false };
      ctx.status = 401;
    }
  }
  async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.body = { success: true };
  }
  async register() {
    const { ctx, service } = this;
    const result = await service.user.register();
    ctx.body = {
      success: result,
    };
  }
  async getAvatar() {
    const { ctx, service } = this;
    const url = await service.user.getAvatar(ctx.params.id);
    ctx.body = { ...url[0] };
  }
}
module.exports = UserController;
