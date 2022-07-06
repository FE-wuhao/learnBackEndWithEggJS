/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-07 00:02:29
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 00:08:21
 * @Description: file content
 */
import { Context } from 'egg';
import { appendFileSync } from 'fs';

export default () => {
  return async (ctx: Context, next: () => Promise<any>): Promise<any> => {
    const startTime = Date.now();

    const requestTime = new Date();

    await next();

    const duration = Date.now() - startTime;

    const logTime = `${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${duration}ms`;

    appendFileSync('./log.txt', logTime + '\n');
  };
};
