/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-07 00:02:29
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 23:41:05
 * @Description: 中间件要默认导出一个函数
 */
import { Application, Context, EggAppConfig } from 'egg';
import { appendFileSync } from 'fs';

export default (options: EggAppConfig['myLogger'], app: Application) => {
  console.log(options, 'options');

  console.log(app.config.logger, 'app.config.logger');

  return async (ctx: Context, next: () => Promise<any>): Promise<any> => {
    const startTime = Date.now();

    const requestTime = new Date();

    await next();

    const duration = Date.now() - startTime;

    const logTime = `${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ctx.app.config.baseUrl} -- ${duration}ms`;

    // 只有请求是配置允许的请求类型时，才会生成日志
    if (options.allowedMethod.includes(ctx.method)) {
      appendFileSync('./log.txt', logTime + '\n');
    }
  };
};
