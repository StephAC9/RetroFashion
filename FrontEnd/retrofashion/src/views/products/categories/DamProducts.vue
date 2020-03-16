<template>
  <div>
    <Products :groupType="groupType" :products="products" :categories="womenPagecategories"></Products>
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
      groupType:'Women',
    }
  },
  computed:{
    ...mapGetters('women',['products']),
    ...mapGetters('layouts',['isWomenPage']),
    ...mapGetters('categories',['womenPagecategories'])
  },
  beforeCreate(){
    this.$store.dispatch('women/fetchWomenProducts')
    this.$store.dispatch('layouts/inWomenPage')
  }
    
}
</script>