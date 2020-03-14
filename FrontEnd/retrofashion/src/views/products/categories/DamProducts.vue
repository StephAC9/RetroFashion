<template>
  <div>
    <Products :products="products"></Products>
  </div>
</template>
<script>

import Products from '../../../components/product/Products'
import {mapGetters} from 'vuex'
export default {
   name:'DamProducts',
   components:{
     Products
  },
  computed:{
    ...mapGetters('women',['products'])
  },
  beforeCreate(){
    this.$store.dispatch('women/fetchWomenProducts')
  }
    
}
</script>