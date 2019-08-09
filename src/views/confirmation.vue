<template>
  <div>
    <div class="container">
      <div>
        <br><br><br><br><br>
        <h1 class="font-weight-bold">THANK YOU!</h1>
        <h2 class="title-single" style="font-size:20px">Congratulations! Your food is on the way!
        </h2>
        <p class="text-muted">Order ID:1234567890</p>
        <router-link to="./">GO BACK SHOPPING</router-link>
      </div>

      <div>
        <div class="card-body">
          <form>
            <!--Grid row-->
            <div class="row">

              <!--Grid column-->
              <div class="col-lg-8 mb-4">



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
                    <tbody v-for="(product, index) in getProductsInCart" :key="index">

                      <!-- First row -->
                      <tr>
                        <th scope="row">
                          <img :src="product.image" class="img-fluid z-depth-0">
                        </th>
                        <td>
                          <h5 class="mt-3">
                            <strong>
                              <router-link to="/product-details">
                                <h3 class="product-name" @click="addCurrentProduct(product)">{{ product.name }}</h3>
                              </router-link>
                            </strong>
                          </h5>
                          <p class="text-muted">{{ product.tag }}</p>
                        </td>
                        <td>Happy Birthday</td>
                        <td></td>
                        <td class="font-weight-bold"><b>$ {{ product.price }},00</b></td>
                        <td>
                          <span>{{product.count}}</span>
                        </td>


                      </tr>
                      <!-- /.First row -->





                    </tbody>
                    <!-- /.Table body -->

                  </table>

                </div>






              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-4 mb-4">


                <!--Card-->
                <div class="card">

                  <!--Card content-->
                  <div class="card-body">
                    <h4 class="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>

                    <div v-for="(product, index) in getProductsInCart" :key="index">
                      <hr>

                      <dl class="row">
                        <dd class="col-sm-8">
                          {{product.name}}--{{product.tag}}
                        </dd>
                        <dd class="col-sm-4">
                          {{product.price}}$ <strong>X {{product.count}}</strong>
                        </dd>
                      </dl>
                    </div>
                    <hr>
                    <h6>Subtotal:<span class="float-right">{{totalPrice()}}$</span></h6>
                    <p class="dark-grey-text">Tax: <span class="float-right">{{tax()}}$</span></p>
                    <h4>Total:<span class="float-right">{{Total()}}$</span></h4>




                  </div>

                </div>
                <!--/.Card-->



              </div>
              <!--Grid column-->

            </div>
            <!--Grid row-->
          </form>
        </div>
      </div>


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
    name:'confirmation',
    data(){
      return{
        carts:''
      }
    },
    computed: {
      ...mapGetters(["getProductsInCart"])
    },
    components: {
    Footer
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
      ...mapActions(['addProduct', "currentProduct"]),
      hasProduct() {
        return this.carts.length > 0;
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