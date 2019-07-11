<template>
     <div>
       <div class="container-fluid">
            <br />
    <br />  <br />  <br />  <br />  <br />  <br />  
     <div class="row d-flex justify-content-center">
  <div class="col-md-6 content-center card-body">
      <div class="title-box-d">
        <h3 class="title-d">Become A Bakery</h3>
      </div>
          
          <div>
            <form class="form-a" @submit="register">
              <div class="row">
                  <div class="col-md-8 mb-3 block">
                <div class="form-group">
                     <label for="inputName">Username</label>
                      <input  class="form-control form-control-lg form-control-a" id="inputName" type="text" placeholder="Name" v-model="username">
                 </div>
              </div>
                <div class="col-md-8 mb-3 block">
                <div class="form-group">
                     <label for="inputName">Password</label>
                      <input  class="form-control form-control-lg form-control-a" id="inputPassword" placeholder="Password" type="password" v-model="password">
                  </div>
                </div>
    
                <div class="col-md-8 mb-3 block">
                <div class="form-group">
                     <label for="inputName">Confirm Your Password</label>
                      <input  class="form-control form-control-lg form-control-a" id="inputConfirmPassword" placeholder="Confirm password" type="password" v-model="password2">
                  </div>
                </div>
  
                <div class="col-md-8 mb-3 block">
                  <div class="float-left">
                      <ul class="list-unstyled">
                      <li class="item-list-a">
                         <router-link to="/vendorlogin">Already member? <span style="color:blue">Log in</span> here</router-link>
                        </li>
                      </ul>
                  </div>
                    <div class="float-right">
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-a">Register</button>
                        </div>
                    </div>
               
                </div>
              </div>
            </form>
          </div>
  </div>
     </div>
    </div>
    <Footer/>
     </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
     data(){
      return {
        username : "",
        
        password : "",
        password2 : ""
      }
    },
    components:{
      Footer
    },
     methods: {
      signup: function () {
        let info = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('register', info).then(() => this.$router.push('/login'))

      }
    }
}
</script>
 
 <style scoped>
 
 </style>
 