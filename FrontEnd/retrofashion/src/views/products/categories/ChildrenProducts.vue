<template>
  <div>
    <Products :groupType="groupType" :products="products" :categories="childrenPagecategories"></Products>
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
      groupType:'Children',
    }
  },
  computed:{
    ...mapGetters('children',['products']),
    ...mapGetters('layouts',['isChildrenPage']),
    ...mapGetters('categories',['childrenPagecategories'])
  },
  beforeCreate(){
    this.$store.dispatch('children/fetchChildrenProducts')
    this.$store.dispatch('layouts/inChildrenPage')
  }
    
}
</script>