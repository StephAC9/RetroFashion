<template>
  <div class="checkout">
    <div class="container mt-15 pt-15">

      <div class="row">
        <div class="container mt-15 pt-15">
          <h3 class="producttag">DESCRIPTION</h3>
          <hr>

          <p>
            This description has been translated automatically:
            ""Slides Gucci women modello Princetown 423513 c9d00 6705 rosa.
            Applications: metal applications Closure: no closure Heel:
            block heel Made in Italy Pattern: solid colour Sole: leather sole Toe:
            round towline Type: slides""
          </p>
        </div>
      </div>

      <div class="row-desc">
        <div class="container mt-15 pt-15">
          <label for="goto"><span style="color: #df3721;"> GOTO </span></label>
          <button class="btn btn-primary" @click="productCategory">Product Categories</button>
          <button class="btn btn-primary" @click="productType">Product Type</button>

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

      };
    },

    methods: {
      productCategory() {

        this.$router.push("/payment");
      },
      productType() {

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
    margin: 10px 10px;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
  }

  .btn:hover {
    background-color: #df3721;
  }

  .row-desc .container {
    display: flex;
    margin: 0;
    padding: 0;
    display: flex;
    margin-top: 25px;
    align-content: space-between;
    justify-content: space-between;
    /*padding: 12px;*/
  }

  .row-desc .container label {
    margin-right: 100px;
    font-size: 15px;
    margin-top: 25px;
  }
</style>