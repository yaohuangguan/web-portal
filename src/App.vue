<template>
  <div>
    <Menu>
      <li class="dropdown linkNav">
        <div>
          <a class="loginLink droplink">
            <span class="span3">Ocassion</span>
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
        </div>
      </li>
      <li class="linkNav">
        <div v-if="isLoggedIn">
          <a
            class="loginLink"
            id="dropdown1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="span3" style="font-size:40px">
              <i class="fas fa-user-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdown1">
            <router-link to="/dashboard" class="dropdown-item">My Account</router-link>
            <a @click="logout" class="dropdown-item" style="font-size:14px;color:#333">Logout</a>
          </div>
        </div>
        <router-link to="/login" v-if="!isLoggedIn" class="loginLink">
          <span class="span3">Login</span>
        </router-link>
      </li>

      <div class="buttonBlock">
        <btn class="btn-x" id="cartAnimate" v-b-modal.modal-tall @click.native="showPopupCart()">
          <span>
            <i v-if="!hasProduct()" class="fas fa-shopping-bag fa-lg"></i>

            <span v-if="hasProduct()" class="fas fa-shopping-bag fa-lg" style="color:#333">
              <i
                style="color:#fff"
              >{{ getProductsInCart.reduce((acc,currentProduct) => acc + currentProduct.count,0) }}</i>
            </span>
          </span>
        </btn>
      </div>

      <popupcart class="cart" v-if="getPopupCart" />
    </Menu>

    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import jwt_decode from "jwt-decode";
import popupcart from "@/components/Popupcart";
import btn from "@/components/Btn";
import Menu from "@/components/Menu";

export default {
  name: "app",
  components: {
    Menu,
    btn,
    popupcart
  },
  methods: {
    ...mapActions(["showOrHiddenPopupCart"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },

    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getPopupCart"]),
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },

  created() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>

<style lang="scss">
@import "assets/custom.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

body {
  margin: 0;
}

.cart {
  position: absolute;
  top: 75px;
  right: 355px;
}

.linkNav {
  list-style: none;
  padding: 1.5em;
  margin-top: 1px;
}

.linkNavIN {
  list-style: none;
  padding: 1.5em;
  margin-top: 1px;
  display: none;
}

.span3 {
  color: #eb782e;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size:1.3rem
  
}
.orange {
  background-color: #eb782e;
}
</style>