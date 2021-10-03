import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/reportes",
      name: "reportes",
      component: () => import("./components/reportesList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/Addreporte")
    }
  ]
});
