<template>
  <div class="text-center" style="background-color:rgba(61, 204, 89, 1);; margin-bottom:0px;width:100%">
    <div @scroll="handlescroll" id="disappear" >
      <p class="font-weight-bold" style="margin-bottom:0px;padding:.5rem">
        <router-link to="/" style="text-decoration:underline;color:#fff">Get Some Tasty Cookies Today! Free Shipping Over 65$ Sitewise!</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handlescroll() {
      let span = document.getElementById("disappear");
      if (window.scrollY > 5 && !span.className.includes("soildOrange")) {
        span.classList.add("soildOrange");
      } else if (window.scrollY < 5) {
        span.classList.remove("soildOrange");
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.handlescroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handlescroll);
  }
};
</script>

<style>
.soildOrange {
  box-shadow: 1px 2px 15px rgba(100, 100, 100, 0.3);
  transition: all 0.5s ease-in-out;

  display: none;
}
</style>


