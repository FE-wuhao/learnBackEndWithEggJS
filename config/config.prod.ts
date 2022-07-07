/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 00:33:56
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 23:36:58
 * @Description: file content
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.baseUrl = 'http://prod';

  return config;
};
