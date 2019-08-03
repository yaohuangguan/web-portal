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
        <div class="col-md-6 content-center card-body">
          <div class="title-box-d">
            <h3 class="title-d font-weight-bold">CREATE YOUR ACCOUNT</h3>
          </div>

          <div>
            <form class="form-a" @submit.prevent="register" novalidate="true">
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
                      class="form-control form-control-lg form-control-a"
                      id="inputName"
                      type="email"
                      placeholder="Name"
                      name="email"
                      v-model="email"
                    />
                  </div>
                  <div v-if="errors.length">{{error}}</div>
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
                        Already member?
                        <router-link to="/login">
                          <span style="color:blue">Log in</span>
                        </router-link>here
                      </li>
                    </ul>
                  </div>
                  <div class="float-right">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-a">Register</button>
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
      errors: []
    };
  },
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
  methods: {
    register: function() {
      this.errors = [];
      if (this.password != this.passwordConf) {
        this.errors.push("Password Need match");
      }
      if (this.password.length < 6) {
        this.errors.push("Password needs at least 6 characters");
      }
      if (!this.password) {
        this.errors.push("Password is needed");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      let data = {
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      };

      this.$store
        .dispatch("register", data)
        .then(() => {
          console.log("ahhaahahahahhahahaha");
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
</style>