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
          
            <h3 class="title-d font-weight-bold color-b">Become A Bakery</h3>
            <p>Please Send us your interest and we will contact you shortly!</p>
            <p>Thank you for your patience!</p>
          
          <div v-if="errors.length">
            <ul class="text-danger list-unstyled">
              <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <div>
            <form class="form-a" @submit.prevent="inquire" novalidate="true">
              <div class="row">
                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      type="email"
                      placeholder="Please enter your email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="name">Full Name</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      placeholder="Your Full Name"
                      type="text"
                      v-model="full_name"
                    />
                  </div>
                </div>

                <div class="col-md-8 mb-3 block">
                  <div class="form-group">
                    <label for="location">Location</label>
                    <input
                      class="form-control form-control-lg form-control-a"
                      placeholder="Your Location"
                      type="text"
                      v-model="location"
                    />
                  </div>
                </div>

                <div class="col-md-8 mb-3 block">
                  <div class="float-left">
                    <ul class="list-unstyled">
                      <li class="item-list-a">
                        Already Bakery member?
                        <router-link to="/vendorlogin">
                          <span style="color:blue">Log in</span>
                        </router-link>here
                      </li>
                    </ul>
                  </div>
                  <div class="float-right">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-a">Send</button>
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
export default {
  data() {
    return {
      email: "",

      full_name: "",
      location: "",
      errors: []
    };
  },
  components: {
    Footer
  },
  methods: {
    inquire: function() {
      this.errors = [];
      if (!this.location) {
        this.errors.push("Location is needed");
      }
      if (!this.full_name) {
        this.errors.push("Please enter your name");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Please enter valid email");
      }

      let info = {
        email: this.email,
        full_name: this.full_name,
        location: this.location
      };

      this.$store.dispatch("inquire", info).then(() => {
        this.$router.push("/thanks");
      });
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
 