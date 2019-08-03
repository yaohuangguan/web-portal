import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import "@/assets/css/style.css";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import store from "./store";
import "@/assets/custom.scss";
import api from "./services/api";

Vue.config.productionTip = false;

Vue.prototype.$http = api;
api.defaults.timeout = 10000;
const token = localStorage.getItem("access_token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
let isRefreshing = true;
api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },

  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          
          console.log("bad request!!!!!!!!!!!!!!!");
          break;
      
        case 401:
          alert("session expired");

          if (isRefreshing) {
            const refreshToken = window.localStorage.getItem("refresh_token");
            let data = {
              Authorization:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTY0NjgyNDI3LCJqdGkiOiIzNGE4MTY1MWQ0MTY0OGVjYmQ2Mzk0ODBmOWY3MGU3OSIsInVzZXJfaWQiOjEzNn0.akfEFFzCBquow0dufqZXG5ilbLPy-OWmi-jdpLUmU60",
              refreshToken
            };

            store.dispatch("requestRefresh", data);
          }
          isRefreshing = false;

          window.localStorage.removeItem("access_token");

          break;

        case 403:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });

          break;

        case 404:
          alert({
            message: "page not exist",
            duration: 1500,
            forbidClick: true
          });
          break;

        default:
      
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
