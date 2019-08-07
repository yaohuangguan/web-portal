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
          <form
            class="form-a"
            @submit.prevent="sendCart"
            action="/charge"
            method="post"
            id="payment-form"
          >
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-lg-8 mb-4">
                <div class="title-single-box">
                  <h2 class="title-single">Shipping Address</h2>
                  <p class="text-muted">
                    <strong>Step 1</strong> -> Step 2
                  </p>
                </div>

                <!-- Pills panels -->
                <div class="tab-content pt-4">
                  <!--Panel 1-->
                  <div
                    class="tab-pane fade in show active"
                    id="tabCheckoutBilling123"
                    role="tabpanel"
                  >
                    <!--Card content-->

                    <!--Grid row-->
                    <div class="row">
                      <!--Grid column-->
                      <fieldset class="col-md-6 mb-4">
                        <!--firstName-->
                        <legend for="firstName" class>First name</legend>
                        <input
                          type="text"
                          id="firstName"
                          :class="['is-danger' ? firstNameError : '', 'form-control']"
                          placeholder="First Name"
                          v-model="firstName"
                          required
                          autofocus
                        />
                        <div class="help is-danger" v-show="firstNameError">{{firstNameError}}</div>
                      </fieldset>
                      <!--Grid column-->

                      <!--Grid column-->
                      <fieldset class="col-md-6 mb-2">
                        <!--lastName-->
                        <legend for="lastName" class>Last name</legend>
                        <input
                          type="text"
                          id="lastName"
                          v-validate="'alpha'"
                          name="alpha_field"
                          :class="['is-danger' ? lastNameError : '', 'form-control']"
                          placeholder="Last Name"
                          v-model="lastName"
                        />
                        <div class="help is-danger" v-show="lastNameError">{{lastNameError}}</div>
                      </fieldset>
                      <!--Grid column-->
                    </div>
                    <!--Grid row-->

                    <fieldset>
                      <legend for="address" class>Address</legend>
                      <input
                        type="text"
                        :class="['is-danger' ? StreetError : '', 'form-control mb-2']"
                        placeholder="1234 Main St"
                        v-model="street"
                        required
                      />
                      <div class="help is-danger" v-show="StreetError">{{StreetError}}</div>
                    </fieldset>

                    <fieldset class="has-icons-left has-icons-right">
                      <legend>Cellphone</legend>
                      <input
                        type="text"
                        value="+1"
                        id="phone"
                        :class="['is-danger' ? phoneError : '', 'form-control d-block w-100 mb-2']"
                        v-model="phone"
                        required
                      />
                      <div class="help is-danger" v-show="phoneError">{{phoneError}}</div>
                    </fieldset>

                    <!--Grid row-->
                    <div class="row">
                      <!--Grid column-->
                      <fieldset class="col-lg-4 col-md-12 mb-4">
                        <legend>State</legend>
                        <select
                          :class="['is-danger' ? StateError : '', 'form-control d-block w-100']"
                          v-model="state"
                          required
                        >
                          <option v-for="(state,index) in states" :key="index">{{state.name}}</option>
                        </select>

                        <div class="help is-danger" v-show="StateError">{{StateError}}</div>
                      </fieldset>
                      <!--Grid column-->

                      <!--Grid column-->
                      <fieldset class="col-lg-4 col-md-6 mb-4">
                        <legend>City</legend>
                        <input
                          :class="['is-danger' ? CityError : '', 'form-control d-block w-100']"
                          type="text"
                          v-model="city"
                          placeholder="Columbus"
                          required
                        />

                        <div class="help is-danger" v-show="CityError">{{CityError}}</div>
                      </fieldset>
                      <!--Grid column-->

                      <!--Grid column-->
                      <fieldset class="col-lg-4 col-md-6 mb-4">
                        <legend>Zip</legend>
                        <input
                          type="text"
                          :class="['is-danger' ? ZipError : '', 'form-control']"
                          placeholder="90000"
                          v-model="zip"
                          required
                        />
                        <div class="help is-danger" v-show="ZipError">{{ZipError}}</div>
                      </fieldset>

                      <fieldset class="col-lg-6 col-md-6 mb-4">
                        <legend style="font-size:20px">Special Instruction</legend>
                        <textarea
                          class="form-control"
                          placeholder="I am allergic to peanut, etc..."
                          cols="45"
                          rows="4"
                          v-model="engravingText"
                        ></textarea>
                      </fieldset>

                      <!--Grid column-->
                    </div>
                    <hr />
                    <!--Grid row-->
                    <div class="title-single-box">
                      <h2 class="title-single">Payment</h2>
                      <p class="text-muted">
                        Step 1 ->
                        <strong>Step 2</strong>
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
                      <div class="mb-2">
                        <img
                          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png"
                          alt="Pay with PayPal, PayPal Credit or any major credit card"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div id="card-element">
                          <!-- A Stripe Element will be inserted here. -->
                        </div>
                        <div id="card-errors" role="alert"></div>
                      </div>
                    </div>
                  </div>
                  <!--/.Panel 1-->
                </div>
                <!-- Pills panels -->
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-4 mb-4">
                <!--Card-->
                <div class="card">
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

                    <div v-for="(product, index) in getProductsInCart" :key="index">
                      <hr />

                      <dl class="row">
                        <dd class="col-sm-8">{{product.name}}-{{product.tag}}</dd>
                        <dd class="col-sm-4">
                          {{product.price}}$
                          <strong>X {{product.count}}</strong>
                        </dd>
                      </dl>
                    </div>

                    <hr />

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
                      type="submit"
                      @click.prevent="validate"
                      :disabled="cardCheckSending"
                    >
                      <span v-if="cardCheckSending">
                        <i class="fa fa-btn fa-spinner fa-spin"></i>
                        Ordering...
                      </span>
                      <span v-else>Place Order</span>
                    </button>
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
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer";
import {
  required,
  sameAs,
  minLength,
  alpha,
  alphaNum,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "checkout",
  data() {
    return {
      states: [
        {
          name: "Alabama",
          abbreviation: "AL"
        },
        {
          name: "Alaska",
          abbreviation: "AK"
        },
        {
          name: "American Samoa",
          abbreviation: "AS"
        },
        {
          name: "Arizona",
          abbreviation: "AZ"
        },
        {
          name: "Arkansas",
          abbreviation: "AR"
        },
        {
          name: "California",
          abbreviation: "CA"
        },
        {
          name: "Colorado",
          abbreviation: "CO"
        },
        {
          name: "Connecticut",
          abbreviation: "CT"
        },
        {
          name: "Delaware",
          abbreviation: "DE"
        },
        {
          name: "District Of Columbia",
          abbreviation: "DC"
        },
        {
          name: "Federated States Of Micronesia",
          abbreviation: "FM"
        },
        {
          name: "Florida",
          abbreviation: "FL"
        },
        {
          name: "Georgia",
          abbreviation: "GA"
        },
        {
          name: "Guam",
          abbreviation: "GU"
        },
        {
          name: "Hawaii",
          abbreviation: "HI"
        },
        {
          name: "Idaho",
          abbreviation: "ID"
        },
        {
          name: "Illinois",
          abbreviation: "IL"
        },
        {
          name: "Indiana",
          abbreviation: "IN"
        },
        {
          name: "Iowa",
          abbreviation: "IA"
        },
        {
          name: "Kansas",
          abbreviation: "KS"
        },
        {
          name: "Kentucky",
          abbreviation: "KY"
        },
        {
          name: "Louisiana",
          abbreviation: "LA"
        },
        {
          name: "Maine",
          abbreviation: "ME"
        },
        {
          name: "Marshall Islands",
          abbreviation: "MH"
        },
        {
          name: "Maryland",
          abbreviation: "MD"
        },
        {
          name: "Massachusetts",
          abbreviation: "MA"
        },
        {
          name: "Michigan",
          abbreviation: "MI"
        },
        {
          name: "Minnesota",
          abbreviation: "MN"
        },
        {
          name: "Mississippi",
          abbreviation: "MS"
        },
        {
          name: "Missouri",
          abbreviation: "MO"
        },
        {
          name: "Montana",
          abbreviation: "MT"
        },
        {
          name: "Nebraska",
          abbreviation: "NE"
        },
        {
          name: "Nevada",
          abbreviation: "NV"
        },
        {
          name: "New Hampshire",
          abbreviation: "NH"
        },
        {
          name: "New Jersey",
          abbreviation: "NJ"
        },
        {
          name: "New Mexico",
          abbreviation: "NM"
        },
        {
          name: "New York",
          abbreviation: "NY"
        },
        {
          name: "North Carolina",
          abbreviation: "NC"
        },
        {
          name: "North Dakota",
          abbreviation: "ND"
        },
        {
          name: "Northern Mariana Islands",
          abbreviation: "MP"
        },
        {
          name: "Ohio",
          abbreviation: "OH"
        },
        {
          name: "Oklahoma",
          abbreviation: "OK"
        },
        {
          name: "Oregon",
          abbreviation: "OR"
        },
        {
          name: "Palau",
          abbreviation: "PW"
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA"
        },
        {
          name: "Puerto Rico",
          abbreviation: "PR"
        },
        {
          name: "Rhode Island",
          abbreviation: "RI"
        },
        {
          name: "South Carolina",
          abbreviation: "SC"
        },
        {
          name: "South Dakota",
          abbreviation: "SD"
        },
        {
          name: "Tennessee",
          abbreviation: "TN"
        },
        {
          name: "Texas",
          abbreviation: "TX"
        },
        {
          name: "Utah",
          abbreviation: "UT"
        },
        {
          name: "Vermont",
          abbreviation: "VT"
        },
        {
          name: "Virgin Islands",
          abbreviation: "VI"
        },
        {
          name: "Virginia",
          abbreviation: "VA"
        },
        {
          name: "Washington",
          abbreviation: "WA"
        },
        {
          name: "West Virginia",
          abbreviation: "WV"
        },
        {
          name: "Wisconsin",
          abbreviation: "WI"
        },
        {
          name: "Wyoming",
          abbreviation: "WY"
        }
      ],
      firstName: "",
      lastName: "",
      phone: "",
      engravingText: "",

      street: "",
      city: "",
      state: "",
      zip: "",

      firstNameError: null,
      lastNameError: null,
      phoneError: null,
      StreetError: null,
      StateError: null,
      CityError: null,
      ZipError: null,

      cardCheckSending: false,

      cart: require("@/assets/img/bag.png")
    };
  },
  validations: {
    firstName: {
      required,
      alpha
    }
  },

  component: {
    Footer
  },
  mounted() {
    var stripe = Stripe("pk_test_7joGoWp0YeNb2IEBQxc5cjn3000umtOlCQ");
    var elements = stripe.elements();
    var style = {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };
    var card = elements.create("card", { style: style });
    card.mount("#card-element");
    card.addEventListener("change", function(event) {
      var displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token);
        }
      });
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
  },
  computed: {
    ...mapGetters(["getProductsInCart"])
  },
  methods: {
    ...mapActions(["removeProduct", "currentProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    clearCardErrors() {
      this.firstNameError = null;
      this.lastNameError = null;
      this.phoneError = null;
      this.StreetError = null;
      this.StateError = null;
      this.CityError = null;
      this.ZipError = null;
    },
    validate() {
      this.clearCardErrors();
      let valid = true;
      if (!this.street) {
        valid = false;
        this.StreetError = "Street is Required";
      }
      if (!this.state) {
        valid = false;
        this.StateError = "State is Required";
      }
      if (!this.city) {
        valid = false;
        this.CityError = "City is Required";
      }
      if (!this.zip) {
        valid = false;
        this.ZipError = "Zip Code is Required";
      }
      if (!this.firstName) {
        valid = false;
        this.firstNameError = "First Name is Required";
      }
      if (!this.lastName) {
        valid = false;
        this.lastNameError = "Last Name is Required";
      }
      if (!this.phone) {
        valid = false;
        this.phoneError = "Phone Number is Required";
      }

      if (valid) {
        this.sendCart();
      }
    },

    sendCart: function() {
      let cardCheckSending = true;
      let request = JSON.stringify({
        name: this.firstName + this.lastName,
        phone: this.phone,
        zip: this.zip,
        city: this.city,
        state: this.state,
        street: this.street
      });

      this.$store.dispatch("sendCart", { request });
    },

    totalPrice() {
      let subtotal = 0;

      for (let product of this.$store.state.cartProducts) {
        subtotal += parseFloat(product.totalPrice);
      }

      return subtotal.toFixed(2);
    },
    tax() {
      let taxRate = 0.075;
      let tax = 0;
      for (let product of this.$store.state.cartProducts) {
        tax = parseFloat(product.totalPrice) * taxRate;
      }
      return tax.toFixed(2);
    },
    Total() {
      let taxRate = 0.075;
      let subtotal = 0;
      let total = 0;
      for (let product of this.$store.state.cartProducts) {
        subtotal += parseFloat(product.totalPrice);
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
  }
};
</script>

<style scoped>
.help {
  color: red;
  display: block;
  margin: 4px 0 20px 0;
  font-weight: 400;
  font-size: 13px;
}
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