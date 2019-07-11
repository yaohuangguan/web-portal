<template>
  <div>
    <div class="container">
      <br><br><br><br><br>
      <div v-if="hasProduct()">
        <div class="card-body">

          <!-- Shopping Cart table -->
          <div class="table-responsive">

            <table class="table product-table">

              <!-- Table head -->
              <thead class="mdb-color white">
                <tr>
                  <th></th>
                  <th class="font-weight-bold">
                    <strong>Product</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>Your Message</strong>
                  </th>
                  <th></th>
                  <th class="font-weight-bold">
                    <strong>Price</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>QTY</strong>
                  </th>

                  <th></th>
                </tr>
              </thead>
              <!-- /.Table head -->

              <!-- Table body -->
              <tbody v-for="(product, index) in getProductsInCart" :key="index" >

                <!-- First row -->
                <tr>
                  <th scope="row">
                    <img :src="product.image" class="img-fluid img-b z-depth-0" style="grid-column:1/2;width:50%">
                  </th>
                  <td>
                    <h5 class="mt-3">
                      <strong>
                        <router-link to="/product-details">
                          <h3 class="product-name" @click="addCurrentProduct(product)">{{ product.name }}<br>{{product.flavor}}<br>{{product.size}}<br>{{product.shape}}<br>{{product.color}}</h3>
                        </router-link>
                      </strong>
                    </h5>
                    <p class="text-muted">{{ product.tag }}</p>
                  </td>
                  <td>{{product.message}}</td>
                  <td></td>
                  <td class="font-weight-bold"><b>$ {{ product.price }},00</b></td>
                  <td>
                    <input type="number"  class="form-control" style="width: 100px" min="1" v-model.number="product.count">
                  </td>

                  <td v-if="hasProduct()">

                    <a title="add item" @click.prevent="addProductToCart(product)"><i
                        class="fas fa-plus-circle fa-2x"></i>
                    </a>
                    <a title="Remove item" @click.prevent="removeFromCart(product)"><i
                        class="fas fa-minus-circle fa-2x"></i>
                    </a>

                  </td>
                </tr>
                <!-- /.First row -->




   
              </tbody>
              <!-- /.Table body -->
            
            </table>
            <div class="float-right">
               
                
                      <h6>Subtotal:<span class="float-right">{{totalPrice()}}$</span></h6>
                       <p class="dark-grey-text">Tax:  <span class="float-right">{{tax()}}$</span></p>
                     <h4 >Total:<span class="float-right">{{Total()}}$</span></h4>
                <div colspan="3" class="text-right">
                  <router-link to="/checkout">
                    <button type="button" class="btn btn-b btn-rounded waves-effect">Complete purchase

                    </button>
                  </router-link>
                </div>
              </div> 
          </div>
          <!-- /.Shopping Cart table -->

        </div>

      </div>


     <div class="text-center" v-if="!hasProduct()">
      <div class="col-md">
        <img :src="cart" width="100px" height="100px" alt="SHOPPING CART MADE BY SMASHICON">
      </div>
      <span  style="font-size:25px;color:orange">Your Cart Is Empty.</span>
      <br>
      <span class="text-muted">It Looks Like You Havent Made Your Choice Yet...</span>
      <br><br><br>
      
         
       
      <br>
    </div>
      <br><br><br><br><br><br><br><br><br>

    </div>
    <Footer />
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  import Footer from "@/components/Footer";
  export default {
     
   
    watch:{
          
        
    },
    computed: {
      ...mapGetters(["getProductsInCart"],{
         currentProduct: 'getCurrentProduct',
      }),
     
    },
    components: {


      Footer
    },
     data(){
      return{
        cart:require('@/assets/img/bag.png')
      }
      
  },

    methods: {
      ...mapActions(['addProduct', "currentProduct"]),
      hasProduct() {
        return this.getProductsInCart.length > 0;
      },

      
       totalPrice() {
        let subtotal = 0;
        
        for (let product of this.$store.state.cartProducts) {
          subtotal += product.totalPrice;
          
        }
       
        return subtotal.toFixed(2);
      },
      tax(){
          let taxRate = 0.075;
          let tax = 0;
          for (let product of this.$store.state.cartProducts) {
                tax = product.totalPrice * taxRate;
        }
        return tax.toFixed(2);
      },
      Total(){
        let taxRate = 0.075;
        let subtotal = 0;
         let total =0;
             for (let product of this.$store.state.cartProducts) {
                subtotal += product.totalPrice;
                  total = subtotal + (subtotal*taxRate);
        }
        return total.toFixed(2);
      },
      removeFromCart(product) {
        this.$store.commit('removeFromCart', product);
      },
      addCurrentProduct(product) {
        this.currentProduct(product);
      },
      addProductToCart(product) {
        this.addProduct(product);
      },
    }
  };
</script>

<style>

</style>