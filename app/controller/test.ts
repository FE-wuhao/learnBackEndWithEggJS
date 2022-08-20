/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 22:16:11
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-08-20 10:48:35
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

    try {
      // 测试连接mongodb
      await client.connect();

      const db = client.db('test');

      const res = await db.command({ ping: 1 });

      console.log(res, 'db ping');

      // // 数据的插入
      // const testCollection = db.collection('test');

      // const result = await testCollection.insertOne({ name: 'wuhao', age: 18 });

      // const resultArr = await testCollection.insertMany([
      //   { name: 'wuhao', age: 18 },
      //   { name: '王文娟', age: 18 },
      // ]);

      // console.log({ resultArr, result }, 'result');

      // 数据查询
      const testCollection = db.collection('test');

      // 查询单条数据
      // const result = await testCollection.findOne({ name: 'wuhao' });

      // // 1.使用foreach
      // const resultArrCursor = testCollection.find({ name: 'wuhao' });

      // await resultArrCursor.forEach((doc) => console.log(doc, 'doc'));
      // // 2.使用toArray（失去了mongodb的cursor的优化，小心爆内存）
      // const resultArrCursor = await testCollection.find({ name: 'wuhao' }).toArray();

      // console.log({ result, resultArrCursor }, 'result');

      /** 使用操作符进行查询:
       *
       * 比较操作符：
       *    大于：$gt
       *    大于等于：$gte
       *    小于：$lt
       *    小于等于：$lte
       *    等于：$eq
       *    不等于：$neq
       *
       * 逻辑操作符：
       *    逻辑与：直接对象中添加多个条件，或者使用操作符$and
       *    逻辑或：$or
       *
       * 元素操作符：
       * 判断属性是否存在：$exists
       * 判断属性的类型是否为指定类型：$type
       */

      // // 比较操作符查询
      // const resultArrCursor = await testCollection.find({ name: { $eq: '王文娟' } }).toArray();

      // // 逻辑操作符查询
      // const resultArrCursor = await testCollection
      //   .find({
      //     $or: [{ name: { $eq: '王文娟' } }, { name: { $eq: 'wuhao' } }],
      //     $and: [{ age: { $eq: 18 } }],
      //   })
      //   .toArray();

      // 元素操作符
      const resultArrCursor = await testCollection
        .find({ $and: [{ age: { $exists: true } }, { name: { $type: 'number' } }] })
        .toArray();

      console.log({ resultArrCursor }, 'result');
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
