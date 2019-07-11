<template>

<div>

 <div class="title-link">
      <router-link to="/cake-menu"><strong>View All</strong>
      <span class="ion-ios-arrow-forward"></span>
      </router-link>
      </div>
  <b-tabs
      active-nav-item-class=" pills font-weight-bold text-uppercase text-white"
      active-tab-class="font-weight-bold text-success"
      content-class="mt-3" align="center" class="nav-pills"
    >

    <b-tab title="City View" active>
      <allList :products="getCityCake"/>
    
    </b-tab>

    <b-tab title="Happy Birthday">
    <allList :products="getBirthdayCake"/>
    </b-tab>
  
    <b-tab title="Merry Chrismas">
    <allList :products="getChrismasCake"/>
    </b-tab>
  
  </b-tabs>
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

