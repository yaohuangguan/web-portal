<template>
  <div>
    <div class="container">
 <section class="intro-single">
    <div class="container">
      <div class="row">
       
       
      </div>
    </div>
  </section>
      <div class="container">
        <div class="row">
        
           <div class="col-md-4 mb-2">
             
                <img :src="currentProduct.image" style="grid-column:1/2;width:80%" alt=""/>
                <br>
           </div>
              
        
         <div class="col-md-8">
           
            <form class="form-a">
                            <div class="row" >
                              <div class="col-md-12 mb-2 form-group">
              <h1 class="title-single">{{currentProduct.name}}</h1>
              <span class="color-text-a">{{currentProduct.tag}}</span>
               <h4 class="product-price">Price :<b> $ {{ currentProduct.price }}, 00</b></h4>
           
            </div>
                             
                              <div class="col-md-12 mb-2">
                                <div class="form-group">
                                 <div class="md-form dark-grey">
                                  <label for="form1">You Say it We Print it</label>
  
                                  <input v-model="message" type="text" id="form1" class="form-control" placeholder="Happy Birthday, John!">
                                </div>
                                </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                <div class="form-group">
                                  <label for="flavors">Flavors</label>
                                  <select v-model="flavor" class="form-control form-control-lg form-control-a" id="flavors">
                                    <option disabled value="">Select Flavor</option>
                                    <option selected>Chocolate</option>
                                    <option>Strawberry</option>
                                    <option>Banana</option>
                                    <option>Lime</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                <div class="form-group">
                                  <label for="shape">Shape</label>
                                  <select v-model="shape" class="form-control form-control-lg form-control-a" id="shape">
                                    <option disabled value="">Select Shape</option>
                                    <option selected>Square</option>
                                    <option>Round</option>
                                   
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                <div class="form-group">
                                  <label for="flavors">Base Color</label>
                                  <select v-model="color" class="form-control form-control-lg form-control-a" id="color">
                                    <option disabled value="">Select Color</option>
                                    <option selected>Red</option>
                                    <option>Orange</option>
                                    <option>Sky Blue</option>
                                    <option>Green</option>
                                  </select>
                                </div>
                              </div>
            <div class="col-md-6 mb-2">
                                <div class="form-group">
                                  <label for="size">Sizes</label>
                                  <select v-model="size" class="form-control form-control-lg form-control-a" id="size">
                                    <option disabled value="">Select Size</option>
                                    <option selected>10inches</option>
                                    <option>8inches</option>
                                    <option>6inches</option>
                                    <option>4inches</option>
                                  </select>
                                </div>
                              </div>
                           
            
             </div>
           
              
            </form>
         </div>
          <div class="container">
            <br>
              
                <div class="col-md-4 float-right">
             
              
              <btn btnColor="btn btn-b float-right" 
              @click.native="addProductToCart(currentProduct)">
                Add To Cart
              </btn>
             <br><br><br>
              <a v-b-modal.modal-1 class="float-right"><span style="text-decoration:underline;cursor:pointer"><i class="fas fa-video"></i>MORE INFO</span></a>
            </div>
             
          </div>
          
        
        </div>
        
      </div>
       <videoModal/>
       <br><br><br><br>
       <foodintro/>
       <comment/>
      
    </div>
     <Footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import videoModal from '@/components/videoModal'
import foodintro from '@/components/order/foodintro'
import comment from '@/components/order/comment'
import Footer from '@/components/Footer'
export default {
  components: {
    btn,
    
    foodintro,
    comment,
    Footer,
    videoModal
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    
    }),
  message: {
    get () {
      return this.$store.state.currentProduct.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  },
  flavor:{
       get () {
      return this.$store.state.currentProduct.flavor
    },
    set (value) {
      this.$store.commit('updateFlavor', value)
    }
  },
  size:{
       get () {
      return this.$store.state.currentProduct.size
    },
    set (value) {
      this.$store.commit('updateSize', value)
    },
  },
    color:{
       get () {
      return this.$store.state.currentProduct.color
    },
    set (value) {
      this.$store.commit('updateColor', value)
    },},
    
    shape:{
       get () {
      return this.$store.state.currentProduct.shape
    },
    set (value) {
      this.$store.commit('updateShape', value)
    }
  },


    
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    
    
  },

};
</script>

<style scoped>
 .image-box{
   width: 30%;
 }
</style>
