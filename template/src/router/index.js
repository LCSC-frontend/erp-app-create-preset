import config from '@/utils/router-config';
import view from './view';

const routes = [
  {
    path: config.routesPrefix,
    component: view,
    children: config.routes,
  },
];

export default routes;
