import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
      // 主页
      {
        path: '/',
        name: 'home',
        component: resolve => require(['../pages/home.vue'], resolve)
      },
      // 我的收藏
      {
        path: '/collection',
        name: 'collection',
        component: resolve => require(['../pages/collection.vue'], resolve)
      },
      // 登出
      {
        path: '/loginOut',
        name: 'loginOut',
        component: resolve => require(['../pages/loginOut.vue'], resolve)
      }
    ]
});
