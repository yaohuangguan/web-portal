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
          <form>
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
                      <div class="col-md-6 mb-4">
                        <!--firstName-->
                        <label for="firstName" class>First name</label>
                        <input type="text" id="firstName" class="form-control" placeholder="First Name" v-model="firstName" />
                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-6 mb-2">
                        <!--lastName-->
                        <label for="lastName" class>Last name</label>
                        <input type="text" id="lastName" class="form-control" placeholder="Last Name" v-model="lastName" />
                      </div>
                      <!--Grid column-->
                    </div>
                    <!--Grid row-->

                    <!--email-->

                      <div class="has-icons-left has-icons-right">
                        <label>Cellphone</label>
                        <input
                          type="number"
                          id="phone"
                          class="form-control mb-4"
                          placeholder="xxx-xxxx-xxxx"
                          v-model="phone"
                          required
                        />
                      
                      </div>
              

                    <!--address-->
                    <label for="address" class>Address</label>
                    <input
                      type="text"

                      class="form-control mb-4"
                      placeholder="1234 Main St"
                      v-model="address.street"
                      required
                    />

              
                   

                    <!--Grid row-->
                    <div class="row">
                      <!--Grid column-->
                      <div class="col-lg-4 col-md-12 mb-4">
                        <label>State</label>
                        <input class="form-control d-block w-100" v-model="address.state" placeholder="OH" required>
                         
                        <div class="invalid-feedback">Please select a valid country.</div>
                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-lg-4 col-md-6 mb-4">
                        <label >City</label>
                        <input class="form-control d-block w-100"  
                        type="text" v-model="address.city" placeholder="Columbus"
                        required>
                          

                        <div class="invalid-feedback">Please provide a valid state.</div>
                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-lg-4 col-md-6 mb-4">
                        <label>Zip</label>
                        <input type="text" class="form-control" placeholder="90000" v-model="address.zip" required />
                        <div class="invalid-feedback">Zip code required.</div>
                      </div>
                       <div class="col-md-6 mb-4">
                       <label>Special Note</label>
        <textarea
          class="textarea"
          placeholder="What would you like the note to say?"
          v-model="engravingText"
        ></textarea>
        </div>
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

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <!--firstName-->
                        <label for="card_number" class>Card Number</label>
                        <input type="text" id="card_number" v-model="card.number"  :class="['is-danger' ? cardNumberError : '', 'form-control']" />
                        <span class="help is-danger" v-show="cardNumberError">{{ cardNumberError }}</span>
                      </div>

                      <div class="col-md-6 mb-4">
                        <!--firstName-->
                        <label for="cvc">CVC</label>
                        <input type="text" id="cvc" v-model="card.cvc" class="form-control" placeholder="123" />
                        <span class="help is-danger" v-show="cardCvcError">{{ cardCvcError }}</span>
                      </div>
                      <div class="col-md-6 mb-4">
                        <!--firstName-->
                        <label for="exp_month">Expiration Month</label>
                        <input type="text" id="exp_month" v-model="card.exp_month" :class="['is-danger' ? cardMonthError : '', 'form-control']" placeholder="MM" />
                        <span class="help is-danger" v-show="cardMonthError">{{ cardMonthError }}</span>
                      </div>
                      <div class="col-md-6 mb-4">
                        <!--firstName-->
                        <label for="exp_year">Expiration year</label>
                        <input type="text" id="exp_year" v-model="card.exp_year" :class="['is-danger' ? cardYearError : '', 'form-control']" placeholder="YY" />
                        <span class="help is-danger" v-show="cardYearError">{{ cardYearError }}</span>
                      </div>
                        <div class="help is-danger" v-if="cardCheckError">
          <span>{{ cardCheckErrorMessage }}</span>
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
import axios from 'axios'
export default {
  name: "checkout",
  data(){

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

  data() {
    return {
      data: []
    };
  }
};
</script>

<style scoped>
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