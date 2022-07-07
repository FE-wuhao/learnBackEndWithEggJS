/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-06 00:05:19
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 23:39:07
 * @Description: file content
 */
import { Service } from 'egg';

interface IDogRes {
  message: string;
  status: string;
}

export default class DogService extends Service {
  async show() {
    const res = await this.ctx.curl<IDogRes>('https://dog.ceo/api/breeds/image/random', {
      dataType: 'json',
    });

    return res.data;
  }
}
