import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RoutesView from '@/ui/views/RoutesView.vue';

Vue.use(VueRouter);

const RoutesRoute: RouteConfig = {
  name: 'routes',
  path: '/routes',
  component: RoutesView,
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    RoutesRoute,
  ],
});

export default router;
