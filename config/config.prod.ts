/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 00:33:56
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 23:15:42
 * @Description: file content
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  const bizConfig = {
    baseUrl: 'http://prod',
  };

  return { ...config, ...bizConfig };
};
