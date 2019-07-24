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
          <form class="form-a" action="/charge" method="post">
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

                       :class="['is-danger' ? addressStreetError : '', 'form-control mb-2']"
                      placeholder="1234 Main St"
                      v-model="address.street"
                      required
                    />
                    <div class="help is-danger" v-show="addressStreetError">{{addressStreetError}}</div>
                     </fieldset>

                    <fieldset class="has-icons-left has-icons-right">
                      <legend>Cellphone</legend>
                      <input
                        type="number"
                        id="phone"
                        :class="['is-danger' ? phoneError : '', 'form-control d-block w-100 mb-2']"
                        placeholder="xxx-xxxx-xxxx"
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
                        <input
                          :class="['is-danger' ? addressStateError : '', 'form-control d-block w-100']"
                          v-model="address.state"
                          placeholder="OH"
                          required
                        />

                        <div class="help is-danger" v-show="addressStateError">{{addressStateError}}</div>
                      </fieldset>
                      <!--Grid column-->

                      <!--Grid column-->
                      <fieldset class="col-lg-4 col-md-6 mb-4">
                        <legend>City</legend>
                        <input
                         
                          :class="['is-danger' ? addressCityError : '', 'form-control d-block w-100']"
                          type="text"
                          v-model="address.city"
                          placeholder="Columbus"
                          required
                        />

                        <div class="help is-danger" v-show="addressCityError">{{addressCityError}}</div>
                      </fieldset>
                      <!--Grid column-->

                      <!--Grid column-->
                      <fieldset class="col-lg-4 col-md-6 mb-4">
                        <legend>Zip</legend>
                        <input
                          type="text"
                          :class="['is-danger' ? addressZipError : '', 'form-control']"
                          placeholder="90000"
                          v-model="address.zip"
                          required
                        />
                        <div class="help is-danger" v-show="addressZipError">{{addressZipError}}</div>
                      </fieldset>
                     
                        <fieldset class="col-lg-6 col-md-6 mb-4">
                          <legend style="font-size:20px">Special Note</legend>
                          <textarea
                            class="form-control"
                            placeholder="What would you like the note to say?" cols="45"
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
                        <a>
                          <img
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                            alt="Check out with PayPal"
                          />
                        </a>
                      </div>
                      <div class="col-md-4 text-center">
                        <h6 class="hr">OR</h6>
                      </div>
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
                      <fieldset class="col-md-6 mb-4">
                        <!--firstName-->
                        <legend for="card_number" class>Card Number</legend>
                        <input
                          type="text"
                          id="card_number"
                          v-model="card.number"
                          :class="['is-danger' ? cardNumberError : '', 'form-control']"
                        />
                        <span class="help is-danger" v-show="cardNumberError">{{ cardNumberError }}</span>
                      </fieldset>

                      <fieldset class="col-md-6 mb-4">
                        <!--firstName-->
                        <legend for="cvc">CVC</legend>
                        <input
                          type="text"
                          id="cvc"
                          v-model="card.cvc"
                         :class="['is-danger' ? cardCvcError : '', 'form-control']"
                          placeholder="123"
                        />
                        <span class="help is-danger" v-show="cardCvcError">{{ cardCvcError }}</span>
                      </fieldset>
                      <fieldset class="col-md-6 mb-4">
                        <!--firstName-->
                        <legend for="exp_month">Expiration Month</legend>
                        <input
                          type="text"
                          id="exp_month"
                          v-model="card.exp_month"
                          :class="['is-danger' ? cardMonthError : '', 'form-control']"
                          placeholder="MM"
                        />
                        <span class="help is-danger" v-show="cardMonthError">{{ cardMonthError }}</span>
                      </fieldset>
                      <fieldset class="col-md-6 mb-4">
                        <!--firstName-->
                        <legend for="exp_year">Expiration year</legend>
                        <input
                          type="text"
                          id="exp_year"
                          v-model="card.exp_year"
                          :class="['is-danger' ? cardYearError : '', 'form-control ']"
                          placeholder="YY"
                        />
                        <span class="help is-danger" v-show="cardYearError">{{ cardYearError }}</span>
                      </fieldset>
                      <div class="help is-danger" v-if="cardCheckError">
                        <span style="color:red">{{ cardCheckErrorMessage }}</span>
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

                    <h6 class="hr">OR</h6>
                    <button class="btn btn-a btn-lg btn-block" type="submit">
                      <i class="fab fa-apple"></i>Pay
                    </button>
                    <hr />
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
import axios from "axios";
export default {
  name: "checkout",
  data() {
    return {
      stripeKey: "pk_test_7joGoWp0YeNb2IEBQxc5cjn3000umtOlCQ",

      firstName: "",
      lastName: "",
      phone: "",
      engravingText: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: ""
      },

      card:{
        number:"",
        cvc:"",
        exp_month:"",
        exp_year:""
      },

      cardNumberError:null,
      cardCvcError:null,
      cardMonthError:null,
      cardYearError:null,

      firstNameError:null,
      lastNameError:null,
      phoneError:null,
      addressStreetError:null,
      addressStateError:null,
      addressCityError:null,
      addressZipError:null,

      cardCheckSending:false,
      cardCheckError:false,
      cardCheckErrorMessage:""
    };
  },
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
    clearCardErrors() {
      this.cardNumberError = null;
      this.cardCvcError = null;
      this.cardMonthError = null;
      this.cardYearError = null;
      this.firstNameError=null,
      this.lastNameError=null,
      this.phoneError=null,
      this.addressStreetError=null,
      this.addressStateError=null,
      this.addressCityError=null,
      this.addressZipError=null
    },
    validate() {
      this.clearCardErrors();
      let valid = true;
      if (!this.address.street) {
        valid = false;
        this.addressStreetError = "Street is Required";
      }
      if (!this.address.state) {
        valid = false;
        this.addressStateError = "State is Required";
      }
      if (!this.address.city) {
        valid = false;
        this.addressCityError = "City is Required";
      }
      if (!this.address.zip) {
        valid = false;
        this.addressZipError = "Zip Code is Required";
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
      if (!this.card.number) {
        valid = false;
        this.cardNumberError = "Card Number is Required";
      }
      if (!this.card.cvc) {
        valid = false;
        this.cardCvcError = "CVC is Required";
      }
      if (!this.card.exp_month) {
        valid = false;
        this.cardMonthError = "Month is Required";
      }
      if (!this.card.exp_year) {
        valid = false;
        this.cardYearError = "Year is Required";
      }
      if (valid) {
        this.createToken();
      }
    },
    createToken() {
      this.cardCheckError = false;
      window.Stripe.setPublishableKey(this.stripeKey);
      window.Stripe.createToken(
        this.card,
        $.proxy(this.stripeResponseHandler, this)
      );
      this.cardCheckSending = true;
    },
    stripeResponseHandler(status, response) {
      this.cardCheckSending = false;
      if (response.error) {
        this.cardCheckErrorMessage = response.error.message;
        this.cardCheckError = true;

        alert(response.error);
      } else {
        // this.tokenRetrieved = true;
        // this.$emit('paymentEntered', response.id);

        // token to create a charge on our server
        alert('for is good')
        var token_from_stripe = response.id;

        var request = {
          firstName: this.firstName,
          lastName:this.lastName,
          phone: this.phone,
          engravingText: this.engravingText,
          address: this.address,
          card: this.card,
          token_from_stripe: token_from_stripe
        };

        // Send to our server
        axios.post(`localhost:8080/charge`, request).then(res => {
          var error = res.data.error;
          var charge = res.data.charge;
          if (error) {
           alert(error);
          } else {
            this.$router.push({ path: `order-success/${charge.id}` });
          }
        });
      }
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
  }
};
</script>

<style scoped>

.help{
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

legend{
  font-size:20px;
  color:#444;
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