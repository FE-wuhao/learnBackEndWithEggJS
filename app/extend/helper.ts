/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-12 22:21:17
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-13 21:54:08
 * @Description: file content
 */
import { Context } from 'egg';

export interface IResponse {
  ctx: Context;
  res: any;
  message?: string;
}

export default {
  success: ({ ctx, res, message }: IResponse) => {
    ctx.body = {
      code: 0,
      data: res || null,
      message: message || '请求成功',
    };

    ctx.status = 200;
  },
};
