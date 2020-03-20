<template>
  <div>
    <div class="product-view">
     <!--  <div class="product-detail">
        <Images :product="product"></Images>
      </div> -->
      <div class="product-detail">
        <ProductDetails :product="product"></ProductDetails>
<!--         <ProductDescription class="element"></ProductDescription>
 -->      </div>
    </div>
  </div>
</template>
<script>
  //import ProductImagesSlider from '../../components/product-slider/ProductImagesSlider'
  //import Images from '../../components/product-slider/Images'
  import ProductDetails from '../../components/product/ProductDetails'
  //import ProductDescription from '../../components/product/ProductDescription'
  import {mapGetters} from 'vuex'

  export default {
    name: 'ProductView',
    components: { 
      //Images,
      //ProductImagesSlider,
       ProductDetails, 
      // ProductDescription 
      },
    data() {
      return {
        
      }
    },
    computed:{
      ...mapGetters('product',['product'])
    },
    created(){
      console.log(this.product)
      //this._image = this.product.productImages[0]
    },
    methods:{
      
    }

  } 
</script>
<style scoped>
  /* .product-view {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }

  .product-detail {
    flex-basis: 45%;
  } */

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