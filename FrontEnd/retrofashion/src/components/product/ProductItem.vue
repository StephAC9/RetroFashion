<template>
     <div class="product-container">
               <div class="img-container" @mouseover="first = !first" @mouseleave="first = true">
                  <img style="width: 100%; height:100%;" v-if="first" :src="require(`../../../../Images/${product.productImages[0]}`)" alt="img">  
                  <img style="width: 100%; height:100%;" v-if="!first"  :src="require(`../../../../Images/${product.productImages[1]}`)" alt="img">
                  <div class="cercle">-30</div>      
               </div>
                <div class="details">
                  <div style="margin-top:10px;height:70px">
                    <p class="title"> {{product.productName}}</p>
                </div>
               <div class="bottom">
                 <div class="bottom-el price">
                    <div v-bind:style= "[product.productSalesPrice > 0 ? {textDecoration:lineThrough} : {textDecoration:none}]" style="text-align:bottom; margin-left:3px">  {{product.productPrice}} kr</div>
                    <div v-show="product.productSalesPrice > 0"><p style="color:red"> {{product.productSalesPrice}} kr</p></div>
                 </div>
                 <div class="bottom-el icons">
                   <button class="cart"> <i class="fa fa-cart-arrow-down"  @click="addTocart(product.id)"></i> </button>
                   <button class="heart-icon"><i class="fa fa-heart" :style="tofavorites ? { 'color': '#e13' } : null"  @click="manageFavorites(product.id)"></i></button>
                </div>
              </div>
                </div>
      </div>
</template>
<script>
export default {
    name:'ProductItem',
    props:['product'],
    data(){
        return{
            first: true,
            tofavorites: false,
            none:'none',
            lineThrough:'line-through'
        }
    },
   
    methods:{
            manageFavorites(productId){   
            this.tofavorites = !this.tofavorites
             if(this.tofavorites == true){
                console.log('Add  '+this.tofavorites)
                //Add to fav
                this.$store.dispatch('favorites/addToFavorites',{productId: productId})
            }else{
                console.log('Remove '+this.tofavorites)
                //Remove from fav
                this.$store.dispatch('favorites/removeFromFavorites',{productId: productId})
            } 
            },  

            removeProduct(productId){
                this.$store.dispatch('freezeProduct',{productId: productId})
            }
    }
 
}
</script>
<style scoped>
    .product-container{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 2px;
      padding-bottom: 10px;
      background-color: rgb(252, 249, 249);
      width: 270px;
    }
 
    .addedToFav{
      color:rgb(247, 8, 48);
    }
    .cart{
      color:rgb(204, 202, 202);
      font-size: 20px;
      outline: 0;
      box-shadow: none!important;
      border:none;
      margin-right: 5px;
      background: transparent;
    }
    .cart:hover {
      color:rgb(124, 122, 122);
    } 
    .heart-icon:hover{
      color: rgb(231, 45, 76);
    }
    .heart-icon{
      color: rgb(243, 207, 212);
      outline: 0;
      box-shadow: none!important;
      font-size: 20px;
      border:none;
      background: transparent;
    }
    .bottom{
      width: 100%;
      text-align:center; 
      display:flex; 
      justify-content: space-between;
    }
    .bottom-el{
      flex-basis: 50%;
    }
    .price{
      margin-left: 5px;
      text-align: start;
      display:flex; 
      justify-content:start
    }
    .icons{
      display:flex;
      padding-left: 30px;
      padding-bottom: 10px;
    }

    .img-container{
      position: relative;
      flex-basis: 60%;
    }
    .details{
      flex-basis: 40%;
    }
    .cercle{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background: aquamarine;
      position: absolute;
      font-size: 15px;
      font-weight: bold;
      top: 1px;
      text-align: center;
      padding-top: 12px;
    }
    .title{
      font-size:11px; 
      text-align:center;
      font-weight:bold
    }
    @media (max-width: 750px) {
          .cart,.heart-icon{
            background: transparent;
          }
    }
   

</style>