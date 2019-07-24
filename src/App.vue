<template>
  <div>

    <Menu>
       <li class="linkNav">
        <a  class="loginLink dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="span3">Category</span></a>
        <div class="dropdown-menu" style="z-index:1000;height:200px" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
      </li>
      <li class="linkNav">
        <router-link to="/login" class="loginLink"><span class="span3">Login/SignUp</span></router-link>
      </li>


      <btn @scroll="handle" class="btn btn-info1 btn-popup" id="cartAnimate" v-b-modal.modal-tall @click.native="showPopupCart()">
        <i class="fas fa-shopping-bag fa-lg" style="color:#333"></i>
        <span class="btn-circle" v-if="hasProduct()">
          <i class="cartNum">
			{{ getProductsInCart.reduce((acc,currentProduct) => acc + currentProduct.count,0) }}
		</i>
        </span>
      </btn>

      <popupcart class="cart" v-if="getPopupCart" />



    </Menu>




    <router-view />


  </div>



</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import jwt_decode from 'jwt-decode'
  import popupcart from '@/components/Popupcart';
  import btn from '@/components/Btn';
  import Menu from '@/components/Menu';


  export default {
    name: 'app',
    components: {
      Menu,
      btn,
      popupcart,




    },
    methods: {
      ...mapActions([
        'showOrHiddenPopupCart',
      ]),
      hasProduct() {
        return this.getProductsInCart.length > 0;
      },
      showPopupCart() {
        this.showOrHiddenPopupCart();
      },

      handle(){
        let btn = document.getElementsByClassName('btn');
        if(window.scrollY>100 && !btn.classList.includes('orange')){
          btn.classList.add('orange')
        } else if( window.scrollY < 100 ) {
          btn.classList.remove('orange')
        }
      }



    },
    computed: {
      ...mapGetters([
        'getProductsInCart',
        'getPopupCart',
      ]),
    },

    created() { 
      if (localStorage.wxToken) {
        const decode = jwt_decode(localStorage.wxToken);
        this.$store.dispatch('setUser', decode);
      }

      window.addEventListener('scroll',this.handle)

    },
    destroyed(){
      window.removeEventListener('scroll',this.handle)
    }
  }
</script>

<style lang="scss">
  @import 'assets/custom.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700');

  body {
    margin: 0;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 355px;
  }

  .btn-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
   
    top: -5px;
    right: -5px;
    background-color: #eb782e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-family: 'Poppins', sans-serif;
    font-weight: bold
  }
  .orange{
   background-color:#eb782e
  }
</style>