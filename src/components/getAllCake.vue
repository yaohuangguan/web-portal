<template>
  <div>
    <div class="container">
     <br><br><br><br>
   
    <mdb-form-inline class="md-form active-cyan-2 ">
      <mdb-input type="text" placeholder="Search" aria-label="Search"/>
      <mdbIcon icon="search" />
    </mdb-form-inline>
  </div>
  
    <allList :products="getBirthdayCake"/>
   
  
   
    <allList :products="getChrismasCake"/>
   
  
   
      <allList :products="getCityCake"/>
    
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import allList from '@/components/allList';
 import { mdbIcon, mdbFormInline, mdbInput } from 'mdbvue';
export default {
  components: {
    allList,
    mdbIcon,
      mdbFormInline,
      mdbInput
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



