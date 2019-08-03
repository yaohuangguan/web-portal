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
            <h3 class="font-weight-bold title-d">Reset Your Password</h3>
            <ol>
              <h5>Follw these steps to reset your password:</h5>
              <li>Enter your email you used for Cookiecannon.com</li>
              <li>Please check your email for recovery details, including spam/junk folders.</li>
              <li>Follow instructions and you will be all set</li>
            </ol>
          </div>
          <div>
            <form class="form-a" @submit.prevent="check" novalidate="true">
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
                      type="email"
                      v-model="username"
                      class="form-control form-control-lg form-control-a"
                      placeholder="Your Email"
                      required
                      autofocus
                    />
                  </div>
                </div>
                <br />

                <div class="float-right">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-a">Get New Password</button>
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
  name: "resetpsw",
  data() {
    return {
      username: "",

      errors: []
    };
  },
  components: {
    Footer
  },
  methods: {
    check: function() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("Please Enter Email");
      }

      let username = this.username;

      this.$store
        .dispatch("pswReset", username)
        .then(() => {
          {
            this.$router.push("/login");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
</style>
