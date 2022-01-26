import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import VueRouter from "vue-router";
import router from "./router/index";

Vue.config.productionTip = false;

Vue.use(Vuesax);
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
