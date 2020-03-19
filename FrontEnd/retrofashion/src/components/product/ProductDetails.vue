<template>
  <div class="checkout">
    <div class="container mt-15 pt-15">
      <h1>This is a add to cart page</h1>

      <h2 class="py-4">PRODUCT</h2>
      <div class="row">
        <div class="container mt-15 pt-15">
          <h3 class="producttag">Product type: Dress</h3>
        </div>
      </div>
      <div class="row">
        <div class="container mt-15 pt-15">
          <label id="material-label" for="material">Product Material: Black Cotton </label>
        </div>
      </div>

      <div class="row">
        <div class="container mt-15 pt-15">
          <h1 class="totaltag">300 SEK</h1>
        </div>
      </div>

      <div class="row">
        <div class="container mt-15 pt-15">
          <label id="sizelabel" for="size">Size</label>
          <select type="text" id="size" name="cart[size]" v-model="cart.size" placeholder="Select a month">
            <option v-for="size in sizes" v-bind:key="size.id">
              {{ size.value }}</option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary" @click="addToCart">Add To Cart</button>

      <div class="icon-container">
        <i class="fa fa-cc-visa" style="color:navy;"></i>
        <i class="fa fa-cc-amex" style="color:blue;"></i>
        <i class="fa fa-cc-mastercard" style="color:red;"></i>
        <i class="fa fa-cc-discover" style="color:orange;"></i>
      </div>
      <div class="row">
        <div class="container mt-10 pt-10">
          <label><i class="fa fa-check-square-o"></i> Quick delievery in 1-5
            days</label><br />
          <label><i class="fa fa-check-square-o"></i> Free return with 14
            days</label><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        cart: {
          size: ""

        },
        sizes: [
          { value: "XXS", id: 1 },
          { value: "XS", id: 2 },
          { value: "S", id: 3 },
          { value: "M", id: 4 },
          { value: "L", id: 5 },
          { value: "XL", id: 6 },
          { value: "XXL", id: 7 }

        ]
      };
    },

    methods: {
      checkout() {

        this.$router.push("/payment");
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

  .producttag {
    float: left;
    margin-bottom: 2%;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 300%;
  }

  select[type="text"] {
    font-size: 28px;
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .row #sizelabel {
    margin-bottom: 10px;
    display: block;
    float: left;
    font-size: 27px;
  }

  .row #material-label {
    margin-bottom: 50px;
    display: block;
    float: left;
    font-size: 27px;
  }
</style>