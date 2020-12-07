/*
 * @Author: cbw
 * @Date: 2020-08-01 19:30:34
 * @Description: file content
 */

import Vue from "vue";
// element-ui
import "@/plugins/element.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = ""; // 配置请求的根路径

// config 是请求的对象
axios.interceptors.request.use(config => {
  console.log(config);
  // config.headers  请求头
  config.headers.token = window.sessionStorage.getItem("token");
  // 最后必须有返回return
  return config;
});

// TODO 这里还能做个返回拦截器，拦住除了状态码200 之外的状态
Vue.prototype.$http = axios;

// 导入全局样式
import "@/assets/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
