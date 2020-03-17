<template>
  <div class="CategoriesBoard">
    <div class="category-items" v-for="(category,index) in categories" :key="index" v-bind:id="index">
      <CategoryItem :category="category" :groupType="groupType"></CategoryItem>
     </div> 
  </div>
</template>
<script>

import CategoryItem from './CategoryItem'
export default {
    name:'CategoriesBoard',
    props:{
        categories: {
            type: Array,
            required: true
        },
        groupType: {
          type: String,
          required: true
        }
    },
    components:{
      CategoryItem
    }
}
</script>
<style scoped>
  .category-items{
    display:flexbox
  }

</style>
