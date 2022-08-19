/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 00:33:56
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-08-19 15:37:38
 * @Description: file content
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656952413095_9714';

  // add your egg config in here
  // 全局启用的中间件
  config.middleware = [];
  // config.middleware = ['myLogger'];
  // 中间件logger的配置（作用域为全局），配置过后，在中间件logger的形参中能拿到配置
  config.myLogger = {
    allowedMethod: ['POST'],
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.bodyParser = {
    jsonLimit: '10mb',
  };

  // add your special config in here  业务逻辑
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    // 这边配置等效于上面直接配置，这是为什么呢？为了其他文件中也能获得类型联想
    myLogger: {
      allowedMethod: ['POST'],
    },
    baseUrl: 'http://default',
  };

  // the return config will combines to EggAppConfig
  return {
    ...(config as {}),
    ...bizConfig,
  };
};
