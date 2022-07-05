/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 22:16:11
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-05 22:36:05
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
}
