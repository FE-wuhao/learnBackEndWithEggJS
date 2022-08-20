/*
 * @Author: nhsoft.wh
 * @Date: 2022-08-19 14:10:48
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-08-19 17:43:49
 * @Description: 项目启动初始化生命周期配置文件
 */
import {
  IBoot,
  // Application
} from 'egg';

export default class AppBoot implements IBoot {
  // private readonly app: Application;

  // constructor(app: Application) {
  //   this.app = app;
  // }

  configWillLoad() {
    // 此时config文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // console.log(this.app.config.baseUrl, 'config');
    // console.log(this.app.config.coreMiddleware, 'coreMiddleware');
    // 添加中间件的又一种方式
    // this.app.config.coreMiddleware.unshift('myLogger');
  }

  async willReady() {
    // console.log('will ready', this.app.config.coreMiddleware);
  }

  async didReady() {
    // const ctx = await this.app.createAnonymousContext();
    // const res = await ctx.service.test.sayHi('sdfsdf');
    // console.log('did ready', { res, middlewares: this.app.middleware });
  }
}
