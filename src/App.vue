<template>
  <div>

    <Menu>


      <li class="linkNav">
        <router-link to="/login" class="loginLink"><span class="span3">Login/SignUp</span></router-link>
      </li>


      <btn btnColor="btn btn-info1 btn-popup" v-b-modal.modal-tall @click.native="showPopupCart()">
        <i class="fas fa-shopping-bag fa-lg"></i>
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



    },
    computed: {
      ...mapGetters([
        'getProductsInCart',
        'getPopupCart',
      ]),
    },

    created() { //让页面一进来就掉用这个钩子;判断有没有之前存储的wxoken,有,就用token解析包解析然后存在vuex里面
      if (localStorage.wxToken) {
        const decode = jwt_decode(localStorage.wxToken);
        this.$store.dispatch('setUser', decode);
      }

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
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
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
    color: #333;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: bold
  }
</style>