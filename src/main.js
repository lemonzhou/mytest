// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import home from './components/home/home'
import category from './components/category/category'
import cart from './components/cart/cart'
import order from './components/order/order'

Vue.use(VueRouter)

Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/category', component: category },
    { path: '/cart', component: cart },
    { path: '/order', component: order }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
