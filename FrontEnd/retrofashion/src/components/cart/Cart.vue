<template>
  <div class="cart">
    <div class="cart-item">
      <ProductCardItem></ProductCardItem>
      <ProductCardItem></ProductCardItem>
      <ProductCardItem></ProductCardItem>
      <ProductCardItem></ProductCardItem>
      <ProductCardItem></ProductCardItem>
    </div>
    <div class="cart-checkout">
      <Checkout></Checkout>
    </div>
  </div>
</template>

<script>
import ProductCardItem from "../../components/cart/ProductCardItem";
import Checkout from "../../components/payment/Checkout";

export default {
  components: { ProductCardItem, Checkout }
};
</script>


<style  scoped>
.cart {
  display: flex;
}
.cart-checkout {
  flex-basis: 30%;
}
.cart-item {
  flex-basis: 70%;
}
</style>