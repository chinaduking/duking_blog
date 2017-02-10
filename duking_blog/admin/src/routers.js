import Home from './views/home/index.vue'
import Posts from './views/posts/posts.vue'
import Login from './views/login/login.vue'

export default {
    //路由表
    routes:[
    		{ path: '/home', component: Home },
    		{ path: '/posts', component: Posts },
    		{ path: '/login', component: Login },
  			{ path: '/', redirect: '/home'},

    ]
};