<template>
	<div class="row">
		<nav class="navbar navbar-inverse navbar-embossed unav" role="navigation">
			<div class="container">
		      <div class="navbar-header">
		        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
		          <span class="sr-only">more</span>
		        </button>
		      </div>

		      <div class="collapse navbar-collapse" id="navbar-collapse-01">
		        <ul class="nav navbar-nav navbar-left">
		          <li><router-link to="/home">首页</router-link></li>
		          <li><router-link to="/about">About Us</router-link></li>
		        </ul>

		        <ul class="nav navbar-nav navbar-right">
		          <li><router-link to="/login"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
		          <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
		        </ul>
		      </div><!-- /.navbar-collapse -->
	      	</div>
	    </nav><!-- /navbar -->
	</div>
</template>

<style type="text/css">
	.unav{background: #4DD0E1;border-bottom: 1px solid #aaaaaa;border-radius:8px;}
</style>