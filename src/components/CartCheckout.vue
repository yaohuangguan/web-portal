<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <form @submit.prevent="addCart">
        <div class="text-center" v-if="loading">
          <div class="spinner-border text-success" style="width:70px;height:70px" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div>
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
                  <tbody v-for="(product, index) in carts" :key="index">
                    <!-- First row -->
                    <tr id="animatedRow">
                      <th scope="row">
                        <img
                          :src="product.image"
                          class="img-fluid img-b z-depth-0"
                          style="grid-column:1/2;width:50%"
                        />
                      </th>
                      <td>
                        <h5 class="mt-3">
                          <strong>
                            <router-link to="/product-details">
                              <h3 class="product-name" @click="addCurrentProduct(product)">
                                {{ product.design}}
                                {{product.size ? product.size : null}}
                                {{product.shape ? product.shape : null}}
                                <br />
                                {{product.base_color ? product.base_color + '(base)' : null}}
                                {{product.message_color ? product.message_color + '(message)' : null}}
                              </h3>
                            </router-link>
                          </strong>
                        </h5>
                        <p class="text-muted">{{ product.tag }}</p>
                      </td>
                      <td>
                        <h6>{{product.message}}</h6>
                      </td>
                      <td></td>
                      <td class="font-weight-bold">
                        <b>$ {{ product.price }}</b>
                      </td>
                      <td>
                        <h3>{{product.count}}</h3>
                      </td>

                      <td v-if="hasProduct()">
                        <a title="Remove item" @click="deleteProduct(product.id)">
                          <span class="text-danger font-weight-bold">REMOVE</span>
                        </a>
                      </td>
                    </tr>
                    <!-- /.First row -->
                  </tbody>
                  <!-- /.Table body -->
                </table>
                <div class="float-right">
                  <h6>
                    Subtotal:
                    <span class="float-right">{{cartdata.subtotal}}$</span>
                  </h6>
                  <p class="dark-grey-text">
                    Tax:
                    <span class="float-right">{{cartdata.tax}}$</span>
                  </p>
                  <span class="dark-grey-text">
                    Service fee:
                    <span class="float-right">{{cartdata.service_fee}}$</span>
                  </span>
                  <h4>
                    Total:
                    <span class="float-right">{{cartdata.price}}$</span>
                  </h4>
                  <div colspan="3" class="text-right">
                    <router-link to="/checkout">
                      <button
                        type="button"
                        class="btn btn-b btn-rounded waves-effect"
                      >Complete purchase</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- /.Shopping Cart table -->
            </div>
          </div>
        </div>
      </form>

      <div class="text-center" v-if="!hasProduct()">
        <div class="col-md">
          <img :src="bag" width="100px" height="100px" alt="SHOPPING CART MADE BY SMASHICON" />
        </div>
        <span style="font-size:25px;color:orange">Your Cart Is Empty.</span>
        <br />
        <span class="text-muted">It Looks Like You Havent Made Your Choice Yet...</span>
        <br />
        <br />
        <br />

        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import api from "../services/api";
import Footer from "@/components/Footer";
export default {
  name: "CartCheckout",
  computed: {
    ...mapGetters(["getProductsInCart"], {
      currentProduct: "getCurrentProduct"
    })
  },
  components: {
    Footer
  },
  data() {
    return {
      bag: require("@/assets/img/bag.png"),
      loading: false,
      carts: "",
      error: [],
      cartdata: ""
    };
  },
  created() {
    this.loading = true;
    const cartid = this.$store.state.cart;
    console.log("STATE.CART", cartid);
    api
      .get(`/order/viewcart/${cartid}/`)
      .then(res => {
        this.loading = false;
        this.carts = res.data;
        localStorage.setItem("Carts", this.carts);
        console.log(res.data);
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
        console.log(err);
      });

    api
      .get(`/order/getcartdata/${cartid}/`)
      .then(res => {
        this.loading = false;
        console.log(res);
        this.cartdata = res.data;
      })
      .catch(err => {
        this.loading = false;
        console.log(err);
      });
  },

  methods: {
    ...mapActions(["addProduct", "currentProduct", "removeFromCart"]),
    hasProduct() {
      return this.carts.length > 0;
    },
    addProductToCart(product) {
      this.addProduct(product);
    },

    //delete cart item
    deleteProduct: async id => {
      console.log("test for delete product");
      try {
        const res = await api.delete("/order/item/update/" + id + "/");
        console.log(res);
      } catch (error) {
        console.error(error);
      }
      window.location.reload();
    },
    //go to product detail page
    addCurrentProduct(product) {
      this.currentProduct(product);
    }
  }
};
</script>

<style>
</style>