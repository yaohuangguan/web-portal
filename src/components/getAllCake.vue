<template>
  <div>
    <div class="container">
     <br><br><br><br>
   
   
  </div>
  
    <allList :products="getBirthdayCake"/>
   
  
   
    <allList :products="getChrismasCake"/>
   
  
   
      <allList :products="getCityCake"/>
    
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import allList from '@/components/allList';

export default {
  components: {
    allList,
   
  },
  computed: {
    ...mapGetters([
      'getCityCake',
      'getBirthdayCake',
      'getChrismasCake',
    ]),
  },
};
</script>



