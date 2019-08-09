<template>
  <b-modal header-bg-variant="warning" id="modal-tall" title="Shopping Bag" hide-footer>
    <div class="text-center" v-if="!hasProduct()">
      <div class="col-md">
        <img :src="bag" width="100px" height="100px" alt="SHOPPING CART MADE BY SMASHICON" />
      </div>
      <span style="font-size:25px;color:orange">Your Cart Is Empty.</span>
      <br />
      <span class="text-muted">It Looks Like You Havent Made Your Choice Yet...</span>
      <br />
      <br />
      <br />

      <br />
    </div>

    <a @click="emptyCart" v-if="hasProduct()" class="empty">
      <span>
        <b>Empty Cart</b>
        <i class="far fa-trash-alt"></i>
      </span>
    </a>

    <div class="text-center" v-if="loading">
      <div class="spinner-border text-success" style="width:70px;height:70px" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div v-for="(cart, index) in carts" :key="index" class="box-item">
      <img :src="cart.image" alt class="item-thumb" />
      <h3 class="item-name">{{ cart.design }}</h3>

      <span class="item-amount" style="color:#444">Amount: {{cart.count}}</span>
      <span class="item-price">$ {{ cart.price }}</span>
    </div>
    <br />
    <br />
    <br />
    <div class="cart-info" v-if="hasProduct()">
      <p>
        <b>Total: $ {{cartdata.subtotal }}</b>
        <br />
      </p>

      <router-link to="/cart">
        <btn class="btn btn-c" @click="hideCart()">View cart</btn>
      </router-link>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import btn from "./Btn";
import api from "../services/api";

export default {
  components: {
    btn
  },

  data() {
    return {
      bag: require("@/assets/img/bag.png"),
      carts: "",
      loading: false,
      error: [],
      cart: localStorage.getItem("cart"),
      cartdata: ""
    };
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
        console.log("RESPONSE FROM VIEW CART", res.data);
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
    ...mapActions(["addProduct", "removeProduct"]),
    hasProduct() {
      return this.carts.length > 0;
    },
    showCart() {
      this.$store.dispatch("showCart");
    },
    hideCart() {
      console.log("hide cart working ");
      this.$store.dispatch("hideCart");
    },

    emptyCart: async function(product) {
      this.loading = true;
      this.$store.commit("removeAll", product);
      const cartid = this.$store.state.cart;

      try {
        const res = await api.delete("/order/cart/delete/" + cartid + "/");
        this.loading = false;
        console.log(res);
      } catch (err) {
        this.loading = false;

        console.log(err);
      }
      window.location.reload();
    },

    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    ...mapGetters(["getProductsInCart"]),
    user: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style scoped>
.box {
  width: 600px;
  height: auto;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1em 0.5em;
  position: absolute;
  z-index: 1;
}

.box:after {
  content: "";
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  background: inherit;
  position: absolute;
  top: -15px;
  right: 15px;
}

.box-item {
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 0.5em;
  margin-top: 0.3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-thumb {
  max-width: 70%;
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
}

.item-name {
  grid-column: 2/4;
  grid-row: 1/2;
  font-weight: normal;
}

.item-amount {
  grid-column: 2/3;
  grid-row: 2/4;
  color: #ddd;
}

.cart-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-remove {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0;
  background-color: red;
  color: #fff;
  cursor: pointer;
}
</style>
