<template>
  <div class="checkout">
    <div class="container mt-15 pt-15">
      <h2 class="py-4">YOUR ORDER</h2>
      <div class="row">
        <div class="container mt-15 pt-15">
          <h3 class="ordertag">Order Price</h3>
          <label for="price" id="orderlabel">
            <i class="fa fa-price"></i> 300 SEK
          </label>
        </div>
      </div>
      <div class="row">
        <div class="container mt-15 pt-15">
          <h3 class="deliverytag">Delivery</h3>
          <label for="price" id="deliverylabel">
            <i class="fa fa-price"></i> 50 SEK
          </label>
        </div>
      </div>
      <div class="row">
        <div class="container mt-15 pt-15">
          <h3 class="totaltag">TOTAL PRICE</h3>
          <label for="price" id="totallabel">
            <i class="fa fa-price"></i> 350 SEK
          </label>
        </div>
      </div>
      <button class="btn btn-primary" @click="goToPayment">CheckOut</button>

      <div class="icon-container">
        <i class="fa fa-cc-visa" style="color:navy;"></i>
        <i class="fa fa-cc-amex" style="color:blue;"></i>
        <i class="fa fa-cc-mastercard" style="color:red;"></i>
        <i class="fa fa-cc-discover" style="color:orange;"></i>
      </div>
      <div class="row">
        <div class="container mt-10 pt-10">
          <label>
            <i class="fa fa-check-square-o"></i> Free delievery for purchase
            over 999 SEK
          </label>
          <br />
          <label>
            <i class="fa fa-check-square-o"></i> Customer Service 24H
            Available
          </label>
          <br />
          <label>
            <i class="fa fa-check-square-o"></i> Quick delievery in 1-5
            days
          </label>
          <br />
          <label>
            <i class="fa fa-check-square-o"></i> Free return with 14
            days
          </label>
          <br />

          <label>
            <i class="fa fa-check-square-o"></i> Customer Review
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  methods: {
    goToPayment() {
      // $(’#miniCart’).modal(’hide’)
      this.$router.push("/payment-step-1");
    }
  }
};
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
.btn {
  background-color: #0d0d11;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 27px;
}

.btn:hover {
  background-color: #df3721;
}
#totallabel {
  float: right;
}
#deliverylabel {
  float: right;
}
#orderlabel {
  float: right;
}
.totaltag {
  float: left;
  margin-bottom: 2%;
}
.deliverytag {
  float: left;
  margin-bottom: 4%;
}
.ordertag {
  float: left;
  margin-bottom: 2%;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 300%;
}
</style>
