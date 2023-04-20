'use strict';

const { Controller } = require('egg');

class CollectionController extends Controller {
  async isCollected() {
    const { ctx, service } = this;
    const isCollected = await service.collection.isCollected();
    ctx.body = isCollected;
  }
  async collect() {
    const { ctx, service } = this;
    await service.collection.collect();
    ctx.body = {
      success: true,
    };
  }
  async uncollect() {
    const { ctx, service } = this;
    await service.collection.uncollect();
    ctx.body = {
      success: true,
    };
  }
}
module.exports = CollectionController;