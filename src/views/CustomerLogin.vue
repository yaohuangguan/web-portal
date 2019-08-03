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
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 content-center">
          <div class="title-box-d">
            <h3 class="font-weight-bold title-d">LOG IN TO YOUR ACCOUNT</h3>
          </div>
          <div>
            <form class="form-a" @submit.prevent="login" novalidate="true">
              <div class="row">
                <div v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul style="color:red">
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
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
                        <router-link to="/register" style="color:blue">SIGN UP NOW</router-link>
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
      errors: []
    };
  },
  components: {
    Footer
  },
  methods: {
    login: function() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("Please Enter Email");
      }
      if (!this.password) {
        this.errors.push("Please Enter Password");
      }

      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => {
          {
            console.log(this.$store.state.cartCount);
            if (this.$store.state.cartCount == 0) {
              this.$router.push("/");
            } else {
              this.$router.push("/cart");
            }
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
</style>
