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
}
module.exports = UserService;
