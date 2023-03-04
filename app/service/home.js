const Service = require('egg').Service;

class PostService extends Service {
  async returnPosts() {
    const posts = await this.app.mysql.select('post');
    return posts;
  }
}

module.exports = PostService;
