import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuesax from "./plugins/vuesax";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuesax,
  render: (h) => h(App),
}).$mount("#app");
