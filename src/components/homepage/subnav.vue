<template>
  <nav class="navbar-expand secondary-color lighten-1" style="margin-bottom:0px" align="center">
    <div @scroll="disappear" id="appear">
      <ul class="font-weight-bold navbar-nav" style="margin-bottom:0px;padding:.5rem">
        <li class="nav-item">
            <router-link to="/">link</router-link>
        </li>
         <li class="nav-item">
            <router-link to="/">ink</router-link>
        </li>
         <li class="nav-item">
            <router-link to="/">link</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    disappear() {
      let get = document.getElementById("appear");
      if (window.scrollY > 5 && !get.className.includes("soildOrange")) {
        get.classList.add("soildOrange");
      } else if (window.scrollY < 5) {
        get.classList.remove("soildOrange");
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.disappear);
  },

  destroyed() {
    window.removeEventListener("scroll", this.disappear);
  }
};
</script>

<style scoped>
.soildOrange {
  box-shadow: 1px 2px 15px rgba(100, 100, 100, 0.3);
  transition: all 0.5s ease-in-out;

  position: absolute
}
.nav-item{
    padding-right:1rem
}
</style>

