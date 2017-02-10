import * as types from './mutation-types'
import api from '../../services/api.js'

export default {
  getAllPost({ commit }, that) {
    console.log('action');
	api.getDraftList(that).then(res=>{
		console.log(res);
		if(res.ok === true){
			console.log('get api success');
			commit(types.RECEIVE_ALL_POSTS,res.body.Posts);
		}else
		{
			console.log('get api err');
		}
	});

  },

	focusOnPost({ commit }, index){
		commit(types.POST_FOCUS, index);
	},

};