const Service = require('egg').Service;

class PostService extends Service {
  async returnPosts() {
    const posts = await this.app.mysql.select('post');
    return posts;
  }
  async returnCategory() {
    const Category_id = await this.app.mysql.get('post_category', {
      post_id: this.ctx.params.id,
    });
    const Category = await this.app.mysql.get('category', { id: Category_id.category_id });
    return Category;
  }
}

module.exports = PostService;
