<template>
  <div class="product-view">
    <div class="product-detail">
      <ProductImagesSlider :product="product"></ProductImagesSlider>
    </div>
    <div class="product-detail x">
      <ProductDetails :product="product"></ProductDetails>
      <ProductDescription class="element"></ProductDescription>
    </div>
  </div>

</template>
<script>
  import ProductImagesSlider from '../../components/product-slider/ProductImagesSlider'
  import ProductDetails from '../../components/product/ProductDetails'
  import ProductDescription from '../../components/product/ProductDescription'
  import {mapGetters} from 'vuex'

  export default {
    name: 'ProductView',
    components: { ProductImagesSlider, ProductDetails, ProductDescription },
    data() {
      return {
      }
    },
    computed:{
      ...mapGetters('product',['product'])
    },
    created(){
      console.log(this.product)
    }

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