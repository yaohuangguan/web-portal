<template>
  <div>
    <div class="text-center" v-if="loading">
      <div class="spinner-border text-success" style="width:70px;height:70px" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="error">{{error}}</div>
    <ul class="listOfProducts">
      <li v-for="(product,index) in products" :key="index" class="product">
        <div class="card">
          <router-link to="/product-details">
            <img
              v-lazyload
              :src="product.download_url"
              alt="pic"
              class="img-b img-fluid card-img-top"
              style="height:250px"
              @click="addCurrentProduct(product)"
            />
          </router-link>

          <div class="card-header-b">
            <div class="card-category-b">
              <a class="category-b">{{product.author}}</a>
            </div>
          </div>
          <br />
          <div class="card-body">
            <div class="card-title">
              <router-link to="/product-details">
                <h2
                  class="product-name"
                  @click="addCurrentProduct(product)"
                >{{ product.weight }}+{{product.height}}</h2>
              </router-link>
            </div>

            <div class="card-text">
              <div class="product-price">
                <span style="color:rgba(61, 204, 89, 1);font-size:20px">$ {{ product.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import btn from "./Btn";
import api from "../services/api";
import axios from "axios";

export default {
  components: {
    btn
  },
  data() {
    return {
      products: "",
      error: "",
      loading: false,
      image: "",
      img:
        "http://www.cookiecannon-static.s3.awsamazon.com/order/design/image/",
      designid: "",
      pic: ""
    };
  },
  computed: {},
  async created() {
    this.loading = true;
    // try {
    //   const res = await api.get("/");

    //   this.products = res.data;
    //   this.loading = false;
    //   this.designid = res.data.id;
    //   console.log("RESPONSE FROM FEATURED DESIGNS", res.data);
    // } catch (error) {
    //   console.error(error);
    // }

    // try {
    //   const res = await api.get("/");
    //   this.loading = false;
    //   this.all = res.data;
    //   console.log("response from get designs/all/", res.data);
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const res = await api.get("/");
      this.loading = false;
      console.log(res.data);
      this.products = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(["currentProduct"]),
    addCurrentProduct(product) {
      this.currentProduct(product);
    }
  }
};
</script>

<style>
</style>

