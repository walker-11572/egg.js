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
  async getCategory() {
    const { ctx } = this;
    const Category = await ctx.service.home.returnCategory();
    ctx.body = Category;
  }
  async getTag() {
    const { ctx } = this;
    const Tag = await ctx.service.home.returnTag();
    ctx.body = Tag;
  }
}

module.exports = HomeController;
