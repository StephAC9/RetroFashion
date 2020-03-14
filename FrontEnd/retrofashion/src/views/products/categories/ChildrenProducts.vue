<template>
  <div>
    <Products :products="children_products"></Products>
  </div>
</template>
<script>

import Products from '../../../components/product/Products'
import {mapGetters} from 'vuex'
export default {
   name:'ChildrenProducts',
   components:{
     Products
  },
  computed:{
    ...mapGetters(['children_products'])
  },
  beforeCreate(){
    this.$store.dispatch('fetchChildrenProducts')
  }
    
}
</script>