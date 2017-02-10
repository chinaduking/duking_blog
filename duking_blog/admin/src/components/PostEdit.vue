<template>
	<div class="post-edit-div">
		<section class="container">
			<h2 class="edit-title">后台文章管理页面</h2>
			<div class="post-edit-title">
				<p>文章标题：</p>
				<input type="text" class="form-control" :value="postTitle"></input>
			</div>
			<div class="clearfix">
				<div class="post-tag">
					<i class="fui-tag iconfont"></i>
					<span class="post-tag-title">云标签：</span>
					<div class="tagsinput-primary post-tag-content">
            			<input name="tagsinput" class="tagsinput" data-role="tagsinput" :value="tags" />
			        </div>
				</div>

				<div class="post-btn">
					<button type="button" class="btn  btn-success" >发布文章</button>
					<button type="button" class="btn  btn-Warning" >保存草稿</button>
        			<button type="button" class="btn  btn-danger" >删除文章</button>
				</div>
			</div>

			<Edit></Edit>

		</section>
	</div>
</template>

<style type="text/css">
	.post-edit-div{margin-left: 370px;position: fixed;height: 100%;width: 79%;}
	.edit-title{text-align: center;margin: 20px auto;}
	.post-edit-title{margin: 20px 0px;width: 100%; height: 40px;}
	.post-edit-title p{float: left;width: 10%;text-align: right;line-height: 40px;}
	.post-edit-title input{float: left;width: 80%;}
	.clearfix{margin: 20px 0px;width: 100%; height: 80px; border-top: 1px solid #E0E0E0; border-radius: 8px;border-bottom: 1px solid #E0E0E0; border-radius: 8px;}
	.clearfix .iconfont{line-height: 60px;margin-left: 20px; float: left;}
	.clearfix .post-tag-title{float: left;line-height: 80px;margin-left: 20px;font-size: 18px;color: #F4511E;}
	.clearfix .post-tag-content{float: left; padding-top: 20px;padding-left: 2px;width: 40%;}
	.clearfix .post-btn{line-height: 30px;float: left;margin-top: 20px;padding-left: 100px;}
	.clearfix .post-btn .btn{margin: 0 10px;}
</style>

<script type="text/javascript">
import Edit from './Edit.vue'
	export default{
		data(){
			return{
				postTitle:'在此处输入文章标题',
				tags:[
					{tag: 'duking'},
					{tag: 'css'},
				]
			}
		},

		components:{
	      Edit,
	    },
	}
</script>