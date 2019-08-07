<template>
<!-- Footer -->
<div>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>

  <footer class="page-footer font-small orange lighten-2">
  
    
  <br>
    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">
  
      <!-- Grid row -->
      <div class="row mt-3">
  
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold">CookieCannon</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="dark-grey-text">This is CookieCannon</p>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Products</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <!-- <p>
            <router-link to="/cookie-menu" class="dark-grey-text">Cookie</router-link>
          </p>
          <p>
            <router-link to="/cake-menu" class="dark-grey-text">
             Cake
            </router-link>
          </p> -->
          <p>
            <router-link class="dark-grey-text" to="/nutrition">Nutrition Plan</router-link>
          </p>
          <p>
            <router-link class="dark-grey-text" to="/other">Other</router-link>
          </p>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Useful links</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p>
            <router-link to="/dashboard" v-if="user" class="dark-grey-text">Your Dashboard</router-link>
            <router-link to="/login" v-else class="dark-grey-text">Your Account</router-link>
          </p>
          <p>
            <router-link to="/vendorsignup" class="dark-grey-text">Become A Bakery</router-link>
          </p>
         
          <p>
            <a  v-b-modal.contact>
                      <span  class="dark-grey-text"   style="font-size:13px;">HELP</span>
                    </a>
          </p>
          <p>
            <a href="#backtotop">
                      <span  class="dark-grey-text"   style="font-size:13px;">BACK TO TOP</span>
                    </a>
          </p>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="dark-grey-text">
            <i class="fas fa-home mr-3"></i> 1130 Gahanna Parkway, Ohio, USA</p>
          <p class="dark-grey-text">
            <i class="fas fa-envelope mr-3"></i> info@beehex.com</p>
          <p class="dark-grey-text">
            <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p class="dark-grey-text">
            <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
  
        </div>
        <!-- Grid column -->
  
      </div>
      <!-- Grid row -->
  
    </div>
    <!-- Footer Links -->
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2019 
      <a href="https://beehex.com" class="dark-grey-text" target="blank"> Beehex.com</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <contact/>
  <Subscribe/>
</div>
<!-- Footer -->
  <!-- Footer -->
 
</template>


<script>

  import Subscribe from '@/components/subscribe';
  import contact from '@/components/contact'
  export default {
    name: 'FooterPage',
    components: {
     
      
      Subscribe,
      contact
    },
    computed:{
     user: function() {
      return this.$store.getters.isLoggedIn;
    }}
  }
</script>
<style>
footer{
 bottom:0;width:100%;vertical-align: bottom
 
}
</style>
