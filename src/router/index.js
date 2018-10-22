import Vue from 'vue';
import Router from 'vue-router';
import info from './info.js';
import joinStock from './joinStock.js';
import order from './order.js';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: resolve => require(['@/pages/layout/index'], resolve),
      meta: {
        title: '后台模板',
        keepAlive: true,
      },
      children: [{
          path: '/home',
          name: 'home',
          component: resolve => require(['@/pages/index/index'], resolve),
          meta: {
            title: '概括',
            keepAlive: true,
          }
        },
        ...info,
        ...joinStock,
        ...order
      ]
    },
    {
      path: '*',
      name: 'empty',
      component: resolve => require(['@/pages/empty/index'], resolve),
    },
  ]
})
