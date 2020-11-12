import Vue from "vue";
import VueRouter from "vue-router";
import Request from "../views/Request.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Request",
    component: Request
  },
  {
    path: "/result",
    name: "Result",
    // route level code-splitting
    // this generates a separate chunk (result.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "result" */ "../views/Result.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
