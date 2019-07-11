<template>
    <section class="section-news section-t8" id="cookie-section">
  
  <div class="container">

          <br> <br> 
   
<div>
 
     <div class="container">
       
        <div class="title-single-box">

              <h1 class="title-single" style="color:#444; font-size:30px" >Goat's Favorite</h1>

            </div>

        <CookieList/>
     
    
     </div>
    
   <br><br><br><br>
     <div class="container">
       
        <div class="title-single-box">
              <h1 class="title-single" style="color:#444;font-size:30px">Cake</h1>
             
            </div>
        
      <CakeList/>
     </div>

  
</div>
    
</div>
 


  </section>
</template>

<script>


import CookieList from '@/components/CookieList'
import CakeList from '@/components/CakeList'
import { mapGetters } from 'vuex';

export default {
    name:"Main-cookie",
    components:{
     
     CakeList,
      CookieList
    },
     computed: {
    ...mapGetters([
      'getCookie',
      'getCake',
    ]),
  },
  
  data() {
    return {
    
      
       
   }
   
}}
</script>

 <style scoped>
 .link1{
   text-decoration: none
 }
 .link1:hover{
   text-decoration: none;
 }
 </style>
 