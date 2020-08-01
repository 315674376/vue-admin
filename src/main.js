import Vue from "vue";
// element-ui
import "@/plugins/element.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.prototype.$http = axios;
axios.defaults.baseURL = ""; // 配置请求的根路径

// 导入全局样式
import "@/assets/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
