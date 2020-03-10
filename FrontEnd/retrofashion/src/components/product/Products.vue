<template>
    <div class="products-container">
        <div class="products" v-for="(product,index) in products" :key="index">
            <!-- <ProductItem class="product" :product="product"></ProductItem> -->
             <div @mouseover="first = !first" @mouseleave="first = true">
                  <img style="width: 100%; height:80%;" v-if="first" :src="require(`../../../Images/${product.productImages[0]}`)" alt="img">  
                  <img style="width: 100%; height:80%;" v-if="!first"  :src="require(`../../../Images/${product.productImages[1]}`)" alt="img">       
               </div>
               <div style="text-align:center; margin-top:30px; display:flex; justify-content: space-between;">
                 <div style="margin-left:5px">
                    <div>
                        <p style="margin:0 auto;font-size:13px; text-align:start;font-weight:bold"> {{product.productName}}</p>
                    </div>
                    <div>
                      <div style="margin-top:10px"><p style="text-align:start">  {{product.productPrice}} kr</p></div>
                    </div>
                 </div>
                 <div style="display:flex; justify-content:space-around;margin-top:35px;">
                   <button class="cart-icon"><i class="fa fa-cart-arrow-down"  @click="addTocart(product.id)"></i></button>
                   <button class="heart-icon"><i class="fa fa-heart" :style="tofavorites ? { 'color': '#e13' } : null"  @click="manageFavorites(product.id)"></i></button>
                </div>
              </div>
        </div>        
    </div>
</template>
<script>
//import ProductItem from './ProductItem'
export default {
    name: 'products',
    props:['products'],
    components:{
        //ProductItem
    },
    data(){
        return{
            first: true,
            tofavorites: false,
        }
    },
    methods:{
            manageFavorites(){   
            this.tofavorites = !this.tofavorites
             /* if(this.tofavorites == true){
                console.log('Add  '+this.tofavorites)
                //Add to fav
                this.$store.dispatch('addToFavorites',{productId: productId})
            }else{
                console.log('Remove '+this.tofavorites)
                //Remove from fav
                this.$store.dispatch('removeFromFavorites',{productId: productId})
            }  */
            },  

            addTocart(productId){
                console.log(productId)
                //this.$store.dispatch('addToCart',{productId: productId})
            }
    }
}
</script>
<style scoped>
    .products-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

     .product-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 4px;
    }
        .product{
        flex-basis: 20%;
        min-width: 250px;
        height: 420px;
        }
        .product:hover{
        border: 0.5px solid rgb(240, 234, 234)
        }
        .image{
        width: 100%;
        height:80%;
        }
        
        .addedToFav{
        color:rgb(247, 8, 48);
        }
        .cart-icon{
        color:rgb(204, 202, 202);
        font-size: 20px;
        outline: 0;
        box-shadow: none!important;
        }
        .cart-icon:hover {
        color:rgb(124, 122, 122);
        } 
        .heart-icon:hover{
        color: rgb(231, 45, 76);
        }
        .heart-icon{
        color: rgb(243, 207, 212);
        margin-left: 10px;
        margin-right: 10px;
        outline: 0;
        box-shadow: none!important;
        font-size: 20px;
        }
</style>