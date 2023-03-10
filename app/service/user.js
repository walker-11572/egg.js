const Service = require('egg').Service;

class UserService extends Service {
  async login() {
    const user_id = await this.app.mysql.query(
      'select id from users where email = ? or phone = ? and password = ?',
      [
        this.ctx.query.userInfo,
        this.ctx.query.userInfo,
        this.ctx.query.password,
      ]
    );
    return user_id;
  }
}
module.exports = UserService;
