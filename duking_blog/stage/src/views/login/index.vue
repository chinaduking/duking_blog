<template>
	<div class="dk_login img-responsive">

		<div class="login_from">

      <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#login">登录</a></li>
          <li><a data-toggle="tab" href="#register">注册</a></li>
      </ul>

      <div class="tab-content ">
          <div id="login" class="tab-pane fade in active">
            <form class="from_content" style="font-family:Microsoft Yahei">
              <div class="div_form clear">
                <label>账号:</label>
                <div class="input_div">
                  <input id="username" name="username" type="text" placeholder="用户名或者邮箱" v-model="login_info.username" maxlength="24">
                </div>
              </div>

              <div class="div_form clear">
                <label>密码:</label>
                <div class="input_div">
                  <input id="password1" name="userpass" type="password" placeholder="密码" v-model="login_info.password"  maxlength="24">
                </div>
              </div>

              <div class="div_btn">
                <input class="btn btn-block btn-primary" type="button" value="登录" @click="Login_post">
              </div>
            </form>
          </div>

          <div id="register" class="tab-pane fade">
            <form class="from_content" style="font-family:Microsoft Yahei">
              <div class="div_form clear">
                <label>账户名称:</label>
                <div class="input_div">
                  <input id="username" name="username" type="text" placeholder="格式6-24位数字字母组合"  @blur="isRegisterUserName(register_info.username)" v-model="register_info.username" maxlength="24"> 
                </div>
                <div v-show="show_flag.username_show_flag" class="check_input" id = "check_username"> 
                </div>
                <span v-text="check_content.username_content" id = "username_content" ></span>
              </div>

              <div class="div_form clear">
                <label>常用邮箱:</label>
                <div class="input_div">
                  <input id="mail" name="useremail"  type="text" placeholder="请填写正确的邮箱，以便接收账号激活邮件" @blur="isEmail(register_info.mail)" v-model="register_info.mail" maxlength="32">
                </div>
                <div v-show="show_flag.email_show_flag" class="check_input" id = "check_email"> 
                </div>
                <span v-text="check_content.email_content" id = "email_content" ></span>
              </div>

              <div class="div_form clear">
                <label>登录密码:</label>
                <div class="input_div">
                  <input id="password1" name="userpass" type="password" placeholder="最少8个字符，区分大小写" @blur="checkPassword1(register_info.password1)" v-model="register_info.password1" maxlength="24">
                </div>
                <div v-show="show_flag.password1_show_flag" class="check_input" id = "check_password1"> 
                </div>
                <span v-text="check_content.password1_content" id = "password1_content" ></span>
              </div>

              <div class="div_form clear">
                <label>重复登录密码:</label>
                <div class="input_div">
                  <input id="password2" name="userpass2" type="password" placeholder="再次输入密码"  @blur="checkPassword2()" v-model="register_info.password2" maxlength="24">
                </div>
                <div v-show="show_flag.password2_show_flag" class="check_input" id = "check_password2"> 
                </div>
                <span v-text="check_content.password2_content" id = "password2_content" ></span>
              </div>
              
              <div class="div_checkbox ">
                <label class="checkbox">
                  <input type="checkbox" id="checkbox2" data-toggle="checkbox" v-model="register_info.checkbox_flag">
                  我已阅读并接受<a href="#">《XX网用户服务协议》</a>
                </label>
                <span v-show="!register_info.checkbox_flag">请阅读并接受用户协议</span>
              </div>

              <div class="div_btn">
                <input class="btn btn-block btn-primary" type="button" value="注册" @click="Register_post">
              </div>
            </form>
          </div>
      </div>

		</div>
	</div>
</template>

<style type="text/css">

</style>

