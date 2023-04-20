const Service = require('egg').Service;

class CollectionService extends Service {
  async isCollected() {
    const isCollected = await this.app.mysql.select('collection', {
      where: {
        user_id: `${this.ctx.query.user_id}`,
        post_type: `${this.ctx.query.post_type}`,
        post_id: `${this.ctx.query.post_id}`,
      },
      columns: [ 'id' ],
    });
    return isCollected;
  }
  async collect() {
    const result = await this.app.mysql.insert('collection', this.ctx.request.body);
    await this.app.mysql.query(
      'update posts set collected_count = (collected_count + 1) where id = ?',
      [ this.ctx.request.body.post_id ]
    );
    const updateSuccess = result.affectedRows === 1;
  }
  async uncollect() {
    const result = await this.app.mysql.delete('collection', {
      user_id: `${this.ctx.params.user_id}`,
      post_type: `${this.ctx.params.post_type}`,
      post_id: `${this.ctx.params.post_id}`,
    });
    await this.app.mysql.query(
      'update posts set collected_count = (collected_count - 1) where id = ?',
      [ this.ctx.params.post_id ]
    );
    const updateSuccess = result.affectedRows === 1;
  }
}
module.exports = CollectionService;