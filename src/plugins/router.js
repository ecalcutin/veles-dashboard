import Vue from 'vue';
import VueRouter from 'vue-router';

import RouteWrapper from '@/components/RouteWrapper';
import AuthorizedLayout from '@/views/layouts/AuthorizedLayout';

import SettingsRoutes from '@/views/settings/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: RouteWrapper,
    children: [
      {
        path: '',
        component: AuthorizedLayout,
        children: [SettingsRoutes]
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
