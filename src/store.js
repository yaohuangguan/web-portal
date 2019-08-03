import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";
import router from "./router";

Vue.use(Vuex);

let cartProducts = window.localStorage.getItem("cartProducts");
let cartCount = window.localStorage.getItem("cartCount");
let currentProduct = window.localStorage.getItem("currentProduct");

function saveCart(cartProducts, cartCount) {
  window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  window.localStorage.setItem("cartCount", cartCount);
}
function saveCurrent(currentProduct) {
  window.localStorage.setItem("currentProduct", JSON.stringify(currentProduct));
}

console.log(cartProducts);
console.log(cartCount);
const store = new Vuex.Store({
  state: {
    cartProducts: cartProducts ? JSON.parse(cartProducts) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    status: "",
    access_token: localStorage.getItem("access_token") || "",
    refresh_token: localStorage.getItem("refresh_token") || "",
    user: {},
    currentProduct: currentProduct ? currentProduct : {},
    showPopupCart: false
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, access_token, user) {
      state.status = "success";
      state.access_token = access_token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.access_token = "";
      state.refresh_token = "";
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
      state.cartProducts.splice(0);
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
      state.cartProduct = [];
      state.cartCount = 0;
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

    SHOW_POPUP_CART: state => {
      state.showPopupCart = !state.showPopupCart;
    }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit("ADD_PRODUCT", product);
    },

    currentProduct: (context, product) => {
      context.commit("CURRENT_PRODUCT", product);
    },

    showOrHiddenPopupCart: context => {
      context.commit("SHOW_POPUP_CART");
    },

    sendCart({ commit }, {cart, request}) {
      return new Promise((resolve, reject) => {
        api
          .post(`/order/checkout/${id}/`, {cart, request})
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    addCart({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .post(`/order/item/create/`, data)
          .then(res => {
            console.log(res);

            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api({ url: "/api/token/", data: user, method: "POST" })
          .then(res => {
            const access_token = res.data.access;
            const refresh_token = res.data.refresh;
            const user = res.data;
            console.log(res.data.access);
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
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api({ url: "/users/signup/", data: user, method: "POST" })
          .then(res => {
            const token = res.data.access;
            const user = res.data;
            console.log(token);
            localStorage.setItem("token", token);

            api.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(res);
          })
          .catch(err => {
            commit("auth_error", err);
            alert(err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    inquire({ commit }, info) {
      console.log(info);
      return new Promise((resolve, reject) => {
        api
          .post("/users/vendor/application/", info)
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    pswReset({ commit }, username) {
      return new Promise((resolve, reject) => {
        api
          .post("/users/password-reset/", username)
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },

    requestRefresh({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .post("/api/token/refresh", data)
          .then(res => {
            this.isRefreshing = false;

            const refresh_token = res.data.refresh;
            const access_token = res.data.access;
            window.localStorage.setItem("refresh_token", refresh_token);
            window.localStorage.setItem("access_token", res.data.access);
            commit("auth_success", access_token);
            console.log("new token", access_token);
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
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
