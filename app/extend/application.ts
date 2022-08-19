/*
 * @Author: nhsoft.wh
 * @Date: 2022-08-19 11:00:35
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-08-19 14:00:02
 * @Description:
 */

/**
 * extend文件的命名很讲究，
 * 想要扩展哪个对象，
 * 文件名就必须与对象的名称一致，
 * 框架最后会将extend文件的配置和core的配置进行合并
 */

/**
 * 扩展可以做方法的扩展和属性的扩展
 * 属性的扩展相较之于方法的扩展，一定要注意做好缓存
 */
import { Application } from 'egg';
import axios, { AxiosInstance } from 'axios';

// 生成一个symbol类型，作为一个唯一存在的标记
const AXIOS_INSTANCE = Symbol('Application#axios');

export default {
  echo(msg: string) {
    const that = this as Application;

    return `hello ${msg} ${that.config.name}`;
  },

  get axiosInstance(): AxiosInstance {
    // 如果当前上下文对象没有挂载AXIOS_INSTANCE
    if (!this[AXIOS_INSTANCE]) {
      // 进行axios实例的挂载
      this[AXIOS_INSTANCE] = axios.create({
        baseURL: 'https://dog.ceo/',
        timeout: 5000,
      });
    }

    // 返回axios实例
    return this[AXIOS_INSTANCE];
  },
};
