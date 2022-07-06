/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 00:33:56
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-07 00:38:26
 * @Description: file content
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  // 局部生效的中间件
  const logger = middleware.myLogger({ allowedMethod: 'GET' }, app);

  router.get('/', controller.home.index);

  router.get('/test/:id', controller.test.index);

  router.post('/test/:id', controller.test.index);

  // url后面是串行执行的中间件
  router.get('/dog', logger, controller.test.getDog);
};
