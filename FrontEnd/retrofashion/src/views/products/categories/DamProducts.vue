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
      womenPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['Shoes', 'Clothes', 'Accessories']
        },
        {
            id: 2,
            name: 'CLOTHES',
            elements: ['Dresses', 'Skirts', 'Tops', 'Lingeries', 'Wedding', 'Wedding guest', 'Jeans', 'Jackets']
        },
        {
            id: 3,
            name: 'SHOES',
            elements: ['Heels', 'Sneakers', 'Sandals', 'Boots', 'Outdoor']
        },
        {
            id: 4,
            name: 'ACCESSORIES',
            elements: ['Travel bags', 'Handbags', 'Belts', 'Scarfs', 'Hats', 'Wallets', 'Jewelries']
        },
        {
            id: 5,
            name: 'WEDDING',
            elements: ['Dresses', 'Shoes']
        },
        {
            id: 6,
            name: 'SUMMER',
            elements: ['Sneakers', 'Tshirts', 'Shorts', 'Hats']
        },
        {
            id: 7,
            name: 'WINTER',
            elements: ['Boots', 'Jackets', 'Pull-over', 'Tops', 'Clothes', 'Shoes']
        },
        {
            id: 8,
            name: 'COLORS',
            elements: ['White', 'Black', 'Yellow', 'Bleu', 'Purple', 'Red', 'Pink', 'Gold', 'Silver']
        },
        {
            id: 9,
            name: 'PRICE',
            elements: []
        },
    ],
    }
  },
  computed:{
    ...mapGetters('women',['products']),
    ...mapGetters('layouts',['isWomenPage']),
/*     ...mapGetters('categories',['womenPagecategories'])
 */  },
  beforeCreate(){
    this.$store.dispatch('women/fetchWomenProducts')
    this.$store.dispatch('layouts/inWomenPage')
  }
    
}
</script>