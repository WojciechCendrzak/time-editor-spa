import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Editor',
    component: () => import('../../pages/editor/editor.page.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../../pages/about/about.page.vue'),
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
