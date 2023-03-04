'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async generateHomePosts() {
    const { ctx } = this;
    const posts = await ctx.service.home.returnPosts();
    ctx.body = posts;
  }
}

module.exports = HomeController;
