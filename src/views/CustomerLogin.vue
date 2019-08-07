<template>
  <div>
    <div class="container-fluid">
      <br />
      <br />
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
      <div v-else class="row d-flex justify-content-center">
        <div class="col-md-6 content-center">
          <div class="title-box-d">
            <h3 class="font-weight-bold title-d">LOG IN TO YOUR ACCOUNT</h3>
          </div>
          <div>
            <form class="form-a" @submit.prevent="login" novalidate="true">
              <div class="row">
                <div v-if="errors.username.length > 0">
                  <li
                    class="text-danger"
                    v-for="(error,index) in errors.username"
                    :key="index"
                  >Username:{{ error }}</li>
                </div>

                <div v-if="errors.password.length > 0">
                  <li
                    class="text-danger"
                    v-for="(error,index) in errors.password"
                    :key="index"
                  >Password:{{ error }}</li>
                </div>
                <div v-if="errors.detail.length > 0">
                  <li
                    class="text-danger"
                    v-for="(error,index) in errors.detail"
                    :key="index"
                  >detail:{{ error }}</li>
                </div>
                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="inputName">Email</label>
                    <input
                      type="text"
                      v-model="username"
                      class="form-control form-control-lg form-control-a"
                      id="inputName"
                      placeholder="Your Email"
                      required
                      autofocus
                    />
                  </div>
                </div>
                <br />
                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="inputEmail1">Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control form-control-lg form-control-a"
                      id="inputPassword"
                      placeholder="Your Password"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-8 mb-3 block">
                  <div class="float-left">
                    <ul class="list-unstyled">
                      <li class="item-list-a">
                        <router-link to="/forget-password">Forgot Your Password?</router-link>
                      </li>
                      <br />
                      <li class="item-list-a">
                       New Cusomter? <router-link to="/register"><span class="text-primary">SIGN UP NOW</span></router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="float-right">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-a">LOGIN</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer";

export default {
  name: "CustomerLogin",
  data() {
    return {
      username: "",
      password: "",
      loading:false,
      errors: { username: [], password: [], detail: [] }
    };
  },
  components: {
    Footer
  },
  methods: {
    login: function() {
      this.loading= true;
      this.errors = { username: [], password: [], detail: [] };
      // if (!this.username) {
      //   this.errors.push("Please Enter Email");
      // }
      // if (!this.password) {
      //   this.errors.push("Please Enter Password");
      // }

      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => {
          {
            this.loading = false;
            console.log(this.$store.state.cartCount);
            if (this.$store.state.cartCount == 0) {
              this.$router.go(-1)
            } else {
              this.$router.push("/product-details");
            }
          }
        })
        .catch(err => {
          this.loading = false;
          if (err.response && err.response.data.username) {
            this.errors.username = this.errors.username.concat(
              err.response.data.username
            );
          }
          if (err.response && err.response.data.password) {
            this.errors.password = this.errors.password.concat(
              err.response.data.password
            );
          }
          if (err.response && err.response.data.detail) {
            console.log(err.response.data.detail);

            this.errors.detail = this.errors.detail.concat(
              err.response.data.detail
            );
          }
        });
    }
  }
};
</script>


<style scoped>
</style>
