<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="title-single-box text-center">
        <h1
          class="title-single font-weight-bold"
          style="color:#444; font-size:30px;letter-spacing:3px"
        >For Lover</h1>
         <div class="text-center" v-if="loading">
      <div class="spinner-border text-success" style="width:70px;height:70px" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
      </div>

      <div class="row">
       
        <div v-if="error">{{error}}</div>
        <div>
          <div>
            <ul class="listOfProducts">
              <li v-for="(product,index) in products" :key="index" class="product">
                <div class="card">
                  <router-link to="/product-details">
                    <img
                      :src="product.image"
                      alt
                      class="img-b img-fluid card-img-top"
                      style="height:250px"
                      @click="addCurrentProduct(product)"
                    />
                  </router-link>

                  <div class="card-header-b">
                    <div class="card-category-b">
                      <a class="category-b">{{product.tag}}</a>
                    </div>
                  </div>
                  <br />
                  <div class="card-body">
                    <div class="card-title">
                      <router-link to="/product-details">
                        <h2
                          class="product-name"
                          @click="addCurrentProduct(product)"
                        >{{ product.name }}</h2>
                      </router-link>
                    </div>

                    <div class="card-text">
                      <div class="product-price">
                        <span
                          style="color:rgba(61, 204, 89, 1);font-size:20px"
                        >$ {{ product.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import api from "@/services/api";
import Footer from "../Footer";
export default {
  data() {
    return {
      products: "",
      loading: false,
      error: ""
    };
  },
  components: {
    Footer
  },
  mounted() {
    this.loading = true;
    api
      .get("/order/designs/10/")
      .then(response => {
        this.loading = false;
        this.products = response.data;
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
      });
  },
  methods: {
    ...mapActions(["addProduct", "currentProduct"]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    }
  }
};
</script>

