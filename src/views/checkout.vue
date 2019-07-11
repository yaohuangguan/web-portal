<template>
  <div>
    <div class="container">
      <br><br><br><br><br>
      <div>
        <div class="card-body">
          <form>
            <!--Grid row-->
            <div class="row">

              <!--Grid column-->
              <div class="col-lg-8 mb-4">

                <div class="title-single-box">
                  <h2 class="title-single" style="font-size:20px">Customer Information</h2>
                  <p class="text-muted"><strong>Step 1</strong> -> Step 2</p>
                </div>

                <!-- Pills panels -->
                <div class="tab-content pt-4">
                  <div style="border:1px solid grey;padding:1em">
                    <h2 class="title-single" style="font-size:20px;"><b>Note:</b> <br>
                      <blockquote>This form is for delivery option. <em>Delivery may causes item unexpected damage
                          during shipping.</em></blockquote>
                      If you wish to Pick up your food, please <router-link to="/pickup"> <span
                          style="text-decoration:underline"><strong>PICKUP</strong></span>
                      </router-link>
                    </h2>
                  </div>
                  <br><br>
                  <!--Panel 1-->
                  <div class="tab-pane fade in show active" id="tabCheckoutBilling123" role="tabpanel">

                    <!--Card content-->


                    <!--Grid row-->
                    <div class="row">

                      <!--Grid column-->
                      <div class="col-md-6 mb-4">

                        <!--firstName-->
                        <label for="firstName" class="">First name</label>
                        <input type="text" id="firstName" class="form-control">

                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-6 mb-2">

                        <!--lastName-->
                        <label for="lastName" class="">Last name</label>
                        <input type="text" id="lastName" class="form-control">

                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->


                    <!--email-->
                    <label for="email" class="">Email</label>
                    <input type="text" id="email" class="form-control mb-4" placeholder="youremail@example.com"
                      required>

                    <!--address-->
                    <label for="address" class="">Address</label>
                    <input type="text" id="address" class="form-control mb-4" placeholder="1234 Main St" required>

                    <!--address-2-->
                    <label for="address-2" class="">Address 2 (optional)</label>
                    <input type="text" id="address-2" class="form-control mb-4" placeholder="Apartment or suite"
                      required>

                    <!--Grid row-->
                    <div class="row">

                      <!--Grid column-->
                      <div class="col-lg-4 col-md-12 mb-4">

                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>

                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-lg-4 col-md-6 mb-4">

                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required>
                          <option value="">Choose...</option>
                          <option>OH</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>

                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-lg-4 col-md-6 mb-4">

                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required>
                        <div class="invalid-feedback">
                          Zip code required.
                        </div>

                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <hr>



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
                       <p class="dark-grey-text">Tax:  <span class="float-right">{{tax()}}$</span></p>
                     <h4 >Total:<span class="float-right">{{Total()}}$</span></h4>


                    <hr>

                    <router-link to="/checkout-payment">

                      <button class="btn btn-a btn-lg btn-block" type="submit">Next to Payment <i
                          class="fas fa-angle-right right"></i></button>

                    </router-link>

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
  import Footer from '@/components/Footer';

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
      totalPrice() {
        let subtotal = 0;
        
        for (let product of this.$store.state.cartProducts) {
          subtotal += product.totalPrice;
          
        }
       
        return subtotal.toFixed(2);
      },
      tax(){
          let taxRate = 0.075;
          let tax = 0;
          for (let product of this.$store.state.cartProducts) {
                tax = product.totalPrice * taxRate;
        }
        return tax.toFixed(2);
      },
      Total(){
        let taxRate = 0.075;
        let subtotal = 0;
         let total =0;
             for (let product of this.$store.state.cartProducts) {
                subtotal += product.totalPrice;
                  total = subtotal + (subtotal*taxRate);
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