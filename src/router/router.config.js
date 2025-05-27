/*
 * @Author: your name
 * @Date: 2022-04-22 23:28:48
 * @LastEditTime: 2025-05-27 10:39:42
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/router/router.config.js
 */
// import Home from '../views/Home.vue';
import ipgLogin from "@/views/ipgLogin/index.vue"; // pin登录
import login from "@/views/login/login.vue"; // 登录页
import checkout from "@/views/orderStatus/checkout.vue"; // 注册
import orderStatus from "@/views/orderStatus/orderStatus.vue"; // 订单状态页

// import showModal from "@/views/modalView/showModal.vue"; // 矿机商城

// 定义路由
const routes = [
  {
    path: "/",
    redirect: "/orderStatus",
  },
  {
    path: "/ipgLogin",
    name: "ipgLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ipgLogin,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login,
  },
  {
    path: "/orderStatus",
    name: "orderStatus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: orderStatus,
  },
  {
    path: "/checkout",
    name: "checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: checkout,
  },
  // 展示弹出框页面
  // {
  //   path: "/showModal",
  //   name: "showModal",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: showModal,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export { routes };
