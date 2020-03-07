<template>
  <div class="main-header-container">
    <top-bar></top-bar>
    <bottom-bar></bottom-bar>
  </div>
 </template>

<script>
import BottomBar from './sub-header/BottomBar'
import TopBar from './sub-header/TopBar'
export default {
  name: 'Header',
  components:{
    BottomBar,
    TopBar
  },
    
};
</script>
<style scoped>
@import "../../../assets/css/header-style.css";
@media (max-width: 550px){
  nav{
    display: flex;
  }
  .search{
    display: block;
    flex-basis: 70%;
  }
  .nav-elements{
    flex-basis: 30%;
  }
}
</style>
