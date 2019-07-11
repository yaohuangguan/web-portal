<template>
  
 <header>
   
   <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
    
    <router-link class="navbar-brand text-brand" to="/">CookieGoat</router-link>
    
    
    <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
    
    
    </div>
    
    </div>
   
    <ul class="navbar-nav">
  
    
    <li class="nav-item-login">
    <router-link  to="/login" class="linkitem">Customer Login</router-link>
    </li>
    <li class="nav-item-login">
    <router-link to="/login" class="linkitem">Vendor Login</router-link>

    </li>
    
    <li>
      
    </li>
    </ul>
     
    
    </nav>
 </header>
</template>

<script>


export default {
  name: 'Navbar',
  components:{
    
  },
  data(){
    return{
    
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linkitem:hover{
  text-decoration: none;
}
</style>
