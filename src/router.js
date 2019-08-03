import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import axios from "axios";
import store from "./store.js";

import Product from "@/components/Product";
import CartCheckout from "@/components/CartCheckout";

Vue.use(axios);
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/cookie-menu",
      name: "Cookie",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/getAllCookie.vue")
    },
    {
      path: "/cake-menu",
      name: "cake",
      component: () => import("@/components/getAllCake.vue")
    },

    {
      path: "/login",

      component: () => import("@/views/CustomerLogin.vue")
    },

    {
      path: "/register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/dashboard",
      component: () => import("@/views/userdashboard.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/bakery",
      component: () => import("./views/bakery.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/happybirthday",
      component: () => import("./components/category/happybirthday.vue")
    },
    {
      path: "/lover",
      component: () => import("./components/category/lover.vue")
    },
    {
      path: "/kid",
      component: () => import("./components/category/kid.vue")
    },
    {
      path: "/corporate",
      component: () => import("./components/category/business.vue")
    },
    {
      path: "/christmas",
      component: () => import("./components/category/christmas.vue")
    },

    {
      path: "/vendorsignup",
      name: "vendorsignup",
      component: () => import("./views/vendorSignup.vue")
    },
    {
      path: "/forget-password",
      name: "forget-password",
      componentL: () => import("./views/resetPsw.vue")
    },

    {
      path: "/product-details",
      name: "Product",
      component: Product
    },
    {
      path: "/cart",
      name: "cart",
      component: CartCheckout
    },
    {
      path: "/thanks",
      name: "thanks",
      component: () => import("./components/thankVendor.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/checkout.vue"),
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/order-success/:id",
      name: "order-success",
      component: () => import("@/views/confirmation.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    if (to.path == "/checkout" && store.getters.isLoggedIn) {
      next({ path: "/checkout" });
      return;
    }
    next("/login");
  } else {
    next();
  }
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (from.path == "/product-details" && to.path == "/") {
    router.push("/#cookie-section");
  }
});

export default router;
