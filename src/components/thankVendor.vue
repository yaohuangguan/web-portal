<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Thank you for your interest!</h2>
      <h3>We will contact you shortly!</h3>
      <br />
      <h6>
        We will redirect you back to home page in
        <span id="demo"></span> or you can click
        <router-link to="/">
          <span class="text-primary">here</span>
        </router-link>
      </h6>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from "./Footer";
import { setTimeout } from "timers";
export default {
  name:'thankVendor',
  components: {
    Footer
  },
  methods: {
    redirect: function() {
      setTimeout(() => {
        this.$router.push("/");
      }, 6000);
    }
  },
  created() {
    this.redirect();
  
    var timeleft = 5;
    var downloadTimer = setInterval(function() {
      document.getElementById("demo").innerHTML =
        timeleft + 's';
      timeleft -= 1;
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("demo").innerHTML = "1s";
      }
    }, 1000);
  }
};
</script>

<style>
</style>




