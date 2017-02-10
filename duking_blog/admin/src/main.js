// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueSimplemde from 'vue-simplemde'

import App from './App'
import routes from './routers'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSimplemde)

const router = new VueRouter({
  routes: routes.routes // （缩写）相当于 routes: routes
})

router.beforeEach((to,from,next) => {
	console.log(store);
	if(store.state.token == null){

		if(to.path != '/login'){
			next('/login');
		}else{
			next();
		}
	}else{
		next();
	}
})

/* eslint-disable no-new */
var app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
