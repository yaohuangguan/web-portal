<template>

    <header class="header" @scroll="handlescroll"
    >
      <nav class="nav">
        
        <ul class="nav-links">
         <li class="linklogo">
            <router-link to="/"><span class="span2"><span style="color:#eb782e"><i class="fas fa-cookie-bite"></i>COOKIE</span><span style="color:#444">GOAT</span></span></router-link>
          </li>
         
        
        </ul>
       </nav>
      <slot></slot>
     
    </header>

</template>

<script>

	
export default {
  data(){
    return {
     
    }},
    
  methods:{
    handlescroll() {
       let header = document.querySelector(".header");

       if (window.scrollY > 100 && !header.className.includes('soild')) {
        header.classList.add('soild'); 
        } else if (window.scrollY < 100) {
          header.classList.remove('soild');
        }


      }
    
      // if(this.limitposition > window.scrollY) {
      //   this.scrolled = false;
      // } else {
      //   this.scrolled = true;
      // }
    },

    created(){
      window.addEventListener("scroll", this.handlescroll);
    },
    destroyed(){
      window.removeEventListener("scroll", this.handlescroll);
    }

  }

</script>

<style>
  .header {
    width: 100%;
    height: 70px;
    background: rgba(255,255,255,0);
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
     transition: all .5s ease-in-out;

  padding-top: 8px;
  padding-bottom: 6px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

   overflow: hidden;
   position:fixed;
    z-index:1000;
  }
  
  .soild{
    background: rgba(255,255,255,1);
     box-shadow: 1px 2px 15px rgba(100, 100, 100, 0.3);

  }

  .nav {
    width: 100%;
  
    
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    
  }

  .linklogo {
    list-style: none;
   
    margin-top:20px;
    
  }

  .span2{
    color: black;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
