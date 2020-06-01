import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Editor",
    component: () => import("../pages/editor/editor.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/about/about.vue")
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
