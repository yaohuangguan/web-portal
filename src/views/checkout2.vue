<template>
  <div>
    <div class="container">
      <br><br><br><br><br>
      <div>
        <div class="card-body">
          <form action="/order-success">
            <!--Grid row-->
            <div class="row">

              <!--Grid column-->
              <div class="col-lg-8 mb-4">
                <router-link to="/checkout">
                  <p class="text-muted"> <i class="fas fa-angle-left left"></i> Go back to customer information</p>
                </router-link>
                <div class="title-single-box">
                  <h2 class="title-single" style="font-size:20px">Payment</h2>
                  <p class="text-muted">Step 1 -> <strong>Step 2</strong></p>
                </div>
                <div>
                  <div class="tab-pane fade in show active" id="tabCheckoutPayment123" role="tabpanel">

                    <div style="border:1px solid grey;padding:1em">

                      <h2 class="title-single" style="font-size:20px"><b>Note:</b>
                        <blockquote>We will send you bakery pick-up location for your order after you make payment.
                        </blockquote>
                      </h2>
                      <p> Please Check out <router-link to="/bakery-location">
                          <span style="text-decoration:underline"><em>BAKERY LOCATION LIST</em></span>
                        </router-link> for more info</p>
                    </div>
                    <div class="d-block my-3">
                      <div class="mb-2">
                        <a><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                            alt="Check out with PayPal" /></a>
                      </div>
                      <h6 class="hr">
                        OR
                      </h6>
                      <div class="mb-2">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked
                          required>
                        <label class="form-check-label" for="radioWithGap4">Credit card</label>

                      </div>

                      <div class="mb-2">
                        <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png"
                          alt="Pay with PayPal, PayPal Credit or any major credit card" />
                      </div>



                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="cc-name123">Name on card</label>
                        <input type="text" class="form-control" id="cc-name123" placeholder="Enter Your Name" required>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="cc-number123">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number123" placeholder="4000 0000 0000 0000"
                          required>
                        <div class="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration123">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration123" placeholder="MM/YY" required>
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="cc-cvv123">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv123" placeholder="CVV" required>
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <br><br><br><br>


                  </div>

                </div>
                <!-- Pills panels -->


              </div>

              <!--Grid column-->
              <div class="col-lg-4 mb-4">


                <!--Card-->
                <div class="card">

                  <!--Card content-->
                  <div class="card-body" v-if="hasProduct()">
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
                    <hr>
                    <button class="btn btn-c btn-lg btn-block" @click="loader" id="btn-two" type="submit">Place
                      Order</button>

                    <h6 class="hr">
                      OR
                    </h6>
                    <button class="btn btn-a btn-lg btn-block" type="submit"><i class="fab fa-apple"></i>Pay</button>
                    <hr>

                  </div>

                </div>

                <!--/.Card-->



              </div>

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
    name: 'checkout',
    component: {
      Footer
    },
    computed: {
      ...mapGetters(["getProductsInCart"])
    },
    methods: {
      ...mapActions(["removeProduct", "currentProduct"]),
      hasProduct() {
        return this.getProductsInCart.length > 0;
      },
      loader() {
        let loader = document.querySelector('#btn-two');
        loader.innerHTML =
          '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...';
        loader.classList.add('disabled')
      },
     
      totalPrice() {
        let subtotal = 0;

        for (let product of this.$store.state.cartProducts) {
          subtotal += product.totalPrice;

        }

        return subtotal.toFixed(2);
      },
      tax() {
        let taxRate = 0.075;
        let tax = 0;
        for (let product of this.$store.state.cartProducts) {
          tax = product.totalPrice * taxRate;
        }
        return tax.toFixed(2);
      },
      Total() {
        let taxRate = 0.075;
        let subtotal = 0;
        let total = 0;
        for (let product of this.$store.state.cartProducts) {
          subtotal += product.totalPrice;
          total = subtotal + (subtotal * taxRate);
        }
        return total.toFixed(2);
      },
      remove(index) {
        this.removeProduct(index);
      },
      addCurrentProduct(product) {
        this.currentProduct(product);
      }
    },


    data() {
      return {
        data: [

        ]
      }
    }
  }
</script>

<style scoped>

</style>