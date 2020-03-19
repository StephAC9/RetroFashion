<template>
  <div class="product-view">
    <div class="product-detail">
      <ProductImagesSlider></ProductImagesSlider>
    </div>
    <div class="product-detail x">
      <ProductDetails></ProductDetails>
      <ProductDescription class="element"></ProductDescription>
    </div>
  </div>

</template>
<script>
  import ProductImagesSlider from '../../components/product-slider/ProductImagesSlider'
  import ProductDetails from '../../components/product/ProductDetails'
  import ProductDescription from '../../components/product/ProductDescription'


  export default {
    components: { ProductImagesSlider, ProductDetails, ProductDescription },
    data() {
      return {

      }

    },
    name: 'ProductView'
  } 
</script>
<style scoped>
  .product-view {
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
    flex-wrap: wrap;
  }

  .product-detail {
    flex-basis: 45%;


  }

  .x {
    border-left: 0.5px solid rgb(214, 208, 208)
  }

  .element {
    margin-top: 25px;
  }

  @media(max-width: 950px) {

    .x {
      width: 100%;
      position: absolute;


      background-color: aqua;



    }
  }
</style>