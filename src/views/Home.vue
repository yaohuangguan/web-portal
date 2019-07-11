<template>

<div>

  <carousel/>
   <Maincookie/>

  <br><br>
 
  <Footer/>
</div>
</template>

<script>

// @ is an alias to /src


import carousel from '@/components/homepage/carousel'
import Maincookie from '@/components/homepage/Maincookie'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
   
    carousel,
    Maincookie,
    Footer,
 
   
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700');
body {
  font-family: 'Poppins', sans-serif;
  color: #555555;
}
</style>
