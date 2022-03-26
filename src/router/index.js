import { createRouter, createWebHashHistory } from "vue-router";
import homeview from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeview,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/order",
    name: "ordercake",
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/OrderCake.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/vieworders",
    name: "vieworders",
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/ViewOrders.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
