<template>

<div>

 

   
      <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
           <div class="card">
         
          
            
               <router-link to="/product-details" >
                 <img :src="product.image" alt="" class="img-b img-fluid card-img-top" style="" @click="addCurrentProduct(product)">
               </router-link>
               
            
             
             
         
              <div class="card-header-b">
                <div class="card-category-b">
                  <a class="category-b">{{product.tag}}</a>
                </div>
              </div>
              <br>
          <div class="card-body">
            <div class="card-title">
              <router-link to="/product-details">
                <h2 class="product-name"
                    @click="addCurrentProduct(product)">{{ product.name }}
                </h2>
              </router-link>
            
            </div>
  
            <div class="card-text">
              <div class="product-price">
                <span style="color:rgba(61, 204, 89, 1);font-size:20px">$ {{ product.price }}</span>
                
              </div>
            </div>
      
            <btn btnColor="btn btn-b waves-effect"
               
                @click.native="addProductToCart(product);">
              <span style="font-size:13px;">Add to cart</span>
            </btn>
           
          </div>
           </div>
        </li>
      </ul>

   
</div>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';


export default {
  props: ['products','product.id'],

  components: {
    btn,
     
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),
    

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style>
 
</style>

