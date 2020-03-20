<template>
  <div class="cart-product-item">
    <div class="item-image">
      <img
        style="width: 100%; height:50%;"
        :src="require(`../../../../Images/${item.imageUrl}`)"
        alt="img"
      />
    </div>
    <div class="item-title" style="padding:5px">
      <p style="text-decoration:underline" @click="goToProductView">{{item.productName}}</p>
      <span>SIZE: {{item.productSize}}</span>
    </div>
    <div class="item-quantity">
      <div style="width: 100px; margin: 0 auto;  margin-top: 20px;  ">
        <span class="value" @click="increment">+</span>
        <span class="value">{{item.quantity}}</span>
        <span class="value" @click="decrement">-</span>
      </div>
    </div>
    <div class="item-price">
      <p class="item-price-2">{{ productSubtotal(item.price, item.quantity) }} SEK</p>
      <div class="item-remove">X
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "product-cart-item",
  props:['item'],
  data() {
    return {
      product: null,
      count: 0
    };
  },
  computed: {
    ...mapGetters("women", ["products"]),
  },
  watch: {
    products(value) {
      if (value !== null || value !== undefined) {
        this.product = this.products[0];
        console.log(this.products);
      }
    }
  },
  mounted(){
console.log(this.item)
  },
 

  methods: {
    increment() {
      this.item.quantity += 1;
    },
    decrement() {
      if (this.item.quantity === 0) return;
      this.item.quantity -= 1;
    },
    productSubtotal(price, quantity) {
      return price * quantity;
    },
    goToProductView() {
        console.log(this.products)
        
    }
  }
};
</script>


<style scoped>
.item-margin-top {
  margin-top: 50px;
}
.cart-product-item {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  background: rgb(252, 249, 249);
  padding: 10px;
  height: 110px;
  position: relative;
}
.item-image {
  flex-basis: 15%;
  height: 180px;
  width: 180px;
  min-width: 100px;
  padding: 3px;
  padding-right: 30px;
}
.item-title {
  flex-basis: 30%;
  font-size: 8px;
  height: 100%;
}
.item-quantity {
  flex-basis: 35%;
  height: 100%;
  justify-content: center;
  display: flex;
}
.item-price {
  flex-basis: 20%;
  font-size: 14px;
}
p {
  font-size: 12px;
}
.btn-light1,
.btn-light2,
.value {
  font-size: 13px;
  flex-basis: 33%;
  margin: 10px;
  cursor: pointer;
}
.value:focus {
  outline: none;
}
.item-remove {
  position: absolute;
  left: 550px;
  top:20px;
  font-weight: bold;
  cursor: pointer;
}
.item-price-2 {
  margin-top: 18px;
  font-size: 14px;
}
</style>