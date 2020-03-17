<template>
  <div>
    <Products :groupType="groupType" :products="filteredProducts" :categories="menPagecategories"></Products>
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
       menPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['Shoes', 'Clothes', 'Accessories']
        },
        {
            id: 2,
            name: 'CLOTHES',
            elements: ['Trousers', 'Shirts', 'Tshirts', 'Boxers', 'Shorts', 'Wedding', 'Wedding guest', 'Jeans', 'Jackets']
        },
        {
            id: 3,
            name: 'SHOES',
            elements: ['Dress shoes', 'Sneakers', 'Sandals', 'Boots', 'Outdoor']
        },
        {
            id: 4,
            name: 'ACCESSORIES',
            elements: ['Travel bags', 'Handbags', 'Belts', 'Scarfs', 'Hats', 'Wallets', 'Jewelries']
        },
        {
            id: 5,
            name: 'WEDDING',
            elements: ['Trousers', 'Shirts', 'Shoes', 'Suits']
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
    ...mapGetters('men',['filteredProducts']),
    ...mapGetters('layouts',['isMenPage']),
/*     ...mapGetters('categories',['menPagecategories'])
 */  }
    
}
</script>