<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div class="card-body">
          <form action="/order-success" @submit="loader">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-lg-8 mb-4">
                <router-link to="/checkout">
                  <p class="text-muted">
                    <i class="fas fa-angle-left left"></i> Go back to customer information
                  </p>
                </router-link>
                <div class="title-single-box">
                  <h2 class="title-single" style="font-size:20px">Payment</h2>
                  <p class="text-muted">
                    Step 1 ->
                    <strong>Step 2</strong>
                  </p>
                </div>
                <div>
                  <div
                    class="tab-pane fade in show active"
                    id="tabCheckoutPayment123"
                    role="tabpanel"
                  >
                    <div class="d-block my-3">
                      <div class="mb-2">
                        <a>
                          <img
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                            alt="Check out with PayPal"
                          />
                        </a>
                      </div>
                      <h6 class="hr">OR</h6>
                      <div class="mb-2">
                        <input
                          name="group2"
                          type="radio"
                          class="form-check-input with-gap"
                          id="radioWithGap4"
                          checked
                          required
                        />
                        <label class="form-check-label" for="radioWithGap4">Credit card</label>
                      </div>
                      <div class="mb-2">
                        <img
                          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png"
                          alt="Pay with PayPal, PayPal Credit or any major credit card"
                        />
                      </div>
                    </div>
                     <p class="stripeError btn-block text-danger" v-if="stripeError">
              {{stripeError}}
            </p>
                    <div class="col-md-8">
                     
                     <div class="form-group">
            <label class="form-label" for="Card Number">
              Card Number
            </label>
            <div class="form-control mb-4">
              <input id="card-number" class="form-input" :class="{ 'invalid-feedback': cardNumberError }">
              <span class="help-block" v-if="cardNumberError">
                                {{cardNumberError}}
                            </span>
            </div>
          </div>

          <div class="form-group">
           
              <label class="form-label mb-4" for="Card CVC">
                Card CVC
              </label>
              <div class="form-control mb-4">
                <input id="card-cvc" class="form-input" :class="{ 'invalid-feedback': cardCvcError }">
                <span class="help-block" v-if="cardCvcError">
                                    {{cardCvcError}}
                                </span>
              </div>
          
           
              <label class="form-label" for="Expiry Month">
                Expiry
              </label>
              <div class="form-control mb-4">
                <input id="card-expiry" class="form-input" :class="{ 'invalid-feedback': cardExpiryError }">
                <span class="help-block" v-if="cardExpiryError">
                                    {{cardExpiryError}}
                                </span>
              </div>
            
          </div>
                    </div>
                    <br />
                    <br />
                    <br />
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
                      <hr />

                      <dl class="row">
                        <dd class="col-sm-8">{{product.name}}--{{product.tag}}</dd>
                        <dd class="col-sm-4">
                          {{product.price}}$
                          <strong>X {{product.count}}</strong>
                        </dd>
                      </dl>
                    </div>

                    <hr />
                    <label for="promo" class>Promotion</label>
                    <input
                      type="text"
                      id="promo"
                      class="form-control mb-4"
                      placeholder="Promo Code"
                    />

                    <h6>
                      Subtotal:
                      <span class="float-right">{{totalPrice()}}$</span>
                    </h6>
                    <p class="dark-grey-text">
                      Tax:
                      <span class="float-right">{{tax()}}$</span>
                    </p>
                    <h4>
                      Total:
                      <span class="float-right">{{Total()}}$</span>
                    </h4>

                    <hr />

                    <button
                      class="btn btn-c btn-lg btn-block"
                      id="btn-one"
                      @click="createToken"
                      type="submit"
                      @click.prevent="validate"
                    >
                      Place
                      Order
                    </button>

                    <h6 class="hr">OR</h6>
                    <button class="btn btn-a btn-lg btn-block" type="submit">
                      <i class="fab fa-apple"></i>Pay
                    </button>
                    <hr />
                  </div>
                </div>

                <!--/.Card-->
              </div>
            </div>
            <!--Grid row-->
          </form>
          <div v-show="errors">
            <br />
            <ol class="text-danger">
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer";
export default {
  name: "checkout",
  component: {
    Footer
  },
  computed: {
    ...mapGetters(["getProductsInCart"])
  },
  mounted() {
    this.setUpStripe();
  },
  methods: {
    ...mapActions(["removeProduct", "currentProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
   createToken() {
       this.loading = true
   this.stripe.createToken(this.cardNumber).then((result) => {
      this.loading = false
      if (result.error) {
        this.stripeError = result.error.message;
      } else {
        const token = result.token.id
        
      }
   })
      },
    setUpStripe() {
      if (window.Stripe === undefined) {
        alert("Stripe V3 library not loaded!");
      } else {
        const stripe = window.Stripe("pk_test_7joGoWp0YeNb2IEBQxc5cjn3000umtOlCQ");
        this.stripe = stripe;

        const elements = stripe.elements();
        this.cardCvc = elements.create("cardCvc");
        this.cardExpiry = elements.create("cardExpiry");
        this.cardNumber = elements.create("cardNumber");

        this.cardCvc.mount("#card-cvc");
        this.cardExpiry.mount("#card-expiry");
        this.cardNumber.mount("#card-number");

        this.listenForErrors();
      }
    },
    listenForErrors() {
      const vm = this;

      this.cardNumber.addEventListener("change", event => {
        vm.toggleError(event);
        vm.cardNumberError = "";
        vm.card.number = event.complete ? true : false;
      });

      this.cardExpiry.addEventListener("change", event => {
        vm.toggleError(event);
        vm.cardExpiryError = "";
        vm.card.expiry = event.complete ? true : false;
      });

      this.cardCvc.addEventListener("change", event => {
        vm.toggleError(event);
        vm.cardCvcError = "";
        vm.card.cvc = event.complete ? true : false;
      });
    },
    toggleError (event) {
        if (event.error) {
          this.stripeError = event.error.message;
        } else {
          this.stripeError = '';
        }
      },

    validate() {
      this.clearCardErrors();
        let valid = true;

        if (!this.card.number) {
          valid = false;
          this.cardNumberError = "Card Number is Required";
        }
        if (!this.card.cvc) {
          valid = false;
          this.cardCvcError = "CVC is Required";
        }
        if (!this.card.expiry) {
          valid = false;
          this.cardExpiryError = "Month is Required";
        }
        if (this.stripeError) {
          valid = false;
        }
        if (valid) {
          this.createToken()
        }
    },
    loader() {
      let loader = document.querySelector("#btn-one");
      loader.innerHTML =
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...';
      loader.classList.add("disabled");
    },
    clear(product) {
      this.$store.commit("clearProduct", product);
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
        total = subtotal + subtotal * taxRate;
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
   clearElementsInputs() {
        this.cardCvc.clear()
        this.cardExpiry.clear()
        this.cardNumber.clear()
      },

      clearCardErrors() {
        this.stripeError = ''
        this.cardCvcError = ''
        this.cardExpiryError = ''
        this.cardNumberError = ''
      },

  data() {
    return {
      card: {
        cvc: "",
        number: "",
        expiry: ""
      },
      //elements
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      stripe: null,

      // errors
      stripeError: "",
      cardCvcError: "",
      cardExpiryError: "",
      cardNumberError: "",

      loading: false,
    
    };
  }
};
</script>


<style>
h6.hr {
  display: flex;
  align-items: center;
  padding: 0.3em;
}

h6.hr::before,
h6.hr::after {
  content: "";
  flex: 1;
  background-color: lightgray;
  height: 1px;
}
</style>