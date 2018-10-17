import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: resolve => require(['@/pages/layout/index'], resolve),
      meta: {
        title: '库友进销存',
        keepAlive: true,
      },
      children: [{
        path: '/index',
        name: 'index',
        component: resolve => require(['@/pages/index/index'], resolve),
        meta: {
          title: '概括',
          keepAlive: true,
        }
      }]
    }
  ]
})
