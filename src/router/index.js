import VueRouter from "vue-router";

import Posts from "../components/Posts";
import Info from "../components/Info";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Posts,
    },
    {
      path: "/post/:id",
      component: Info,
    },
  ],
});
