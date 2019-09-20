<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="text-center" v-if="loading">
        <div class="spinner-border text-success" style="width:70px;height:70px" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <form class="form-a" @submit.prevent="Charge" id="payment-form">
          <div class="row">
            <div class="col-md-8 mb-4">
              <div class="title-single-box">
                <h2 class="title-single">Shipping Address</h2>
                <p class="text-muted">
                  <strong>Step 1</strong> -> Step 2
                </p>
              </div>

              <div class="d-block my-3">
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
                <div class="mb-2 col-md">
                  <img width="60%"
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png"
                    alt="Pay with PayPal, PayPal Credit or any major credit card"
                  />
                </div>
              </div>
             <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

    <!-- Used to display form errors. -->
    <div id="card-errors" role="alert"></div>
            </div>

            <div class="col-md-4 card float-right">
              <div class="card-body text-center" v-if="!hasProduct()">
                <div class="col-md">
                  <img
                    :src="cart"
                    width="100px"
                    height="100px"
                    alt="SHOPPING CART MADE BY SMASHICON"
                  />
                </div>
                <span style="font-size:25px;color:orange">Your Cart Is Empty.</span>
                <br />
                <span class="text-muted">No Product In Your Cart.</span>
                <br />
                <br />
                <br />

                <br />
              </div>
              <!--Card content-->

              <div class="card-body" v-if="hasProduct()">
                <h4 class="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>

                <div v-for="(product, index) in carts" :key="index">
                  <hr />

                  <dl class="row">
                    <dd class="col-sm-8">{{product.design}}-{{product.message}}</dd>
                    <dd class="col-sm-4">
                      {{product.price}}$
                      <strong>X {{product.count}}</strong>
                    </dd>
                  </dl>
                </div>

                <hr />

                <h6>
                  Subtotal:
                  <span class="float-right">{{cartdata.subtotal}}$</span>
                </h6>
                <p class="dark-grey-text">
                  Tax:
                  <span class="float-right">{{cartdata.tax}}$</span>
                </p>
                <p class="dark-grey-text">
                  Service fee:
                  <span class="float-right">{{cartdata.service_fee}}$</span>
                </p>
                 <p class="dark-grey-text">
                      Delivery fee:
                      <span class="float-right">{{cartdata.delivery_fee}}$</span>
                    </p>
                <h4>
                  Total:
                  <span class="float-right">{{cartdata.price}}$</span>
                </h4>

                <hr />

                <button class="btn btn-c btn-lg btn-block" type="submit">
                  <span v-if="cardCheckSending">
                    <i class="fa fa-btn fa-spinner fa-spin"></i>
                    Ordering...
                  </span>
                  <span v-else>Place Order</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <!--Card-->

            <!--/.Card-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import api from "../services/api";

export default {
  name: "checkout",
  data() {
    return {
      cardCheckSending: false,
      cart: require("@/assets/img/bag.png"),
      cartdata: "",
      carts: "",
      loading: false
    };
  },

  created() {
    this.loading = true;
    const cartid = this.$store.state.cart;
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
  mounted() {
  var stripe = Stripe('pk_test_7joGoWp0YeNb2IEBQxc5cjn3000umtOlCQ');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');
  },
  methods: {
    hasProduct() {
      return this.carts.length > 0;
    },

    Charge: async function() {
      const cartid = this.$store.state.cart;
      this.cardCheckSending = true;

      this.stripe.createToken(card).then(res => {
        if (res.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = res.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(res.token);
        }
      });

      // Submit the form with the token ID.
      function stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById("payment-form");
        var hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "stripeToken");
        hiddenInput.setAttribute("value", token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
      }
    }
  }
};
</script>

<style scoped>
.form-control:not([rows]) {
  max-height: 50px;
  min-height: 40px;
}

legend {
  font-size: 20px;
  color: #444;
}
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