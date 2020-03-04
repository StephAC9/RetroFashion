<template>
  <div>
    <Header></Header>      
    <section>
      <router-view/>
    </section> 
  </div>
 </template>

<script>
import Header from './components/shared/header/Header'
export default {
  name: 'App',
  components:{
    Header
  },
   data: () => ({
   
  }), 
 
}
</script>
<style scoped>
body{
  /* font-family: montserrat; */
  font-family:cursive, sans-serif;
}

</style>
