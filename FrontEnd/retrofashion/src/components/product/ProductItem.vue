<template>
     <div class="product-container">
               <div @mouseover="first = !first" @mouseleave="first = true">
                 <!-- <div class="cercle">30</div> -->
            <!-- <div class="image" v-if="first" v-bind:style="{ 'background-image': url(`../../../../Images/${product.productImages[0]}`) }"></div>
                 <div class="image" v-if="!first" v-bind:style="{ backgroundImage: 'url(' + require(`../../../../Images/${product.productImages[1]}`) + ')' }"></div> -->
                  <img style="width: 100%; height:100%;" v-if="first" :src="require(`../../../../Images/${product.productImages[0]}`)" alt="img">  
                  <img style="width: 100%; height:100%;" v-if="!first"  :src="require(`../../../../Images/${product.productImages[1]}`)" alt="img">    
               </div>
                <div style="margin-top:10px;height:70px">
                    <p style="margin:0 auto;font-size:13px; text-align:start;font-weight:bold"> {{product.productName}}</p>
                </div>
               <div class="bottom">
                 <div class="bottom-el price">
                    <div v-bind:style= "[product.productSalesPrice > 0 ? {textDecoration:lineThrough} : {textDecoration:none}]" style="text-align:bottom;margin-end:5px">  {{product.productPrice}} kr</div>
                    <div v-show="product.productSalesPrice > 0"><p style="color:red">  {{product.productSalesPrice}} kr</p></div>
                 </div>
                 <div class="bottom-el icons">
                   <button class="cart"> <i class="fa fa-cart-arrow-down"  @click="addTocart(product.id)"></i> </button>
                   <button class="heart-icon"><i class="fa fa-heart" :style="tofavorites ? { 'color': '#e13' } : null"  @click="manageFavorites(product.id)"></i></button>
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
    created(){
      console.log(this.product.productImages[0])
    },
    methods:{
            manageFavorites(){   
            this.tofavorites = !this.tofavorites
           /*  if(this.tofavorites == true){
                console.log('Add  '+this.tofavorites)
                //Add to fav
                this.$store.dispatch('addToFavorites',{productId: productId})
            }else{
                console.log('Remove '+this.tofavorites)
                //Remove from fav
                this.$store.dispatch('removeFromFavorites',{productId: productId})
            } */
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
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 2px;
      padding-bottom: 10px;
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
.cart{
  color:rgb(204, 202, 202);
  font-size: 20px;
  outline: 0;
  box-shadow: none!important;
  border:none;
  margin-right: 5px;
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
  border:none
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
  padding-left: 40px;
  padding-bottom: 10px;
}
.cercle{
  width: 20px;
  border-radius: 50%;
  z-index: 2;
  background: rosybrown;
}
.image{
  width: 100%; 
  height:100%;
  background-size: 100%;
  z-index: 0;
}

</style>