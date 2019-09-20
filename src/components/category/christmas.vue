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
        >Merry Christmas</h1>
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
                      :src="product.download_url"
                      alt
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
                        >{{ product.height }}</h2>
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
      error: "",
      pic: "https://picsum.photos/200/300"
    };
  },
  components: {
    Footer
  },
  created() {
    this.loading = true;
    api
      .get("/")
      .then(res => {
        this.loading = false;
        this.products = res.data;
      })
      .catch(err => {
        this.loading = false;
        if (err) {
          this.loading = true;
        }
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

