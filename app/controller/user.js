'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const user = await service.user.login();
    if (user) {
      // 生成csrf token并将其存入session中
      const csrfToken = ctx.csrf;
      ctx.session.csrfToken = csrfToken;
      ctx.body = { success: true, csrfToken };
    } else {
      ctx.body = { success: false };
      ctx.status = 401;
    }
  }
  async register() {
    const { ctx, service } = this;
    const result = await service.user.register();
    ctx.body = {
      success: result,
    };
  }
}
module.exports = UserController;
