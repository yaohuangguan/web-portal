import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";
import router from "./router";

Vue.use(Vuex);

let cartProducts = localStorage.getItem("cartProducts");
let cartCount = localStorage.getItem("cartCount");
let currentProduct = localStorage.getItem("currentProduct");
let Cart = localStorage.getItem("Cart");
function saveCart(cartProducts, cartCount) {
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  localStorage.setItem("cartCount", cartCount);
}
function saveCurrent(currentProduct) {
  localStorage.setItem("currentProduct", JSON.stringify(currentProduct));
}

console.log("Cart Products", cartProducts);
console.log("Cart Count", cartCount);
const store = new Vuex.Store({
  state: {
    cartProducts: cartProducts ? JSON.parse(cartProducts) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    status: "",
    access_token: localStorage.getItem("access_token") || "",
    refresh_token: localStorage.getItem("refresh_token") || "",
    user: {},
    cart: localStorage.getItem("cart") || "",
    Carts: localStorage.getItem("Carts") || [],
    currentProduct: currentProduct ? JSON.parse(currentProduct) : {},
    showPopupCart: false
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, access_token, refresh_token, user) {
      state.status = "success";
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.access_token = "";
      state.refresh_token = "";
      state.cart = "";
    },

    ADD_PRODUCT: (state, product) => {
      let found = state.cartProducts.find(item => {
        return item.id === product.id && item.message === product.message;
      });

      if (found) {
        found.count++;
        found.totalPrice = found.count * found.price;
      } else {
        state.cartProducts.push(product);

        Vue.set(product, "count", 1);
        Vue.set(product, "totalPrice", product.price);
      }

      const bounce = document.getElementById("cartAnimate");

      bounce.classList.add("animated", "bounce");
      bounce.addEventListener("animationend", function() {
        bounce.classList.remove("animated", "bounce");
      });

      state.cartCount++;
      saveCart(state.cartProducts, state.cartCount);
    },

    removeAll: state => {
      state.cartProducts = "";
      state.cartCount = 0;

      saveCart(state.cartProducts, state.cartCount);
    },

    removeFromCart: (state, product) => {
      let index = state.cartProducts.indexOf(product);
      let found = state.cartProducts.find(item => item.id == product.id);
      if (found.count > 1) {
        found.count--;
        found.totalPrice = found.count * found.price;
      } else {
        state.cartProducts.splice(index, 1);
      }

      state.cartCount--;

      saveCart(state.cartProducts, state.cartCount);
    },
    clearProduct(state) {
      state.cartProducts = [];
      state.cartCount = 0;
      state.currentProduct = {};
    },

    updateMessage(state, message) {
      state.currentProduct.message = message;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateMsgcolor(state, message_color) {
      state.currentProduct.message_color = message_color;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateSize(state, size) {
      state.currentProduct.size = size;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateShape(state, shape) {
      state.currentProduct.shape = shape;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateColor(state, base_color) {
      state.currentProduct.base_color = base_color;
      saveCart(state.cartProducts, state.cartCount);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
      saveCurrent(state.currentProduct);
    },
    cartID(state, cart, id) {
      state.cart = cart;
      state.id = id;
    },

    SHOW(state) {
      state.showPopupCart = true;
    },
    HIDE(state) {
      state.showPopupCart = false;
    }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit("ADD_PRODUCT", product);
    },

    currentProduct: (context, product) => {
      context.commit("CURRENT_PRODUCT", product);
    },
    //show popup cart
    showCart: context => {
      context.commit("SHOW");
    },
    hideCart: context => {
      context.commit("HIDE");
    },

    //send cart to checkout
    sendCart({ commit }, { cart, request }) {
      return new Promise((resolve, reject) => {
        api
          .post(`/order/checkout/${id}/`, { cart, request })
          .then(res => {
            console.log("response from sendCart", res);
            resolve(res);
          })
          .catch(err => {
            console.log("error from sendCart", err);
            reject(err);
          });
      });
    },
    //add product to the cart
    addCart({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .post(`/order/item/create/`, data)
          .then(res => {
            console.log("response from add cart", res.data);
            const cart = res.data.cart;
            const id = res.data.id;
            console.log("cart id", res.data);
            localStorage.setItem("id", id);
            localStorage.setItem("cart", cart);
            commit("cartID", cart, id);
            resolve(res.data);
          })
          .catch(err => {
            console.log("error from add cart", err);
            reject(err);
          });
      });
    },

    updateCart({ commit }, data) {
      return new Promise((resolve, reject) => {
        const id = this.$store.state.currentProduct.id;
        api
          .put(`/order/item/update/${id}`, data)
          .then(res => {
            console.log("response from add cart", res.data);
            const cart = res.data.cart;
            const id = res.data.id;
            console.log("cart id", res.data);
            localStorage.setItem("id", id);
            localStorage.setItem("cart", cart);
            commit("cartID", cart, id);
            resolve(res.data);
          })
          .catch(err => {
            console.log("error from add cart", err);
            reject(err);
          });
      });
    },

    //user login
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api({ url: "/api/token/", data: user, method: "POST" })
          .then(res => {
            const access_token = res.data.access;
            const refresh_token = res.data.refresh;
            console.log("access token", res.data.access);
            console.log("refresh token: ", res.data.refresh);
            console.log(res);
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            api.defaults.headers.common["Authorization"] = access_token;
            commit("auth_success", access_token, user);
            resolve(res);
          })
          .catch(err => {
            commit("auth_error", err);

            localStorage.removeItem("access_token");
            reject(err);
          });
      });
    },

    //user sign up
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api({ url: "/users/signup/", data: user, method: "POST" })
          .then(res => {
            console.log("response from sign up", res);
            resolve(res);
          })
          .catch(err => {
            commit("auth_error", err);
            reject(err);
          });
      });
    },

    //vendor inquiry
    inquire({ commit }, info) {
      console.log(info);
      return new Promise((resolve, reject) => {
        api
          .post("/users/vendor/application/", info)
          .then(res => {
            console.log("resposne from inqurey", res);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },

    //password reset
    pswReset({ commit }, username) {
      return new Promise((resolve, reject) => {
        api
          .post("/users/api/password_reset/", username)
          .then(res => {
            console.log("response from psw reset", res);
            resolve(res);
          })
          .catch(err => {
            console.log("error from psw reset", err);
            reject(err);
          });
      });
    },
    //request refresh token
    requestRefresh({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .post("/api/token/refresh/", data)
          .then(res => {
            this.isRefreshing = false;
            const refresh_token = res.data.refresh;
            const access_token = res.data.access;
            localStorage.setItem("refresh_token", refresh_token);
            localStorage.setItem("access_token", access_token);
            commit("auth_success", access_token, refresh_token);
            console.log("new token", access_token, refresh_token);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },

    //logout
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("cart");
        delete api.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },

  getters: {
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getPopupCart: state => state.showPopupCart,
    getMessage: state => state.cartProducts.message,
    isLoggedIn: state => state.access_token,
    authStatus: state => state.status
  }
});

export default store;
