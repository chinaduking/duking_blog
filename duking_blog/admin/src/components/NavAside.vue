<template>
  <aside class="sidebar">
    <a href="#"><img class="sidebar-logo" src="../assets/logo.png" alt="logo"></a>
    <nav class="aside-nav">
      <ul class="aside-nav-list">
        <li class="aside-nav-item"><router-link to="/home" class="aside-nav-button" title="Home"><i class="fui-home iconfont"></i></router-link></li>
        <li class="aside-nav-item"><router-link to="/posts" class="aside-nav-button"  title="文章管理"><i class="fui-list-columned iconfont"></i></router-link></li>
        <li class="aside-nav-item"><a class="aside-nav-button" title="标签管理"><i class="fui-tag iconfont"></i></a> </li>
        <li class="aside-nav-item"><a class="aside-nav-button" title="用户"><i class="fui-user iconfont"></i></a> </li>
      </ul>
    </nav>
    <nav class="aside-menu">
      <ul class="aside-nav-list">
        <!--<li class="aside-nav-item"><a class="aside-nav-button"><i class="icon-ordinaryset iconfont"></i></a></li>-->
        <li class="aside-nav-item"><a class="aside-nav-button"  title="登出"><i class="fui-exit iconfont"></i> </a></li>
      </ul>
    </nav>
  </aside>
</template>

<style>
.sidebar{box-sizing: border-box;border-right: 1px solid $border;background-color: #84ffff;text-align: center;position: fixed;height: 100%;width: 70px;padding: 12px 12px 24px 12px;left: 0;top: 0;}
.sidebar-logo{width: 36px;margin-top: 5px;}
.aside-nav{margin-top: 30px;border-top: 1px solid #ff8a65;}
.aside-nav-list{list-style: none; padding: 0;}
.aside-nav-item{padding: 20px 0;}
.aside-nav-button{cursor: pointer;display: inline-block;box-sizing: border-box;width: 45px;height: 45px;background: #fff;border: 1px solid #aaaaaa;border-radius:8px;}
.iconfont{font-size: 32px;display: inline-block;margin-top: 13px;}
.aside-menu{position: absolute; bottom: 0;}
</style>

<script>

</script>
