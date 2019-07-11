<template>
 
    <div>
      
   <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Customize Your Cookies</h1>
            <span class="color-text-a">sub title</span>
         
          </div>
        </div>
       
      </div>
    </div>
  </section>
   <section class="agent-single"  v-for="(obj, key) in mainJSON" :key="key">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-md-6">
              <div class="agent-avatar-box">
                <img :src="obj.image" alt="" class="agent-avatar img-fluid">
              </div>
            </div>
            <div class="col-md-5 section-md-t3">
              <div class="agent-info-box">
                <div class="agent-title">
                  <div class="title-box-d">
                    <h3 class="title-d">{{obj.title}}
                      <br> {{obj.caption}}</h3>
                  </div>
                </div>
                <div class="agent-content mb-3">
                  <p class="content-d color-text-a">
                   here is information
                  </p>
                  <div class="info-agents color-a">
                      <form class="form-a">
                          <div class="row">
                            <div class="col-md-12 mb-2">
                              <div class="form-group">
                                <label for="Type">Your Message</label>
                             <mdb-input type="email" placeholder="e.g. Happy Birthday John!" />

                              </div>
                            </div>
                            
                           
                            <div class="col-md-6 mb-2">
                              <div class="form-group">
                                <label for="bedrooms">Flavors</label>
                                <select class="form-control form-control-lg form-control-a" id="bedrooms">
                                  <option>Chocolate</option>
                                  <option>Strawberry</option>
                                  <option>Banana</option>
                                  <option>Lime</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6 mb-2">
                              <div class="form-group">
                                <label for="garages">Quantity</label>
                                <mdb-numeric-input :emptyValue="1"/>
                              </div>
                            </div>
                            <div class="col-md-6 mb-2">
                              <div class="form-group">
                                <label for="bathrooms">Sizes</label>
                                <select class="form-control form-control-lg form-control-a" id="bathrooms">
                                  <option>10inches</option>
                                  <option>8inches</option>
                                  <option>6inches</option>
                                  <option>4inches</option>
                                </select>
                              </div>
                            </div>
                            
                            <div class="col-md-12">
                              <button type="submit" class="btn btn-b">Add To Cart</button>
                            </div>
                          </div>
                        </form>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

 
</template>


<script>
import { mdbNumericInput, mdbInput } from 'mdbvue';
export default {
    name:'customize',
    components: {
      mdbNumericInput,
      mdbInput
    },
    data(){
        return{
           value: '',
            mainJSON:[
                {
                    image: require("@/assets/img/cookie1.jpg"),
                    caption:'cookies',
                    title:'Cookies',
                    price:'1000$',
                   
                }
            ]
        }
    },
  
  
}
</script>

<style scoped>

</style>
