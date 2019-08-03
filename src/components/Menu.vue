<template>
  <div>
    <subheader />
    <div @scroll="handlescroll">
      <!-- <subnav></subnav> -->

      <!-- <img :src="img" style="width:40px;height:40px" /> -->
      <header class="header" id="backtotop">
        <nav class="nav">
          <ul class="nav-links">
            <li class="linklogo">
              <router-link to="/">
                <span class="span2" id="change">Cookie</span>
                <span class="span2" style="color:#555">Cannon</span>
              </router-link>
            </li>

            <!-- <li class="linklogo dropdown">
              <a>
                <span class="span2" style="padding:3rem">cookie</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/happybirthday">Happy Birthday</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/Lover">Lover's Day</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/kid">For Kids</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/corporate">Business</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/christmas">Merry Christmas</router-link>
                </li>
              </ul>
            </li>
            <li class="linklogo dropdown">
              <a>
                <span class="span2">cake</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/happybirthday">Happy Birthday</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/Lover">Lover's Day</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/kid">For Kids</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/corporate">Business</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/christmas">Merry Christmas</router-link>
                </li>
              </ul>
            </li> -->
          </ul>
        </nav>
        <slot></slot>
      </header>
    </div>
  </div>
</template>

<script>
import subheader from "./homepage/subheader";
import subnav from "./homepage/subnav";
export default {
  data() {
    return {
      img: require("@/assets/img/cannon.png")
    };
  },
  components: {
    subheader,
    subnav
  },

  methods: {
    handlescroll() {
      let header = document.querySelector(".header");

      if (window.scrollY > 100 && !header.className.includes("soild")) {
        header.classList.add("soild");
      } else if (window.scrollY < 100) {
        header.classList.remove("soild");
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
.header {
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0);
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  position: fixed;
  z-index: 1000;
}

.soild {
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 2px 15px rgba(100, 100, 100, 0.3);
}

.nav {
  width: 100%;
}

.nav-links {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.linklogo {
  list-style: none;
  margin-top: 20px;
}

.span2 {
  color: #eb783e;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}
.white {
}
</style>
