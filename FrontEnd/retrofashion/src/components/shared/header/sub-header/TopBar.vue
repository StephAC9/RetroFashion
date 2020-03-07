<template>
    <div>
        <div class="navbar">
        <div class="top-bar">
          <div class="bar-left">
              <b-navbar-brand style="background: none; font-family:cursive, sans-serif;text-decoration: none;" class="logo a" href="/home"><h1 style="display:inline">R</h1> etroFashion</b-navbar-brand>
            </div>
            <div class="bar-center" >
              <form class="example" action="#">
                <input type="text" placeholder="Search.." name="search">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="bar-right">
              <div style="flex-basis:70%; text-align:end; padding-top:10px">
                <button class="btn" :id="`popover-2-${placement}`" style="padding: 0; border: none; background: none;">
                  <i class='fa fa-user' style='font-size:30px;color:rgb(230,230,230,2)'></i>
                </button>
                  <popover layout = 'login'> </popover>
                <div style="color: white; font-size:10px; z-index: 2; top:25px;text-align:end; font-family:cursive, sans-serif;">Login</div>
              </div>
              <div class="cart">
                  <div v-show="items" class="items-number">
                      <p style="text-align:center; padding-top:5px"><strong>1</strong></p>
                  </div>
                  <div class="cart-icon">
                    <button class="btn" :id="`popover-1-${placement}`" style="margin: 0 auto; padding: 0; border: none; background: none;">
                      <i class="fa fa-cart-arrow-down" style="font-size:30px;color:rgb(230,230,230,2);"></i>
                    </button>
                    <popover layout = 'cart'></popover>
                    <div style="color: white; font-size:10px; z-index: 2; text-align:center;font-family:cursive, sans-serif;">Cart</div>
                  </div>
              </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Popover from '../../../popover/Popover'
export default {
    name: 'top-bar',
    components:{
      Popover
    },
    data: () => ({
    items: false,
    placement:'bottomleft',
  }),
}
</script>
<style scoped>
  @import "../../../../assets/css/header-style.css";

  a:hover {
        transition: .5s;
        text-decoration: none;
        color:whitesmoke;
        border-bottom: 3px solid white;
  }
  a{
    font-size: 30px;
  }
</style>