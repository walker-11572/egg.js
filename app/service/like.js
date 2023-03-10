const Service = require('egg').Service;

class LikeService extends Service {
  async isLiked() {
    const isLiked = await this.app.mysql.select('like', {
      where: {
        user_id: `${this.ctx.query.user_id}`,
        likeable_type: `${this.ctx.query.likeable_type}`,
        likeable_id: `${this.ctx.query.likeable_id}`,
      },
      columns: [ 'id' ],
    });
    return isLiked;
  }
  async like() {
    const result = await this.app.mysql.insert('like', this.ctx.request.body);
    await this.app.mysql.query(
      'update post set liked_count = (liked_count + 1) where id = ?',
      [ this.ctx.request.body.likeable_id ]
    );
    const updateSuccess = result.affectedRows === 1;
  }
  async dislike() {
    const result = await this.app.mysql.delete('like', {
      user_id: `${this.ctx.params.user_id}`,
      likeable_type: `${this.ctx.params.likeable_type}`,
      likeable_id: `${this.ctx.params.likeable_id}`,
    });
    await this.app.mysql.query(
      'update post set liked_count = (liked_count - 1) where id = ?',
      [ this.ctx.params.likeable_id ]
    );
    const updateSuccess = result.affectedRows === 1;
  }
}
module.exports = LikeService;
