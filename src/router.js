import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'


import Product from '@/components/Product';
import CartCheckout from '@/components/CartCheckout';


Vue.use(axios)
Vue.use(Router);

const router =  new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{isLogin:false}
    },
    
    {
      path: '/cookie-menu',
      name: 'Cookie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/getAllCookie.vue'),
      meta:{
        isLogin:true
      }
    },
    {
      path:'/cake-menu',
      name:'cake',
      component:()=>import('@/components/getAllCake.vue')
    },
    {
      path:'/login',
      
      component: () => import('@/views/CustomerLogin.vue'),
      meta:{
        isLogin:false
      }},

      {
        path:'/register',
        component:()=> import('./views/Register.vue'),
        meta:{
          isLogin:false
        }
      },
     {
       path:'/user/dashboard',
       component:()=>import('@/views/userdashboard.vue'),
       meta:{
         isLogin:false
       }
     },
     
      {
        path:'/vendorlogin',
        name:'vendorlogin',
        component:()=>import('./views/VendorLogin.vue')
      },
      {
        path:'/vendorsignup',
        name:'vendorsignup',
        component:()=>import('./views/vendorSignup.vue')
      },
     
      {
        path: '/product-details',
        name: 'Product',
        component: Product,
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartCheckout,
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: ()=>import('@/views/checkout.vue'),
      },
      
      {
        path: '/checkout-payment',
        name: 'checkout',
        component: ()=>import('@/views/checkout3.vue'),
      },
      {
        path: '/bakery-location',
        name: 'bakerylocation',
        component: ()=>import('@/views/bakerylocation.vue'),
      },
      {
        path: '/order-success/:id',
        name: 'order-success',
        component: ()=>import('@/views/confirmation.vue'),
      },
  ]

})
// router.beforeEach((to, from, next) => {
  
//   const isLogin = localStorage.wxToken ? true : false;
  
//   if (to.path == '/order') {
//       isLogin ? next() : next('/')
//   } else {
     
//       next()
//   }

// })

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0,0);
  if(from.path =='/product-details' && to.path == '/'){
    router.push('/#cookie-section')
  }
})

export default router;
