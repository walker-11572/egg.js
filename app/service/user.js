const Service = require('egg').Service;
class UserService extends Service {
  async login() {
    const { ctx, app } = this;
    const user_id = await app.mysql.query(
      'select id from users where email = ? or phone = ? and password = ?',
      [ ctx.query.userInfo, ctx.query.userInfo, ctx.query.password ]
    );
    return user_id;
  }
  async register() {
    const { ctx } = this;
    const result = await this.app.mysql.insert('users', ctx.request.body);
    console.log(result);
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
  async getUsername(id) {
    const username = await this.app.mysql.query(
      'select username from users where id = ?',
      [ id ]
    );
    return username;
  }
  async getAvatar(userId) {
    const { app } = this;
    const url = await app.mysql.query('select avatar from users where id = ?', [
      userId,
    ]);
    return url;
  }
}
module.exports = UserService;
