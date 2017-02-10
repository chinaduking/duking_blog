<template>
	<div class="sign_div">
		<ul class="nav nav-tabs">
         	<li class="active"><a data-toggle="tab" href="#signin">登录</a></li>
         	<li><a data-toggle="tab" href="#signup">注册</a></li>
      	</ul>

      	<div class="tab-content">
      		<div id="signin" class="tab-pane fade in active">
      			<form class="from_content" style="font-family:Microsoft Yahei" action="/login" method="post">
	            	<div class="div_row">
	                	<label>登录账号:</label>
	                	<div class="input_div">
	                  		<input id="username" name="username" type="text" placeholder="用户名或者邮箱" maxlength="24">
	                	</div>
	              	</div>

	              	<div class="div_row">
	                	<label>密码:</label>
	                	<div class="input_div">
	                  		<input id="password" name="userpass" type="password" placeholder="密码" maxlength="24">
	                	</div>
	              	</div>

	            	<div class="div_row sign_btn">
	                	<input class="btn btn-block btn-primary" type="submit" value="登录">
	            	</div>

	            </form>
      		</div>

      		<div id="signup" class="tab-pane fade">
      			
      		</div>
      	</div>

	</div>
</template>

<style type="text/css">
	.sign_div{width: 450px;min-height: 250px; margin: 10px auto;border: 1px solid #AAA;border-radius: 8px;background-color: #FFF;padding: 20px 20px;}
	.sign_div .from_content{margin: 20px 0;display:inline-block;}
	.sign_div .from_content .div_row{float: left;width: 100%;margin: 10px 0;}
	.sign_div .from_content .div_row label{float: left;width: 100px;text-align: right;padding: 0 10px;font-size: 14px;}
	.sign_div .from_content .div_row .input_div{float: left;width: 280px;}
	.sign_div .from_content .div_row .input_div input{border:1px solid #aeaeae; border-radius:4px; color:#666;width: 100%;font-size: 14px;}
	.sign_div .from_content .sign_btn{margin-bottom: 0;margin-top: 40px;}
</style>