<template>
  <b-modal header-bg-variant="warning" id="modal-tall" title="Shopping Bag" hide-footer hide-header>
     <br>
    <li class="linkNavIN">
            <router-link to="/login" class="loginLink" @click.native="showPopupCart()"><span class="span3 price-a-a" >Login/SignUp</span></router-link>
          </li>
   
    <div class="text-center" v-if="!hasProduct()">
      <div class="col-md">
        <img :src="cart" width="100px" height="100px" alt="SHOPPING CART MADE BY SMASHICON">
      </div>
      <span  style="font-size:25px;color:orange">Your Cart Is Empty.</span>
      <br>
      <span class="text-muted">It Looks Like You Havent Made Your Choice Yet...</span>
      <br><br><br>
      
         <router-link to="/cookie-menu">
           <btn class="btn btn-c float-right" @click.native="showPopupCart()"
             ><span><i class="fas fa-bars"></i> See Menu</span>
             
            </btn>
         </router-link>
       
      <br>
    </div>
    
          
             <a @click.prevent="removeAll(product)" v-if="hasProduct()" class="empty"><span ><b>Empty Cart</b><i class="far fa-trash-alt"></i></span></a>
       
    <div v-for="(product, index) in getProductsInCart"  :key="index" class="box-item animatedRow" >
      <img :src="product.image" alt="" class="item-thumb">
      <h3 class="item-name">{{ product.name }}</h3>
     
      <span class="item-amount" style="color:#444">Amount: {{product.count}}</span>
      <span class="item-price">$ {{ product.price }}, 00</span>
        <div style="margin-left:80px">
          <a style="width:50%"
                    title="add item"  @click.prevent="addProductToCart(product)"><span class="fas fa-plus-circle fa-2x"></span>
                  </a>
                  <a style="width:50%"
                    title="Remove item"  @click.prevent="removeFromCart(product)"><i class="fas fa-minus-circle fa-2x"></i>
                  </a>
        </div>
    </div>
    <br><br><br>
    <div class="cart-info" v-if="hasProduct()">
      <span style="font-size:20px;"><b>Total: $ {{ totalPrice() }}, 00</b></span>
      
      <router-link to="/cart">
        <btn class="btn btn-c"
          @click.native="showPopupCart()">
          View cart
        </btn>
      </router-link>
    </div>
      
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';

export default {
  components: {
    btn,
  },
  data(){
      return{
        cart:require('@/assets/img/bag.png')
      }
      
  },
  
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
      'addProduct',
      'removeProduct',

    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
        let total = 0;

        for (let product of this.$store.state.cartProducts) {
            total += product.totalPrice;
        }

        return total.toFixed(2);
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
    removeAll(product){
      this.$store.commit('removeAll',product)
    },
     removeFromCart(product) {
        this.$store.commit('removeFromCart', product);
    },
     addProductToCart(product) {
      this.addProduct(product);
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
};
</script>

<style scoped>
  .box {
    width: 600px;
    height: auto;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: absolute;
    z-index: 1;
  }

  .box:after {
    content: '';
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: inherit;
    position: absolute;
    top: -15px;
    right: 15px;
  }

  .box-item {
    width: 100%;
    height: 130px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 .5em;
    margin-top: .3em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .item-thumb {
    max-width: 70%;
    grid-column: 1/2;
    grid-row: 1/4;
    align-self: center;
  }

  .item-name {
    grid-column: 2/4;
    grid-row: 1/2;
    font-weight: normal;
  }

  .item-amount {
    grid-column: 2/3;
    grid-row: 2/4;
    color: #ddd;
  }

  .cart-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: red;
    color: #fff;
    cursor: pointer;
  }

</style>
