<template>
  <div>
    <Products :groupType="groupType" :products="singleCategoryFilterProducts" :categories="menPagecategories"></Products>
  </div>
</template>
<script>

import Products from '../../../../components/product/Products'
import {mapGetters} from 'vuex'
export default {
   name:'MenCategory',
   components:{
     Products
  },
  data(){
    return{
      groupType:'men',
    }
  },
  computed:{
    ...mapGetters('men',['singleCategoryFilterProducts']),
    ...mapGetters('layouts',['isMenPage']),
    ...mapGetters('categories',['menPagecategories'])
  }
    
}
</script>