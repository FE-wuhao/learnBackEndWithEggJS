/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 22:16:11
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-08-20 09:43:04
 * @Description: file content
 */
import { Controller } from 'egg';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/';

const client = new MongoClient(url);

export default class TestController extends Controller {
  async index() {
    const { ctx } = this;

    const { query, body } = ctx.request;

    const { id } = ctx.params;

    const { config } = ctx.app;

    ctx.helper.success({ ctx, res: { ...query, id, body, baseUrl: config.baseUrl } });

    // // 试用application上的扩展方法echo成功
    // ctx.response.body = this.app.echo('wuhao');

    // // 创建单例axios实例
    // const axios = this.app.axiosInstance;
    // // 通过实例请求资源
    // const image = await axios.get('/api/breeds/image/random');
    // // 打印接口返回内容
    // ctx.response.body = this.app.echo(image.data.message);

    // // 测试使用logger中间件调试
    // ctx.logger.debug('debug');
    // ctx.logger.info('info');
    // ctx.logger.warn('warn');
    // ctx.logger.error(new Error('ddsfdsf'));

    // 测试连接mongodb
    try {
      await client.connect();

      const db = client.db('test');

      const res = await db.command({ ping: 1 });

      console.log(res, 'db ping');
    } catch (err) {
      console.log(err, 'error');
    } finally {
      await client.close();
    }
  }

  async getDog() {
    const { service, ctx } = this;

    const dogResult = await service.dog.show();

    await ctx.render('test.nj', { url: dogResult.message });
  }
}
