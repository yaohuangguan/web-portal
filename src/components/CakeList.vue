<template>

<div class="container">

 <div class="title-link">
      <router-link to="/cake-menu"><strong>View All</strong>
      <span class="ion-ios-arrow-forward"></span>
      </router-link>
      </div>
 

    
     <!-- no use for now, maybe develop later -->
     
  
  
    <allList/>
  
  

</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

import allList from '@/components/allList'
export default {
  props: ['products'],
 computed: {
    ...mapGetters([
      'getCityCake',
      'getBirthdayCake',
      'getChrismasCake',
    ]),
  },
  components: {
    
    allList
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
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    font-size: 20px;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

</style>

