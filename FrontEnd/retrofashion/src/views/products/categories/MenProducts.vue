<template>
    <div class="products-container">
     <div class="product" v-for="(product,index) in men_products" :key="index" v-bind:id="index">
        <productItem :product = "product"></productItem> 
     </div> 
    </div> 
</template>
<script>
import productItem from '../../../components/product/ProductItem'
import {mapGetters} from 'vuex'
export default {
  name:'MenProducts',
  components:{
      productItem
  } ,
  computed:{
    ...mapGetters(['men_products'])
  },
  created(){
    this.$store.dispatch('fetchMenProducts')
  }

}
</script>
<style scoped>
    .products-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 4px;
    }
    .product{
        flex-basis: 20%;
        min-width: 250px;
        height: 420px;
    }
    .product:hover{
        border: 0.5px solid rgb(240, 234, 234)
    }
   
</style>