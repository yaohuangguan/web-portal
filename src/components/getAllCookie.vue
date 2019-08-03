<template>
  <div>
    <div class="container">
     <br><br><br><br>
    
   
  </div>
  
    <allList :products="getBirthday"/>
    
  
    <allList :products="getChrismas"/>
  
  
      <allList :products="getCity"/>
    
    
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
    'getCity',
      'getBirthday',
      'getChrismas'
    ]),
  },
};
</script>



