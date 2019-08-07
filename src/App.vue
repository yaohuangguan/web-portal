<template>
  <div>
    <Menu>
      <li class="linkNav dropdown">
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
      <li class="dropdown linkNav">
        <div>
          <a class="loginLink droplink">
            <span class="span3">Gift</span>
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
      <li class="dropdown linkNav">
        <div>
          <a class="loginLink droplink">
            <span class="span3">Cookie</span>
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
      <li class="dropdown linkNav">
        <div>
          <a class="loginLink droplink">
            <span class="span3">Cake</span>
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
            <span class="span3" style="font-size:40px;color:#555">
              <i class="fas fa-user-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdown1">
            <router-link to="/dashboard" class="dropdown-item">My Account</router-link>
            <a @click="logout" class="dropdown-item" style="font-size:14px;color:#333">Logout</a>
          </div>
        </div>
        <router-link to="/login" v-if="!isLoggedIn" class="loginLink">
          <span class="span3" style="color:#eb782e">Login</span>
        </router-link>
      </li>

      <div class="buttonBlock">
        <btn class="btn-x" id="cartAnimate" v-b-modal.modal-tall @click="showCart()">
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

      <div class="bar">
        <div class="dropdown">
          <span style="color: rgba(61, 204, 89, 1); font-size:40px;padding:1rem;">
            <i class="fas fa-bars"></i>
          </span>

          <ul class="dropdown-menu" style="right: 0; left: auto;">
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
            <div class="dropdown-divider"></div>
            <li>
              <div v-if="isLoggedIn">
                <router-link to="/dashboard" class="dropdown-item">My Account</router-link>
                <a @click="logout" class="dropdown-item" style="font-size:14px;color:#333">Logout</a>
              </div>
              <div v-else>
                <router-link to="/login" class="dropdown-item">Login</router-link>
              </div>
            </li>
            <div class="dropdown-divider"></div>

            <li>
              <div v-if="!hasProduct()">
                <a class="dropdown-item" v-b-modal.modal-tall @click="showCart()">Cart(0)</a>
              </div>
              <div v-if="hasProduct()">
                <a v-b-modal.modal-tall @click="showCart()" class="dropdown-item">
                  <span>cart({{ getProductsInCart.reduce((acc,currentProduct) => acc + currentProduct.count,0) }})</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <popupcart class="cart" v-if="getPopupCart" />
    </Menu>

    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import popupcart from "@/components/Popupcart";
import btn from "@/components/Btn";
import Menu from "@/components/Menu";
import api from './services/api'
export default {
  name: "app",
  components: {
    Menu,
    btn,
    popupcart
  },
  data(){
    return{
      carts:'',
      loading:false
    }
  },
  mounted(){
     const cartid = this.$store.state.cart;
    console.log('THIS IS THE STATE.CART',cartid);
    api
      .get(`/order/viewcart/${cartid}/`)
      .then(res => {
        this.loading = false;
        this.carts = res.data;
        console.log('response from view cart',res.data);
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
        console.log('error from view cart',err);
      });
  },
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
 
    showCart() {
      console.log('showcart working')
      this.$store.dispatch("showCart");
    },
    hideCart() {
      this.$store.dispatch("hideCart");
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
  color: #333;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.3rem;
}
.orange {
  background-color: #eb782e;
}
</style>