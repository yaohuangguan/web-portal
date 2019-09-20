import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import "@/assets/css/style.css";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

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
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + token;
}

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
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
        case 401:
          if (!error.request.responseURL.includes("api/token/")) {
            if (isRefreshing) {
              const refresh = JSON.stringify({
                refresh: window.localStorage.getItem("refresh_token")
              });
              store.dispatch("requestRefresh", refresh);
            }
            isRefreshing = false;

            window.localStorage.removeItem("access_token");
          } else {
            throw error;
          }

          break;

        case 403:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        case 404:
          throw error;

        default:
          throw error;
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
