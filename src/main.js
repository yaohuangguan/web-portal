import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import '@/assets/css/style.css'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/lib/ionicons/css/ionicons.min.css'

import '@/assets/lib/font-awesome/css/font-awesome.min.css'
import '@/assets/lib/jquery/jquery.min.js'
import store from './store'
import '@/assets/custom.scss'
import '@/assets/js/relate.js'

Vue.config.productionTip = false

Vue.component("app-nav",Navbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



