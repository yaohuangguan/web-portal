<template>
<!-- Footer -->
<div>
  <br><br><br><br><br><br>
  <footer class="page-footer font-small orange lighten-2">
  
    <div style="background-color:darkorange">
      <div class="container">
  
        <!-- Grid row-->
        <div class="row py-4 d-flex align-items-center">
  
          <!-- Grid column -->
          <div class="col-md-8 col-lg-5 text-center ">
            
 
           
              <a  v-b-modal.mymodal>
                      <span style="font-size:18px;letter-spacing:1px;cursor:pointer;text-decoration:underline" class="font-weight-bold">Join Our Newsletter</span>
                    </a>
                    
           
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-6 col-lg-7 text-center text-md-right">
  
           <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">
            <i class="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <i class="fab fa-twitter"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <i class="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <i class="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
            <i class="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
  
          </div>
          <!-- Grid column -->
  
        </div>
        <!-- Grid row-->
  
      </div>
    </div>
  
    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">
  
      <!-- Grid row -->
      <div class="row mt-3">
  
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold">CookieGoat</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="dark-grey-text">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.</p>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Products</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p>
            <router-link to="/cookie-menu" class="dark-grey-text">Cookie</router-link>
          </p>
          <p>
            <router-link to="/cake-menu" class="dark-grey-text">
             Cake
            </router-link>
          </p>
          <p>
            <router-link class="dark-grey-text">Nutrition Plan</router-link>
          </p>
          <p>
            <router-link class="dark-grey-text">Other</router-link>
          </p>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Useful links</h6>
          <hr class="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p>
            <router-link to="/login" class="dark-grey-text">Your Account</router-link>
          </p>
          <p>
            <router-link to="/vendorsignup" class="dark-grey-text">Become A Bakery</router-link>
          </p>
          <p>
           <router-link to="/vendorlogin" class="dark-grey-text">Log into my Bakery</router-link>
          </p>
          <p>
            <a  v-b-modal.contact>
                      <span  class="dark-grey-text"   style="font-size:13px;">HELP</span>
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
            <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p class="dark-grey-text">
            <i class="fas fa-envelope mr-3"></i> info@example.com</p>
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
    }
  }
</script>
<style>

</style>
