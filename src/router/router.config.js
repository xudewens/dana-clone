/*
 * @Author: your name
 * @Date: 2022-04-22 23:28:48
 * @LastEditTime: 2025-05-22 16:54:10
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/router/router.config.js
 */
// import Home from '../views/Home.vue';
import orderStatus from '@/views/orderStatus/orderStatus.vue' // 订单状态页
import IndexHome from '@/views/home/IndexHome.vue' // 首页
import login from '@/views/login/login.vue' // 登录页

import showModal from '@/views/modalView/showModal.vue' // 矿机商城

// 定义路由
const routes = [{
    path: '/',
    redirect: "/orderStatus"
  },
  {
    path: '/IndexHome',
    name: 'IndexHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: IndexHome
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  },
  {
    path: '/orderStatus',
    name: 'orderStatus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: orderStatus
  },
  // 展示弹出框页面
  {
    path: '/showModal',
    name: 'showModal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: showModal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
];

export {
  routes
};
