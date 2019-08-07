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
          <h3 class="font-weight-bold title-d color-b">Reset Your Password</h3>

          <ol>
            <h5>Follw these steps to reset your password:</h5>
            <li>Enter your email you used for Cookiecannon.com</li>
            <li>Please check your email for recovery details, including spam/junk folders.</li>
            <li>Follow instructions and you will be all set</li>
          </ol>

          <div v-if="errors.email.length > 0">
            <ul class="text-danger">
              <li v-for="(error,index) in errors.email" :key="index">{{ error }}</li>
            </ul>
          </div>
          <div>
            <form class="form-a" @submit.prevent="check" novalidate="true">
              <div class="row">
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
      loading: false,
      errors: { email: [] }
    };
  },
  components: {
    Footer
  },
  methods: {
    check: function() {
      this.loading = true;
      this.errors = { email: [] };

      if (!this.username) {
        this.errors.email.push("Please enter the email you used for sign up");
      }
      let username = JSON.stringify({ email: this.username });

      this.$store
        .dispatch("pswReset", username)
        .then(() => {
          {
            this.loading = false;
            this.$router.push("/login");
          }
        })
        .catch(err => {
          this.loading = false;
          console.log(err.response.data.email);
          if (err.response.data.email) {
            this.errors.email = this.errors.email.concat(
              err.response.data.email
            );
          }
          console.log(err);
        });
    }
  }
};
</script>


<style scoped>
</style>
