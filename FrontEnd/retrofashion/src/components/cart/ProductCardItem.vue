<template>
  <div class="cart-product-item">
    <div class="item-image">
      <img
        style="width: 100%; height:100%;"
        :src="require(`../../../../Images/${product.productImages[0]}`)"
        alt="img"
      />
    </div>
    <div class="item-title item-margin-top">
      <p>{{product.productName}}</p>
      <p>SIZE: {{product.productSize}}</p>
    </div>
    <div class="item-quantity item-margin-top">
      <div style="width: 100px; margin: 0 auto;  margin-top: 20px;  ">
        <span class="value" @click="increment">+</span>
        <span class="value">{{count}}</span>
        <span class="value" @click="decrement">-</span>
      </div>
    </div>
    <div class="item-price item-margin-top">
      <p class="item-price-2">{{ productSubtotal(product.productPrice, count) }} SEK</p>

      <div class="item-remove">
        <span>X</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "product-cart-item",
  data() {
    return {
      product: null,
      count: 0
    };
  },
  computed: {
    ...mapGetters("women", ["products"])
  },
  watch: {
    products(value) {
      if (value !== null || value !== undefined) {
        this.product = this.products[0];
        console.log(this.products);
      }
    }
  },
  created() {
    console.log("created");
    console.log(this.products);
  },
  mounted() {
    console.log("mounted");
    this.product = this.products[4];
    console.log(this.product.productName);
    console.log(this.product.productSize);
  },

  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count === 0) return;
      this.count -= 1;
    },
    productSubtotal(price, quantity) {
      return price * quantity;
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

  background: rgb(235, 231, 231);
  padding: 4px;
}
.item-image {
  flex-basis: 15%;
  height: 180px;
  width: 180px;
  padding: 3px;
  padding-right: 30px;
}
.item-title {
  flex-basis: 30%;
}
.item-quantity {
  flex-basis: 35%;
  height: 100%;
  justify-content: center;

  display: flex;
}
.item-price {
  flex-basis: 20%;
  position: relative;
}
p {
  font-size: 16px;
}
.btn-light1,
.btn-light2,
.value {
  font-size: 18px;
  flex-basis: 33%;
  margin: 10px;
}
.value:focus {
  outline: none;
}
.item-remove {
  position: absolute;
  left: 150px;
  top: -40px;
  font-weight: bold;
}
.item-price-2 {
  margin-top: 18px;
  font-size: 24px;
}

/* 


.delete-btn {
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 25px;
  background: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  font-size: 7px;
  padding-top: 8px;
  z-index: 2;
  top: -12px;
  right: 15px;
}

.cart-product-item {
  display: flex;
  height: 180px;
  width: auto;
  margin-top: 100px;
  margin-bottom: 200px;
  padding: 10px;
}


.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}
.sampleMini {
  margin-top: 65px;
  width: 83px;
  padding-top: 8px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

.title {
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
}
button .fa fa-window-minimize sign {
  margin-bottom: 25px;
}
.sign {
  margin: 10px;
}
@media (max-width: 650px) {
} */
</style>