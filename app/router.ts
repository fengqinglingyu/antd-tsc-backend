import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // router.get('/', controller.home.index);
  router.get('/get-detail', controller.home.getInfo);
  router.get('/get-person-list', controller.home.getPersonList);
  router.post('/create', controller.home.create);
  router.patch('/update', controller.home.update);
};
