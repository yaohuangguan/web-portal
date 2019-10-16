<template>
  <div>
    <div class="container">
      <section class="intro-single">
        <div class="container">
          <div class="row"></div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-2">
            <img :src="currentProduct.download_url" style="grid-column:1/2;width:80%" alt />
            <br />
          </div>

          <div class="col-md-8">
            <form class="form-a" @submit.prevent="addCart">
              <div class="row">
                <div class="col-md-12 mb-2 form-group">
                  <h1 class="title-single">{{currentProduct.author}}</h1>
                  <span class="color-text-a">{{currentProduct.width}}+{{currentProduct.height}}</span>
                  <h4 class="product-price">
                    Price :
                    <b>$ {{ currentProduct.id }}</b>
                  </h4>
                </div>
                <div
                  v-if="errors.shape.length > 0 || errors.size.length > 0 || errors.count.length > 0"
                >
                  <ul class="text-danger list-unstyled">
                    <li v-for="(error,index) in errors.shape" :key="index">Shape:{{ error }}</li>
                    <li v-for="(error,index) in errors.size" :key="index">Size:{{ error }}</li>
                    <li v-for="(error,index) in errors.count" :key="index">Quantity:{{ error }}</li>
                  </ul>
                </div>

                <div class="col-md-12 mb-2">
                  <div class="form-group">
                    <div class="md-form dark-grey">
                      <label for="form1">You Say it We Print it</label>

                      <input
                        v-model="message"
                        type="text"
                        id="form1"
                        class="form-control"
                        placeholder="Happy Birthday, John!"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="message_color">Message Color</label>
                    <select
                      v-model="message_color"
                      class="form-control form-control-lg form-control-a"
                      id="message_color"
                    >
                      <option>{{currentProduct.message_color}}</option>
                      <option v-for="(colors,index) in messageColor" :key="index">{{colors.color}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="shape">Shape</label>
                    <select
                      v-model="shape"
                      class="form-control form-control-lg form-control-a"
                      id="shape"
                    >
                      <option>{{currentProduct.shape}}</option>
                      <option v-for="(shape,index) in shapes" :key="index">{{shape.shape}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="flavors">Base Color</label>
                    <select
                      v-model="base_color"
                      class="form-control form-control-lg form-control-a"
                      id="color"
                    >
                      <option>{{currentProduct.base_color}}</option>
                      <option v-for="(colors,index) in baseColor" :key="index">{{colors.color}}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="size">Sizes</label>
                    <select
                      v-model="size"
                      class="form-control form-control-lg form-control-a"
                      id="size"
                    >
                      <option>{{currentProduct.size}}</option>
                      <option v-for="(size,index) in sizes" :key="index">{{size.size}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-group">
                    <label for="count">Quantity</label>
                    <div>
                      <input
                        min="1"
                        max="1000"
                        class="form-control form-control-lg form-control-a"
                        value="1"
                        v-model="count"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="container">
            <br />

            <div class="col-md-4 float-right">
              <div>
                <btn btnColor="btn btn-b float-right" @click.native="addCart()">Add To Cart</btn>
              </div>
              <!-- <div v-if="isUpdated()">
                <btn btnColor="btn btn-b float-right" @click.native="updateCart(currentProduct.id)">Update Your Cart</btn>
              </div>-->
              <br />
              <br />
              <br />
              <a v-b-modal.modal-1 class="float-right">
                <span style="text-decoration:underline;cursor:pointer">
                  <i class="fas fa-video"></i>MORE INFO
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <videoModal />
      <br />
      <br />
      <br />
      <br />
      <foodintro />
      <!-- <comment/> -->
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import btn from "./Btn";
import videoModal from "@/components/videoModal";
import foodintro from "@/components/order/foodintro";
import Footer from "@/components/Footer";
import api from "../services/api";

export default {
  components: {
    btn,
    foodintro,
    // comment,
    Footer,
    videoModal
  },

  data() {
    return {
      messageColor: [
        { color: "Royal Blue", value: "royal blue" },
        { color: "Teal", value: "teal" },
        { color: "Leaf Green", value: "leaf green" },
        { color: "Super Black", value: "super black" },
        { color: "Fuchsia", value: "fuchsia" },
        { color: "Sky Blue", value: "sky blue" },
        { color: "Bright White", value: "bright white" },
        { color: "Violet", value: "violet" },
        { color: "Navy Blue", value: "navy blue" },
        { color: "Orange", value: "orange" },
        { color: "Lemon Yellow", value: "lemon yellow" },
        { color: "Chocolate Brown", value: "chocolate brown" },
        { color: "Green", value: "green" },
        { color: "Black", value: "black" },
        { color: "Red", value: "red" },
        { color: "Delphinium Blue", value: "delphinium blue" },
        { color: "Yellow", value: "yellow" }
      ],
      baseColor: [
        { color: "Royal Blue", value: "royal blue" },
        { color: "Teal", value: "teal" },
        { color: "Leaf Green", value: "leaf green" },
        { color: "Super Black", value: "super black" },
        { color: "Fuchsia", value: "fuchsia" },
        { color: "Sky Blue", value: "sky blue" },
        { color: "Bright White", value: "bright white" },
        { color: "Violet", value: "violet" },
        { color: "Navy Blue", value: "navy blue" },
        { color: "Orange", value: "orange" },
        { color: "Lemon Yellow", value: "lemon yellow" },
        { color: "Chocolate Brown", value: "chocolate brown" },
        { color: "Green", value: "green" },
        { color: "Black", value: "black" },
        { color: "Red", value: "red" },
        { color: "Delphinium Blue", value: "delphinium blue" },
        { color: "Yellow", value: "yellow" }
      ],
      shapes: [
        { shape: "Round", value: "round" },
        { shape: "Square", value: "sqaure" }
      ],
      sizes: [
        { size: "4inch", value: "4inch" },
        { size: "6inch", value: "6inch" },
        { size: "8inch", value: "8inch" },
        { size: "10inch", value: "10inch" }
      ],
      errors: { shape: [], size: [], count: [] }
    };
  },

  computed: {
    ...mapGetters({
      currentProduct: "getCurrentProduct"
    }),
    ...mapGetters(["getProductsInCart"]),

    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },

    message: {
      get() {
        return this.$store.state.currentProduct.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },
    message_color: {
      get() {
        return this.$store.state.currentProduct.message_color;
      },
      set(value) {
        this.$store.commit("updateMsgcolor", value);
      }
    },
    size: {
      get() {
        return this.$store.state.currentProduct.size;
      },
      set(value) {
        this.$store.commit("updateSize", value);
      }
    },
    base_color: {
      get() {
        return this.$store.state.currentProduct.base_color;
      },
      set(value) {
        this.$store.commit("updateColor", value);
      }
    },

    shape: {
      get() {
        return this.$store.state.currentProduct.shape;
      },
      set(value) {
        this.$store.commit("updateShape", value);
      }
    }
  },
  async created() {
    console.log(this.$store.state.cart);
  },
  methods: {
    ...mapActions(["addProduct"]),
    isUpdated() {
      return this.$store.state.cart;
    },
    //THIS IS UPDATING THE CART PRODUCT FUNCTION
    updateCart: function(id) {
      console.log("Model Data: ", this.data);
      this.errors = { shape: [], size: [], count: [] };
      if (!this.shape) {
        this.errors.shape.push("shape is required");
      }
      if (!this.size) {
        this.errors.size.push("size is required");
      }
      if (this.count > 1000) {
        this.errors.shape.push(
          "You cant select more than 1000 products at a time"
        );
      }
      let user = this.$store.getters.isLoggedIn;
      if (user) {
        const currentProduct = this.$store.state.currentProduct;
        let info = {
          count: this.count,
          design: currentProduct.id,
          shape: currentProduct.shape ? currentProduct.shape : "",
          size: currentProduct.size ? currentProduct.size : "",
          base_color: currentProduct.base_color
            ? currentProduct.base_color
            : "",
          message_color: currentProduct.message_color
            ? currentProduct.message_color
            : "",
          message: currentProduct.message ? currentProduct.message : ""
        };
        console.log("Info: ", info);
        let data = JSON.stringify(info);
        console.log("Data: ", data);

        if (this.shape === "" || this.size === "") {
          return;
        } else {
          this.$store
            .dispatch("updateCart", data)
            .then(resultdata => {
              info.id = resultdata.id;
              info.name = currentProduct.name;
              info.price = currentProduct.price;
              info.design = resultdata.design;
              this.addProduct(info);
              this.$router.push("/cart");
              console.log("response from add cart", resultdata);
            })
            .catch(err => {
              if (err.response.data.shape) {
                this.errors.shape = this.errors.shape.concat(
                  err.response.data.shape
                );
              }
              if (err.response.data.size) {
                this.errors.size = this.errors.size.concat(
                  err.response.data.size
                );
              }
              if (err.response.data.count) {
                this.errors.count = this.errors.count.concat(
                  err.response.data.count
                );
              }

              console.log(err);
            });
        }
      } else {
        this.$router.push("/login");
      }
    },
    //THIS IS ADD PRODUCT TO CART FUNCTION
    addCart: function(currentProduct) {
      this.errors = { shape: [], size: [], count: [] };
      if (!this.shape) {
        this.errors.shape.push("shape is required");
      }
      if (!this.size) {
        this.errors.size.push("size is required");
      }
      let user = this.$store.getters.isLoggedIn;
      if (user) {
        const currentProduct = this.$store.state.currentProduct;
        let info = {
          count: this.count,
          design: currentProduct.id,
          shape: currentProduct.shape ? currentProduct.shape : "",
          size: currentProduct.size ? currentProduct.size : "",
          base_color: currentProduct.base_color
            ? currentProduct.base_color
            : "",
          message_color: currentProduct.message_color
            ? currentProduct.message_color
            : "",
          message: currentProduct.message ? currentProduct.message : ""
        };
        console.log("Info: ", info);
        let data = JSON.stringify(info);
        console.log("Data: ", data);

        if (this.shape === "" || this.size === "") {
          return null;
        } else {
          this.$store
            .dispatch("addCart", data)
            .then(resultdata => {
              info.id = resultdata.id;
              info.name = currentProduct.name;
              info.price = currentProduct.price;
              info.design = resultdata.design;
              this.addProduct(info);
              this.$router.push("/cart");
              window.location.reload();
              console.log("response from add cart", resultdata);
            })
            .catch(err => {
              if (err.response.data.shape) {
                this.errors.shape = this.errors.shape.concat(
                  err.response.data.shape
                );
              }
              if (err.response.data.size) {
                this.errors.size = this.errors.size.concat(
                  err.response.data.size
                );
              }
              if (err.response.data.count) {
                this.errors.count = this.errors.count.concat(
                  err.response.data.count
                );
              }

              console.log(err);
            });
        }
      } else {
        console.log("You have to log in ");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.image-box {
  width: 30%;
}
.number-input input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.number-input input[type="number"]::-webkit-inner-spin-button,
.number-input input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  margin-bottom: 3rem;
}

.number-input button {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: relative;
}

.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: "";
  height: 2px;
  transform: translate(-50%, -50%);
}

.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type="number"] {
  text-align: center;
}

.number-input.number-input {
  border: 1px solid #ced4da;
  width: 10rem;
  border-radius: 0.25rem;
}

.number-input.number-input button {
  width: 2.6rem;
  height: 0.7rem;
}

.number-input.number-input button.minus {
  padding-left: 10px;
}

.number-input.number-input button:before,
.number-input.number-input button:after {
  width: 0.7rem;
  background-color: #495057;
}

.number-input.number-input input[type="number"] {
  max-width: 4rem;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-width: 0 1px;
  font-size: 1rem;
  height: 2rem;
  color: #495057;
}

@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    .number-input.def-number-input.safari_only button:before,
    .number-input.def-number-input.safari_only button:after {
      margin-top: -0.3rem;
    }
  }
}
</style>
