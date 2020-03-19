<template>
  <div>
    <Header></Header>      
    <section class="main-container">
       <div class="left-row"></div>
      <div class="center-row">
        <div style="padding-left:5px;padding-right:5px; width:100%">
           <img v-if="isMenPage" class="image" :src="require(`../../Images/fix-images/7abc126c9bae21e6d2942b46b0d20fc9.jpg`)" alt="">
           <img v-if="isWomenPage" class="image" :src="require(`../../Images/fix-images/unnamed.jpg`)" alt="">
          <img v-if="isChildrenPage" class="image" :src="require(`../../Images/fix-images/7638fc6e0c3c3b7d1dc7971e7b11345c.jpg`)" alt="">
        </div>
        <router-view/>
       </div>
      <div class="right-row"></div> 
    </section> 
    <Footer></Footer>
  </div>
 </template>

<script>
import {mapGetters} from 'vuex'  
import Header from './components/shared/header/Header'
import Footer from './components/shared/footer/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data: () => ({
   
  }), 
  computed:{
    ...mapGetters('layouts',['isHomePage']),
    ...mapGetters('layouts',['isMenPage']),
    ...mapGetters('layouts',['isWomenPage']),
    ...mapGetters('layouts',['isChildrenPage']),
  },
  created(){
  },

  mounted(){
    console.log(this.isMenPage)
  },
  watch:{
    isMenPage(v){
      console.log(v)
      if(v !== null || v !== undefined){
        console.log(this.isMenPage)
      }
    }
  },



 
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
  .image{
    width: 100%;
    height: 350px;
  }
   @media (max-width: 850px) {
    .left-row,.right-row{
      flex-basis: 0%;
    }
    .center-row{
      flex-basis: 100%;
    }
    .image{
      height: 250px;
    }
  }
  @media (max-width: 650px) {
    .left-row,.right-row{
      flex-basis: 0%;
    }
    .center-row{
      flex-basis: 100%;
    }
    .image{
      height: 150px;
    }
  }

</style>
