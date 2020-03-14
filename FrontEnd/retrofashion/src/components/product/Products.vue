<template>
    <div class="main-container">
    <Categories
    class="category-container"
    categoryName="Women"
        v-bind:options="['Dress', 'Jeans', 'Shoes', 'Bags', 'Hats']"
    ></Categories>
    <div class="products-container">
     <div class="product" v-for="(product,index) in products" :key="index" v-bind:id="index">
        <productItem :product = "product"></productItem> 
     </div> 
    </div> 
</div>
</template>
<script>
import ProductItem from './ProductItem'
import Categories from '../categorySelect/SingelSelect'
export default {
    name: 'products',
    props:['products'],
    components:{
        ProductItem,
        Categories
    },
}
</script>
<style scoped>
    .products-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        flex-basis: 80%;
    }
    .product{
        flex-basis: 20%;
        min-width: 250px;
        height: 420px;
        margin: 5px;
    }
    .product:hover{
        border: 0.5px solid rgb(240, 234, 234)
    }
    .main-container{
      display: flex;
    }
    
    .category-container{
      flex-basis: 20%;
      padding-left: 10px;
    }
</style>