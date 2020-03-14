<template>
  <div>
    <Header></Header>      
    <section class="main-container">
       <div class="left-row"></div>
      <div class="center-row">
        <router-view/>
       </div>
      <div class="right-row"></div> 
    </section> 
    <Footer></Footer>
  </div>
 </template>

<script>
import Header from './components/shared/header/Header'
import Footer from './components/shared/footer/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  computed:{

  },
  data: () => ({
   
  }), 
 
}
</script>
<style scoped>
  body{
    font-family: montserrat;
  }
  .main-container{
    display:flex;
  }
  .left-row,.right-row{
    flex-basis: 5%;
  }
  .center-row{
    flex-basis: 90%;
  }
   @media (max-width: 850px) {
    .left-row,.right-row{
      flex-basis: 0%;
    }
    .center-row{
      flex-basis: 100%;
    }
  }

</style>
