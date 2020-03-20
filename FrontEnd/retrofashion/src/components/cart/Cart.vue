<template>
  <div class="cart-container">
    <div class="cart-items">
      <div class="cart-item" v-for="(item, index) in cart" :key="index">
        <ProductCardItem :item="item"></ProductCardItem>
      </div>
    </div>
    <div class="cart-checkout">
      <Checkout></Checkout>
    </div>
  </div>
</template>

<script>
import ProductCardItem from "../../components/cart/ProductCardItem";
import Checkout from "../../components/payment/Checkout";
import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components: { ProductCardItem, Checkout },
  computed:{
    ...mapGetters('cart',['cart'])
  },

  mounted(){
    console.log(this.cart)
  }

};
</script>


<style  scoped>
.cart-container {
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  flex-wrap: wrap;
}
.cart-checkout {
  flex-basis: 40%;
}
.cart-items {
  flex-basis: 60%;
  flex-direction: column;
  min-width: 450px;

}
.cart-item{
  margin: 10px;
  width: 80%;
}
</style>