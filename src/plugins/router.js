import Vue from 'vue';
import VueRouter from 'vue-router';

import RouteWrapper from '@/components/RouteWrapper';
import AuthorizedLayout from '@/views/layouts/AuthorizedLayout';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: RouteWrapper,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: AuthorizedLayout,
        children: []
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
