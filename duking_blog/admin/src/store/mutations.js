import * as types from './mutation-types'

export default {
	[types.RECEIVE_ALL_POSTS](state,postList){
	    if(true){
	    	console.log('store更新完成！');
	      	state.PostList = postList;
	    }
  	},

	[types.POST_FOCUS](state,index){
	    console.log('index更新完成！');
	    state.currentPostIndex = index;
  	},  	
}