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
            <img :src="currentProduct.image" style="grid-column:1/2;width:80%" alt />
            <br />
          </div>

          <div class="col-md-8">
            <form class="form-a" @submit.prevent="addCart">
              <div class="row">
                <div class="col-md-12 mb-2 form-group">
                  <h1 class="title-single">{{currentProduct.name}}</h1>
                  <span class="color-text-a">{{currentProduct.tag}}</span>
                  <h4 class="product-price">
                    Price :
                    <b>$ {{ currentProduct.price }}</b>
                  </h4>
                </div>
                <div v-if="errors.shape.length > 0 || errors.size.length > 0">
                  <ul class="text-danger">
                    <li v-for="(error,index) in errors.shape" :key="index">Shape:{{ error }}</li>
                    <li v-for="(error,index) in errors.size" :key="index">Size:{{ error }}</li>
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
                      <option
                        v-for="(colors,index) in messageColor"
                        :key="index"
                        :value="colors.value"
                      >{{colors.color}}</option>
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
                      <option
                        v-for="(shape,index) in shapes"
                        :key="index"
                        :value="shape.value"
                      >{{shape.shape}}</option>
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
                      <option
                        v-for="(colors,index) in baseColor"
                        :key="index"
                        :value="colors.value"
                      >{{colors.color}}</option>
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
                      <option
                        v-for="(size,index) in sizes"
                        :key="index"
                        :value="size.value"
                      >{{size.size}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="container">
            <br />

            <div class="col-md-4 float-right">
              <btn btnColor="btn btn-b float-right" @click.native="addCart()">Add To Cart</btn>
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
      message_color: "sky blue",
      base_color: "bright white",
      shape: "round",
      size: "6inch",
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
      errors: { shape: [], size: [] }
    };
  },

  mounted() {
   
    this.$store.commit("updateShape", this.shape);
    this.$store.commit("updateSize", this.size);
    this.$store.commit("updateColor", this.base_color);
    this.$store.commit("updateMsgcolor", this.message_color);
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
        this.$store.commit("updateMessage", this.message);
      }
    },
    message_color: {
      get() {
        return this.$store.state.currentProduct.message_color;
      },
      set(value) {
        this.$store.commit("updateMsgcolor", this.message_color);
      }
    },
    size: {
      get() {
        return this.$store.state.currentProduct.size;
      },
      set(value) {
        this.$store.commit("updateSize", this.size);
      }
    },
    base_color: {
      get() {
        return this.$store.state.currentProduct.base_color;
      },
      set(value) {
        this.$store.commit("updateColor", this.base_color);
      }
    },

    shape: {
      get() {
        return this.$store.state.currentProduct.shape;
      },
      set(value) {
        this.$store.commit("updateShape", this.shape);
      }
    }
  },

  methods: {
    ...mapActions(["addProduct"]),

    addCart: function(currentProduct) {
      this.errors = { shape: [], size: [] };
      if (!this.shape) {
        this.errors.password.push("shape is required");
      }
      if (!this.size) {
        this.errors.password.push("size is required");
      }
      let user = this.$store.getters.isLoggedIn;
      if (user) {
        const currentProduct = this.$store.state.currentProduct;
        let info = {
          count: 1,
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

        let data = JSON.stringify(info);
        console.log(this.shape, this.size);
        if (this.shape === "" || this.size === "") {
          return null;
        } else {
         
          this.$store
            .dispatch("addCart", data)
            .then((resultdata) => {
              info.id = resultdata.id
              info.name = currentProduct.name
              info.price = currentProduct.price
              info.design = resultdata.design
               this.addProduct(info);
              this.$router.push("/cart");
              console.log("response from add cart", resultdata);
            })
            .catch(err => {
              if (err.response.data.shape) {
                this.errors.shape = this.errors.shape.concat(
                  err.response.data.shape
                );
                this.errors.size = this.errors.size.concat(
                  err.response.data.size
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
</style>
