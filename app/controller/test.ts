/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 22:16:11
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-06 00:29:46
 * @Description: file content
 */
import { Controller } from 'egg';

export default class TestController extends Controller {
  async index() {
    const { ctx } = this;

    const { query, body } = ctx.request;

    const { id } = ctx.params;

    ctx.body = { ...query, id, body };

    ctx.status = 200;
  }

  async getDog() {
    const { service, ctx } = this;

    const dogResult = await service.dog.show();

    await ctx.render('test.nj', { url: dogResult.message });
  }
}
