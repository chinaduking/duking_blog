<template>
	<div class="pagination">
		<a v-if="curPage>1" class="btn btn-block btn-xs btn-primary ubtn-pre ubtn" @click='prePage()'>&larr; 上一页</a>
		<a class="btn btn-block btn-xs btn-primary ubtn-info ubtn">第 {{curPage}} 页 &frasl; 共 {{totalPages}} 页</a>
		<a v-if="totalPages>1" class="btn btn-block btn-xs btn-primary ubtn-next ubtn" @click='nextPage()'>下一页 &rarr;</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				curPage : 1,
				limit: 5,
			}
		},

		props:['totalPages'],

		created(){
			
		},

		methods:{
			prePage(){
				this.curPage--;

			},
			nextPage(){
				this.curPage++;
			}
		}
	}
</script>

<style type="text/css">
.pagination{margin: 20px 170px;background: #DEE;}
.pagination .ubtn{ background-color: #F57000;margin: 0 10px;}
.pagination .ubtn-pre{float: left;width: 80px;}
.pagination .ubtn-info{float: left;width: 120px;}
.pagination .ubtn-next{float: left;width: 80px;}
</style>