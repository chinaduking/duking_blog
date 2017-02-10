import Home from './views/home/index.vue'
import About from './views/about/index.vue'
import Login from './views/login/index.vue'

export default {
    //路由表
    routes:[
    		{ path: '/home', component: Home },
    		{ path: '/about',component: About },
        	{ path: '/login',component: Login },
  			{ path: '/', redirect: '/home'},

    ]
};