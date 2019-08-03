<template>
  <div class="container">
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 class="font-weight-bold">Welcome!</h1>
    </div>
    <div class="row">
      <div>
        <h3>Your Order</h3>
        <div v-if="loading">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ul v-else>
          <li v-for="(data,index) in order" :key="index">{{data}}</li>
        </ul>
        <p v-if="error">{{error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      order: "",
      loading: false,
      error: "",
      user:''
    };
  },
  mounted() {
    this.loading = true;
    api
      .get("/order/past/")
      .then(response => {
        this.loading = false;
        this.order = response.data;
        console.log(response.data)
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
      });
    
  }
};
</script>

<style scoped>
</style>
