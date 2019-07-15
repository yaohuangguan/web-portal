<template>
    <div class="intro intro-carousel">
    <div id="carousel" class="owl-carousel owl-theme">
      <!-- <div class="carousel-item-a intro-item bg-image" :style="{'background-image': 'url(' + require('@/assets/img/slide-4.mp4') + ')'}"> -->
      <div class="carousel-item-a intro-item bg-image" :style="{'background-image': 'url(' + require('@/assets/img/slide-2.jpg') + ')'}">
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                   
                    <h1 class="intro-title mb-4 animated lightSpeedIn">
                      NOW  GET
                      <br> YOUR FRESH<span class="color-b"> COOKIES</span></h1>
                    <div>
                      
                        <div class="row">
                            <a href="#cookie-section" style="margin-top:40px;margin-right:10px"><span class="price-a"><i class="fas fa-caret-down"></i>menu</span></a>
                 
                             <!-- <router-link to="/cookie" style="margin-top:40px;margin-right:10px"><span class="price-a">Customize</span></router-link> -->
                           
                        </div>
                     
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"carousel",
    components:{
    },
    data(){
      
        return {
      
           carouselJSON:[ 
              { image:require("@/assets/img/slide-1.jpg"),
                title:'NOW',
                
              },
               
               ]

    }

    }
}
</script>

<style scoped>

</style>
