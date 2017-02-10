<template>
<div class="row">
    <nav class="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
          <span class="sr-only">more</span>
        </button>
        <router-link to="/home" class="navbar-brand">Duking</router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-01">
        <ul class="nav navbar-nav navbar-left">
          <li><router-link to="/home">首页</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Messages<b class="caret"></b></a>
            <span class="dropdown-arrow"></span>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/login"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
          <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav><!-- /navbar -->
</div> <!-- /row -->
</template>

<style type="text/css">
  .navbar-embossed{
    margin-bottom: 0;
  }
  .navbar-header{
    margin-left: 100px;
    margin-right: 150px;
  }
  .navbar-right{
    padding-right: 200px;
  }
</style>