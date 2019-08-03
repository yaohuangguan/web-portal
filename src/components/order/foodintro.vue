<template>
    <div class="container">
 <div class="col-md-10 col-lg-10 offset-lg-1">
    <div class="title-box-d">
      <h3 class="font-weight-bold color-g">Food Overview</h3>
    </div>
<div class="post-content color-text-a">
    <p class="post-intro">
     {{currentProduct.nutrition_facts}}
    </p>
  
  </div>
    </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    name:'foodintro',
    computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },
}
</script>

<style scoped>

</style>
