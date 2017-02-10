// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'

import routes from './routers'
import {content_header} from './filters/filters'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.filter('content_header', content_header);

const router = new VueRouter({
  routes: routes.routes // （缩写）相当于 routes: routes
})

/*eslint-disable no-new */
var app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')