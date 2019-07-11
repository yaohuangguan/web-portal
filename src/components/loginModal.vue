<template>
 <b-modal id="my-modal">
     <div class="container">
             
      <div class="title-box-d">
          <h3 class="title-d">LOG IN TO YOUR BAKERY ACCOUNT</h3>
        </div>
      <div class="container">
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
                <router-link to="/register" style="color:#eb782e">SIGN UP NOW</router-link>
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
 </b-modal>
</template>
<script>
 
  export default {
    name: 'ModalExamplesPage',
   
    data() {
      return {
       
      }
    }
  }
</script>