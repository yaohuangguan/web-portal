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
        <div class="col-md-6 content-center card-body">
          <div class="title-box-d">
            <h3 class="title-d font-weight-bold">CREATE YOUR ACCOUNT</h3>
          </div>

          <div>
            <form class="form-a" @submit.prevent="register" novalidate="true">
              <div class="row">
                <div v-if="errors.email.length > 0 || errors.password.length > 0">
                  <ul class="text-danger">
                    <li v-for="(error,index) in errors.email" :key="index">{{ error }}</li>
                    <li v-for="(error,index) in errors.password" :key="index">{{ error }}</li>
                  </ul>
                </div>
                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="inputName">Email</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      id="inputName"
                      type="email"
                      placeholder="Name"
                      name="email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="col-md-8 mb-3 block">
                  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label for="inputName">Password</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      id="inputPassword"
                      placeholder="Password"
                      type="password"
                      v-model.trim="$v.password.$model"
                      name="password"
                    />

                    <div
                      class="text-danger"
                      v-if="!$v.password.minLength"
                    >Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
                  </div>
                </div>

                <div class="col-md-8 mb-3 block">
                  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label for="inputName">Confirm Your Password</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      id="inputConfirmPassword"
                      placeholder="Confirm password"
                      type="password"
                      v-model.trim="$v.passwordConf.$model"
                    />
                    <div
                      class="text-danger"
                      v-if="!$v.passwordConf.sameAsPassword"
                    >Passwords must be identical.</div>
                  </div>
                </div>

                <div class="col-md-8 mb-3 block">
                  <div class="float-left">
                    <ul class="list-unstyled">
                      <li class="item-list-a">
                        Have an account?
                        <router-link to="/login">
                          <span class="text-primary">Log in</span>
                        </router-link> here
                      </li>
                    </ul>
                  </div>
                  <div class="float-right">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-a" :disabled="checkError">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConf: "",
      is_admin: null,
      loading:false,
      errors: { email: [], password: [] },
      checkError: false
    };
  },
  computed: {},
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    passwordConf: {
      sameAsPassword: sameAs("password")
    }
  },
  components: {
    Footer
  },
  mounted() {
    if (this.passwordConf === "") {
      this.checkError = false;
    } else if (this.passwordConf !== this.password) {
      this.checkError = true;
      this.errors.password.push("Password Need match");
    } else if (this.password === this.passwordConf) {
      this.checkError = false;
    }
  },
  methods: {
    register: function() {
      this.loading = true;
      this.errors = { email: [], password: [] };

      if (this.passwordConf !== this.password) {
        this.errors.password.push('Password not matched')
      }

     
      if (this.password.length < 6) {
        this.errors.password.push("Password needs at least 6 characters");
      }
      if (!this.password) {
        this.errors.password.push("Password is needed");
      }
      // if (!this.email) {
      //   this.errors.email.push("Email required.");
      // } else if (!this.validEmail(this.email)) {
      //   this.errors.email.push("Valid email required.");
      // }

      let data = {
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      };

      this.$store
        .dispatch("register", data)
        .then(() => {
          this.loading = false;
          console.log("register");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log("Error: ", this.errors);
          this.loading = false;
          if (err.response.data.email) {
            this.errors.email = this.errors.email.concat(
              err.response.data.email
            );
          }
          console.log("register error ", err.response.data);
        });
    }
    // validEmail: function(email) {
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }
  }
  }
</script>

<style scoped>
</style>