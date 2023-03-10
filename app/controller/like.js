'use strict';

const { Controller } = require('egg');

class LikeController extends Controller {
  async isLiked() {
    const { ctx, service } = this;
    const isLiked = await service.like.isLiked();
    ctx.body = isLiked;
  }
  async like() {
    const { ctx, service } = this;
    await service.like.like();
    ctx.body = {
      success: true,
    };
  }
  async dislike() {
    const { ctx, service } = this;
    await service.like.dislike();
    ctx.body = {
      success: true,
    };
  }
}
module.exports = LikeController;
