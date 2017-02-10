<template>
	<div class="posts-list-aside">
		<section class="post-list-column">
			<h3 class="page-title"><i class="fui-list-columned iconfont"></i> 文章列表 <a href="#"><i class="iconfont fui-plus icon-add"></i></a></h3>

			<div class="post-list">
				<ul class="title-list">
					<li class="post-list-item" v-for="(post,index) in PostList" @click="focus(index)">
						<article class="post-list-content" :class='true'>
							<h4><a href="javascript:;">{{post.title}}</a></h4>
							<h6>{{post.time}}</h6>
						</article>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>


<style type="text/css">
	.posts-list-aside{margin-left: 70px;border-right: 1px solid #E0E0E0;position: fixed;height: 100%;width: 300px; background-color: #FFF;}
	.post-list-column .page-title{font-size: 24px;}
	.post-list-column .iconfont{font-size: 24px; margin-left: 20px;}
	.post-list-column .icon-add{float: right; margin-right: 20px;}
	.post-list{border-top: 2px solid #9E9E9E; margin-top: 15px;}
	.post-list-content{border-bottom: 1px solid #E0E0E0;padding: 10px 10px;}
	.post-list-content h4 {font-size: 18px;font-weight: 400;padding: 5px 0;font-weight:bold;}
	.post-list-content h6 {font-size: 12px;}

</style>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props: ['PostList'],

	    methods:{
	      focus(index){
	      	console.log(index);
	      	if(index !== this.$store.state.currentPostIndex){
	          this.$store.dispatch('focusOnPost',index);
	        }
	      },
	    },
	}
</script>