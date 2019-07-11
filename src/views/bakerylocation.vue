<template>
   <div class="container">
   <br><br><br><br><br>
  <div>
    <div class="card-body">

      <!--Grid row-->
      <div class="row">
  
        <!--Grid column-->
        <div class="col-lg-8 mb-4">
          <router-link to="/pickup">
            <p  class="text-muted">  <i class="fas fa-angle-left left"></i>  Go back</p>
          </router-link>
           <div class="title-single-box">
              <h2 class="title-single" style="font-size:20px">Bakery Location Information</h2>
            
            </div>
    <div >
       <div class="tab-pane fade in show active" id="tabCheckoutPayment123" role="tabpanel">
 

         
             
                  <h2 class="title-single" style="font-size:20px">1.Kroger Bakery</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12226.117850982067!2d-82.85306880237194!3d39.99661948262932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838640b4e96f619%3A0x5391caa420c604b4!2sKroger+Bakery!5e0!3m2!1sen!2sus!4v1561754870277!5m2!1sen!2sus" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
              
              <br>
              
                  <h2 class="title-single" style="font-size:20px">1.Kroger Bakery</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12226.117850982067!2d-82.85306880237194!3d39.99661948262932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838640b4e96f619%3A0x5391caa420c604b4!2sKroger+Bakery!5e0!3m2!1sen!2sus!4v1561754870277!5m2!1sen!2sus" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
             
              <br>
            
                  <h2 class="title-single" style="font-size:20px">1.Kroger Bakery</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12226.117850982067!2d-82.85306880237194!3d39.99661948262932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838640b4e96f619%3A0x5391caa420c604b4!2sKroger+Bakery!5e0!3m2!1sen!2sus!4v1561754870277!5m2!1sen!2sus" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
              
  
                      
        

              </div>
          
        </div>
            <!-- Pills panels -->
    
    
          </div>
    
    
        </div>
      <!--Grid row-->

    </div>
  </div>
</div>
   
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:'checkout',
    component:{
       
    },
 computed: {
    ...mapGetters(["getProductsInCart"])
  },
 methods: {
    ...mapActions(["removeProduct", "currentProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index) {
      this.removeProduct(index);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    }
  },

    
    data(){
        return{
                data:[
                    
                ]
        }
    }
}
</script>

<style scoped>

</style>
