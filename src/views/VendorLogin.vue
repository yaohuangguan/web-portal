<template>
<div>
    <div class="container-fluid">
           <br />
  <br />  <br />  <br />  <br />  <br />  <br /> 
  <div class="row d-flex justify-content-center">
  <div class="col-md-6 content-center card-body">
    <div class="title-box-d">
        <h3 class="title-d">Welcome Bakery, please log in</h3>
      </div>
   <div >
     
        <form class="form-a"  @submit.prevent="login">
            <div class="row">
              <div class="col-md-8 mb-3 block">
                <div class="form-group">
                  <label for="inputName">Username</label>
                  <input type="text" v-model="input.username" class="form-control form-control-lg form-control-a" id="inputName" placeholder="UserName *"
                    required autofocus>
                </div>
              </div>
              <br />
              <div class="col-md-8 mb-3 block">
                <div class="form-group">
                  <label for="inputEmail1">Password</label>
                  <input type="password" v-model="input.password" class="form-control form-control-lg form-control-a" id="inputPassword"
                    placeholder="Password *" required>
                </div>
              </div>
              <div class="col-md-8 mb-3 block">
              <div class="float-left">
                  <ul class="list-unstyled">
                  <li class="item-list-a">
                     <router-link to="/forget-password">Forgot Your Password?</router-link>
                    </li>
                    <br />
                    <li class="item-list-a">
                <router-link to="/vendorsignup" style="color:blue">Become a Bakery</router-link>
                     </li>
                  </ul>
              </div>
             <div class="float-right">
               
                <div class="col-md-12">
                  <button type="submit" class="btn btn-a">LOGIN</button>
                </div>
             </div>
              </div>
    
             
            </div>
          </form>
     
      
   </div>
  </div>
  </div>
</div>
<br><br>
<Footer/>
</div>
</template>


<script>
import jwt_decode from 'jwt-decode'
import Footer from '@/components/Footer'
export default {
    
    name:'CustomerLogin',
    data(){
        return{
            input:{
                    username:'',
                    password:''
            }
        }
    },
    components:{
          Footer
	
    },
    methods:{
       loginClick(){
            // 实现登录,存储token
            // /users/login为端口后的路径
            this.$axios.post('/api/users/login',this.user).then(res =>{
                // res 结果用会返回token 我们可以用解构模式给他存储
                const { token } = res.data;
                // 存储ls
                localStorage.setItem('wxToken',token);
              const decode = jwt_decode(token)
               
                // 解析后存储至vuex
                this.$store.dispatch('setUser',decode);
                //存储之后页面进行主页跳转
                this.$router.push('/')

            })
        }
    }
    
}
</script>


<style scoped>

</style>
