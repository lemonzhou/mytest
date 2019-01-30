// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import VueResource from 'vue-resource'
// import home from './components/home/home'
// import category from './components/category/category'
import cart from './components/cart/cart'
import order from './components/order/order'
import detail from './components/detail/detail'
import server from '../static/js/server'
import store from './store/store'
Vue.prototype.$server = server;

Vue.use(VueRouter)
// Vue.use(VueResource)

Vue.config.productionTip = false

var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import(/* webpackChunkName: 'home' */'./components/home/home') },
    { path: '/home', component: () => import(/* webpackChunkName: 'home' */'./components/home/home') },
    /* webpackChunkName: 'category' 是异步加载生成文件自定义的名称 */
    { path: '/category', component: () => import(/* webpackChunkName: 'category' */'./components/category/category') },
    { path: '/cart', component: cart },
    { path: '/order', component: order },
    { path: '/detail/', name: 'detail', component: detail }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
