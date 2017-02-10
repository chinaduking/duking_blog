<template>
	<div class="posts-page">
		<nav-aside></nav-aside>
		<posts-list-aside v-bind:PostList="posts"></posts-list-aside>
		<post-edit></post-edit>
	</div>
</template>

<script type="text/javascript">
	import NavAside from '../../components/NavAside.vue'
	import PostsListAside from '../../components/PostsListAside.vue'
	import PostEdit from '../../components/PostEdit.vue'

	export default{
		data(){
			return{
				posts:[],
			}
		},

		components:{
	      NavAside,
	      PostsListAside,
	      PostEdit,
    	},

    	created () {
    		this.fetchData();
		},

    	watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'fetchData',
		    '$store.state.PostList': 'Updata'
		},

    	methods: {
	    	fetchData () {
	    		var that = this;
	    		this.$store.dispatch('getAllPost',that);
	    	},

	    	Updata(){
	    		this.posts = this.$store.state.PostList;
	    	}
	    }
	}
</script>