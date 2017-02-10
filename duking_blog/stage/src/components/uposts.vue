<template>
	<div class="posts_list">
		<ul>
			<li v-for="post in this.posts">
				<div class="post_div">
					<h2><router-link :to='post.url'>{{post.title}}</router-link></h2>
					<p class="info">作者：<span class="author">{{post.author}}</span> &brvbar; <time class="time">{{post.time}}</time></p>
					<p class="content"><router-link :to='post.url'><p class="post_content">{{post.content | content_header}}</p>&gt;&gt;</router-link></p>
					<router-link :to='post.url'  class="btn btn-block btn-xs btn-primary ubtn">阅读全文</router-link>
					<hr>
					<a href="#">云标签：</a>
				</div>
			</li>
		</ul>

		<div class="pagination">
			<a v-if="curPage>1" class="btn btn-block btn-xs btn-primary ubtn-pre ubtn" @click='prePage()'>&larr; 上一页</a>
			<a class="btn btn-block btn-xs btn-primary ubtn-info ubtn">第 {{curPage}} 页 &frasl; 共 {{totalPages}} 页</a>
			<a v-if="totalPages>1" class="btn btn-block btn-xs btn-primary ubtn-next ubtn" @click='nextPage()'>下一页 &rarr;</a>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				posts: [],
				curPage : 1,
				limit: 5,
				totalPages: 10,
			}
		},

		beforeCreate(){
	      	let successCallback =(response) => {
	        	this.posts = response.body.Posts;
	        	this.totalPages = response.body.totalPage;    
	      	}
	      	let errorCallback = (json)=> {
	        	alert('网络不好！请刷新网络！')
	      	}
	      	let options = {
	        	params: {
	          	"curPage": this.curPage,
	          	"limit": this.limit,
	        	}
	      	}
	      	this.$http.post('api/getPosts',options).then(successCallback, errorCallback);
	  	},

		methods:{
			prePage(){
				this.curPage--;
				let successCallback =(response) => {
		        	this.posts = response.body.Posts;
		        	this.totalPages = response.body.totalPage;    
		      	}
		      	let errorCallback = (json)=> {
		        	alert('网络不好！请刷新网络！')
		      	}
		      	let options = {
		        	params: {
		          	"curPage": this.curPage,
		          	"limit": this.limit,
		        	}
		      	}
		      	this.$http.post('api/getPosts',options).then(successCallback, errorCallback);
			},
			nextPage(){
				this.curPage++;
				let successCallback =(response) => {
		        	this.posts = response.body.Posts;
		        	this.totalPages = response.body.totalPage;    
		      	}
		      	let errorCallback = (json)=> {
		        	alert('网络不好！请刷新网络！')
		      	}
		      	let options = {
		        	params: {
		          	"curPage": this.curPage,
		          	"limit": this.limit,
		        	}
		      	}
		      	this.$http.post('api/getPosts',options).then(successCallback, errorCallback);
					
				}
			},
	}
</script>




<style type="text/css">
	.post_div{width: 100%;background-color: #FFF;padding: 20px 20px;margin: 40px 0;border: 1px solid #aaaaaa;border-radius:8px;}
	.post_div h2{text-align: center;font-size: 32px; margin: 10px;}
	.post_div .info{text-align: center;font-size: 14px;}
	.post_div .info .author{color: #1976D2;}
	.post_div .info .time{color: red;}
	.post_div .content{margin: 20px 0;}
	.post_div .ubtn{width: 80px; background-color: #F57000;}
	.post_div .post_content{}

	.pagination{margin: 20px 170px;background: #DEE;}
	.pagination .ubtn{ background-color: #F57000;margin: 0 10px;}
	.pagination .ubtn-pre{float: left;width: 80px;}
	.pagination .ubtn-info{float: left;width: 120px;}
	.pagination .ubtn-next{float: left;width: 80px;}
</style>