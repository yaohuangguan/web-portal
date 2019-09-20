<template>
  <div class="container">
    <div>
      <br />
      <br />
      <br />
      <br />
    </div>
    <div class="row">
      <div>
        <h3>Your Order</h3>
        <div v-if="loading">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else>
          <div v-if="hasOrder()">
        <div class="row" v-for="(product,index) in products" :key="index">
          
                <div  v-for="(data,index) in order" :key="index" class="col">
    
                  <div class="card-body">
                     <p>Your Order id: {{data.id}}</p>
                    <p>Your Name:{{data.full_name}}</p>
                    <p>Your Order Price: {{data.price}}$</p>
                    <p>Delivery Address:{{data.delivery_address}}</p>
                    <p>Note:{{data.special_instruction}}</p>
                    <h4>{{data.status}}</h4>
                  </div>
                </div>
        </div>
        </div>
          <div v-else>NO ORDER FOUND</div>
          <p v-if="error">{{error}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "userdashboard",
  data() {
    return {
      order: "",
      loading: false,
      error: "",
      user: "",
      check: false,
      products:''
    };
  },
  methods: {
    hasOrder() {
      return this.order.length > 0;
    }
  },
  async created() {
    this.loading = true;
    const cartid = this.$store.state.cart;
    try {
      const res = await api.get("/order/past/");
      this.loading = false;
      this.order = res.data;
      console.log(res.data);
    } catch (err) {
      this.loading = false;
      this.error = err;
    }
    try {
      const res = await api.get('/order/viewcart/'+cartid+'/');
      this.loading =false;
      this.products = res.data;
      console.log(res.data);
      
    } catch (error) {
      this.loading = false;
      this.error = error;
    }
  }
};
</script>

<style scoped>
</style>