<script type="text/javascript">
	export default{
    data(){
      return{
        login_info:{
          username:'',
          password:'',
        },
        register_info:{
          username:'',
          mail:'',
          password1:'',
          password2:'',
          checkbox_flag:true,
        },
        show_flag:{
          username_show_flag: false,
          email_show_flag: false,
          password1_show_flag: false,
          password2_show_flag: false,
        },
        check_content:{
          username_content:"",
          email_content: "",
          password1_content: "",
          password2_content: "",
        },
        status_flag:{
          username_err: true,
          email_err: true,
          password1_err: true,
          password2_err: true,
          checkbox_err: true,
        },
      }
    },

		methods: {

        Login_post:function(){
          const router = this.$router;

          if(this.login_info.username.length < 6){
            alert("账号或密码错误!");
          }else if(this.login_info.password.length < 8){
            alert("账号或密码错误!");
          }else{
            let successCallback =(response) => {
              var data = response.body;
              if(data.Result == 1){
                alert('登录成功');
                router.push({path:'/home'});
              }else{
                alert('账号或密码错误');
              } 
            }
            let errorCallback = (json)=> {
              alert('请求超时')
            }
            let options = {
              params: {
                "type":"login",
                "param":this.login_info,
              }
            }
            this.$http.post('api/login',options).then(successCallback, errorCallback);
          }
        },

        Register_post:function(){
          const router = this.$router;

          if(this.status_flag.username_err|this.status_flag.email_err|this.status_flag.password1_err|this.status_flag.password2_err|(!this.register_info.checkbox_flag)){
            alert("请输入正确的注册信息");
          }else{
            let successCallback =(response) => {
              var rec_data = response.body;
              console.log(rec_data);
              if(rec_data.error == null){
                alert('注册成功');
                router.push({path:'/home'});
              }else{
                alert('注册失败');
                router.push({path:'/home'});
              }
            }
            let errorCallback = (json)=> {
              alert('注册失败')
            }
            let options = {
              params: {
                "type":"register",
                "param":this.register_info,
              }
            }
            this.$http.post('api/register',options).then(successCallback, errorCallback); 
          }
        },

        //util.....................
        isRegisterUserName:function(s){  
          var patrn=/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/; 
          this.show_flag.username_show_flag = true; 
          if (!patrn.exec(s)){
            document.getElementById('check_username').style.backgroundPosition  ='-63px 0';
            document.getElementById('username_content').style.fontSize  = '8px';
            document.getElementById('username_content').style.color  = 'red';
            this.check_content.username_content = '用户名格式错误';
            this.status_flag.username_err = true;
          }else{

            let successCallback =(response) => {
              var data = response.body;
              if(data.Result != null){
                document.getElementById('check_username').style.backgroundPosition  ='-63px 0';
                document.getElementById('username_content').style.fontSize  = '8px';
                document.getElementById('username_content').style.color  = 'red';
                this.check_content.username_content = '用户名以存在';
                this.status_flag.username_err = true;
              }else{
                document.getElementById('check_username').style.backgroundPosition  ='0 0';
                this.check_content.username_content = '';
                this.status_flag.username_err = false;
              } 
            }
            let errorCallback = (json)=> {
              alert("服务器超时！");
            }
            let options = {
              params: {
                "type": "check_username",
                "param":this.register_info.username,
              }
            }
            this.$http.post('api/register',options).then(successCallback, errorCallback); 
          } 
          
        },

        isEmail:function(email){
             var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
             this.show_flag.email_show_flag = true; 
             if(!myreg.test(email)){
                document.getElementById('check_email').style.backgroundPosition  ='-63px 0';
                document.getElementById('email_content').style.fontSize  = '8px';
                document.getElementById('email_content').style.color  = 'red';
                this.check_content.email_content = '邮箱格式错误'; 
                this.status_flag.email_err = true;
              }else{
                let successCallback =(response) => {
                  var data = response.body;
                  console.log(data);
                  if(data.Result != null){
                    document.getElementById('check_email').style.backgroundPosition  ='-63px 0';
                    document.getElementById('email_content').style.fontSize  = '8px';
                    document.getElementById('email_content').style.color  = 'red';
                    this.check_content.email_content = '邮箱已存在'; 
                    this.status_flag.email_err = true;
                  }else{
                    document.getElementById('check_email').style.backgroundPosition  ='0 0';
                    this.check_content.email_content = '';
                    this.status_flag.email_err = false;
                  } 
                }
                let errorCallback = (json)=> {
                  alert("服务器超时！");
                }
                let options = {
                  params: {
                    "type": "check_email",
                    "param":this.register_info.mail,
                  }
                }
                this.$http.post('api/register',options).then(successCallback, errorCallback);
              }
         },

         checkPassword1:function(str){
            this.show_flag.password1_show_flag = true; 
            var rC = {
                lW:'[a-z]',
                uW:'[A-Z]',
                nW:'[0-9]',
                sW:'[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]'
            };
            function Reg(str, rStr){
                var reg = new RegExp(rStr);
                if(reg.test(str)) return true;
                else return false;
            };
            if(str.length < 8){
                document.getElementById('check_password1').style.backgroundPosition  ='-63px 0';
                document.getElementById('password1_content').style.fontSize  = '8px';
                document.getElementById('password1_content').style.color  = 'red';
                this.check_content.password1_content = '密码长度太短';
                this.status_flag.password1_err = true;
                return false;
            }else{
                var tR = {
                    l:Reg(str, rC.lW),
                    u:Reg(str, rC.uW),
                    n:Reg(str, rC.nW),
                    s:Reg(str, rC.sW)
                };
                if((tR.l && tR.u && tR.n) || (tR.l && tR.u && tR.s) || (tR.s && tR.u && tR.n) || (tR.s && tR.l && tR.n)){
                    document.getElementById('check_password1').style.backgroundPosition  ='0 0';
                    this.check_content.password1_content = '';
                    this.status_flag.password1_err = false;
                    return true;
                }else{
                    document.getElementById('check_password1').style.backgroundPosition  ='-63px 0';
                    document.getElementById('password1_content').style.fontSize  = '8px';
                    document.getElementById('password1_content').style.color  = 'red';
                    this.check_content.password1_content = '密码格式错误';
                    this.status_flag.password1_err = true;
                    return false;
                }
            }
          },

          checkPassword2:function(){
            this.show_flag.password2_show_flag = true;
            if(this.register_info.password1 != this.register_info.password2){
              document.getElementById('check_password2').style.backgroundPosition  ='-63px 0';
              document.getElementById('password2_content').style.fontSize  = '8px';
              document.getElementById('password2_content').style.color  = 'red';
              this.check_content.password2_content = '两次密码不一致';
              this.status_flag.password2_err = true;
            }else{
              document.getElementById('check_password2').style.backgroundPosition  ='0 0';
              this.check_content.password2_content = '';
              this.status_flag.password2_err = false;
            }
          },

		  },
	}
</script>