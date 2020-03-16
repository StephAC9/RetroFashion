<template>
  <div>
    <Products :groupType="groupType" :products="products" :categories="menPagecategories"></Products>
  </div>
</template>
<script>

import Products from '../../../components/product/Products'
import {mapGetters} from 'vuex'
export default {
   name:'MenProducts',
   components:{
     Products
  },
  data(){
    return{
      groupType:'Men',
    }
  },
  computed:{
    ...mapGetters('men',['products']),
    ...mapGetters('layouts',['isMenPage']),
    ...mapGetters('categories',['menPagecategories'])
  },
  beforeCreate(){
    this.$store.dispatch('men/fetchMenProducts')
    this.$store.dispatch('layouts/inMenPage')
  }
    
}
</script>