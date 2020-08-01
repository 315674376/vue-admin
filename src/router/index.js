/*
 * @Author: cbw
 * @Date: 2020-07-25 16:23:48
 * @Description: file content
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // 路由懒加载
    component: () => import("../components/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

/**
 * @description: 挂载路由导航守卫
 * @param to  将要访问的路径
 * @param from 代表从哪个路径跳转而来
 * @param {func} next() 是一个函数代表放行 里面放页面路径next('./login')
 * @return:
 */
router.beforeEach((to, from, next) => {
  // 如果访问的是登录页面直接放行
  if (to.path === "/login") return next();
  // 获取token,有可能是空值
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("./login");
  next();
});

export default router;
