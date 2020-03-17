<template>
  <div style="text-align: center; padding:30px">
    <div class="cart-product-item">
      <div class="sample">
        <img src="" alt="" />
      </div>
      <div class="sample"></div>
      <div class="central"></div>
      <div class="sample"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      product: null
    };
  },
  computed: {
    ...mapGetters("men", ["products"])
  }
};
</script>
<style scoped>
.cart-product-item {
  display: flex;
  height: 100px;
  margin-top: 100px;
  margin-bottom: 200px;
  padding: 10px;
}
.sample {
  flex-basis: 15%;
  height: 100%;
  background: yellow;
  border-right: solid;
}
.central {
  flex-basis: 55%;
  height: 100%;
  background: rgb(63, 63, 59);
}
</style>
