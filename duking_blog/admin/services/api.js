
module.exports = {
	getDraftList:function(that){
		console.log('run api');

		let successCallback =(response) => {
		    return response;
		}
		let errorCallback = (json)=> {
		    return json;
		}

		let options = {
		    params: {
		        	
		    }
		}
		return that.$http.get('api/getPosts',options).then(successCallback, errorCallback);
	},
}
