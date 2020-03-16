<template>
  <div>
    <Products :groupType="groupType" :products="singleCategoryFilterProducts" :categories="womenPagecategories"></Products>
  </div>
</template>
<script>

import Products from '../../../../components/product/Products'
import {mapGetters} from 'vuex'
export default {
   name:'WomenCategory',
   components:{
     Products
  },
  data(){
    return{
      groupType:'women',
    }
  },
  computed:{
    ...mapGetters('women',['singleCategoryFilterProducts']),
    ...mapGetters('layouts',['isWomenPage']),
    ...mapGetters('categories',['womenPagecategories']),
  },
  watch:{
    singleCategoryFilterProducts(v){
      if(v !== null || v !== undefined){
        console.log(this.singleCategoryFilterProducts)
      }
    }
  }
    
}
</script>