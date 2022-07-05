/*
 * @Author: nhsoft.wh
 * @Date: 2022-07-05 00:33:56
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-07-05 22:37:20
 * @Description: file content
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/test/:id', controller.test.index);

  router.post('/test/:id', controller.test.index);
};
