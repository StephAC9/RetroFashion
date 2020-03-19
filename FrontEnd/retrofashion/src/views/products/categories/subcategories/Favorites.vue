
<template>
    <div class="fav-container">
         <div style="padding: 20px">    
            <div>
                <h2>MY FAVORITES</h2>
                <p>Lorem corporis eum! Quaerat facere harum quo nam voluptate ex, facilis soluta, eveniet illum laborum aperiam dolores commodi.</p>
            </div>
        <div class="products-container">
            <div class="product" v-for="(product,index) in myFavorites" :key="index" v-bind:id="index">
                <productItem :product = "product"></productItem> 
            </div> 
        </div> 
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import ProductItem from '../../../../components/product/ProductItem'
export default {
    name: 'Favorites',

    components:{
        ProductItem,
    },
     computed:{
    ...mapGetters('favorites',['myFavorites']),
    ...mapGetters('layouts',['isWomenPage']),
    },

        watch:{
            myFavorites(v){
                if(v !== null || v !== undefined){
                    console.log(this.myFavorites)
                }
            }
    },
   
    methods:{
     
    }
}
</script>
<style scoped>
  
    .fav-container{
        margin: 0 auto;
        width: 90;
        display: flex;
        flex-direction: column;
        border-left: 0.5px solid rgb(230, 229, 227);
        border-right: 0.5px solid rgb(230, 229, 227);
    }
    .products-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom:150px;
    }
    .product{
        flex-basis: 30%;
        margin-bottom: 10px;
    }
    .product:hover{
        border: 0.5px solid rgb(240, 234, 234)
    }
 
    @media (max-width: 850px) {    
        .products-container{
            flex-basis: 100%;
        }    
    }
</style>