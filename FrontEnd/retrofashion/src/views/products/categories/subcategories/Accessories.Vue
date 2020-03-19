<template>
    <div style="text-align: center; padding:30px">
    
      
        
        <div class="cart-product-item">
          
            
            <div class="sample">
                <img style="width: 100%; height:100%;" :src="require(`../../../../../../Images/${product.productImages[0]}`)" alt="img">  
            </div>
            <div class="sample pad">
                <p>{{product.productName}}</p>
                <p>SIZE: {{product.productSize}}</p>

         
            </div>
            <div class="central">
              <div class="element"></div>
               <div class="element" >
                 <div class="centerfunction">
             <button type="button" class="btn btn-light1" @click="increment" >+</button>	
             <span class="value">{{count}}</span>
             <button type="button" class="btn btn-light2" @click="decrement">-</button>	
             </div>

               </div>
              
                <div class="element"></div>


            <!-- <div class="centerfunction">
             <button type="button" class="btn btn-light1" @click="increment" >+</button>	
             <span class="value">{{count}}</span>
             <button type="button" class="btn btn-light2" @click="decrement">-</button>	
             </div> -->

           
             </div>
            <div class="sample">
            <div class="sampleMini">
               
                <p>{{ productSubtotal(product.productPrice, count) }} SEK</p>
            </div>

            
          <div class="buttons">
          <span class="delete-btn">X</span>
     
   
            </div>

            </div>
        </div>
        
          
    </div>
   
</template>
<script>

import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            product:null,
            count: 0,        

        }
    },
    computed:{
        ...mapGetters('women',['products'])
    },
    watch:{
        products(value){
            if(value !== null || value !== undefined){
                this.product = this.products[0]
                console.log(this.products)
            }
        }
    },
     created(){
        console.log('created')
        console.log(this.products)
    },
    mounted(){
        console.log('mounted')
        this.product = this.products[4]
        console.log(this.product.productName)
        console.log(this.product.productSize)
    } ,
   
       methods: {
    increment () {
      this.count += 1
    },
    decrement () {
      if (this.count === 0) return
      this.count -= 1
    },
      productSubtotal(price, quantity) {
    return price * quantity;
  }
  }
   
  
}


</script>


<style scoped>
.element{
  flex-basis: 33%;
  text-align: center;
  padding-top: 8px;

}
 p{

  font-size: 14px;
  
  
 
}
.pad{
  flex-basis: 20%;

}
.delete-btn{
  
   border-radius: 50%;
     position:absolute;
      width: 25px;
      height: 25px;
      background:white;
      font-size: 15px;     
      font-weight: bold;
      text-align: center;
      font-size: 7px;
      padding-top: 8px;
      z-index: 2;
      top:-12px;
      right:  15px;
     
    
  
  
} 

    .cart-product-item{
        display: flex;
        height: 180px;
        margin-top: 100px;
        margin-bottom: 200px;
        padding: 10px ;
        position: relative;
        flex-wrap: wrap;
       
     
        
    }
     .sample{
        flex-basis: 15%;
        height: 100%;
        padding: 3px;
        padding-right:30px;
         
    }
    .central{
        flex-basis: 50%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
    }
    .item {
    
  padding: 20px 30px;
  height: 120px;
  display: flex;
}
    .sampleMini{
  margin-top: 65px;
  width: 83px;
  padding-top: 8px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;

    }
    .centerfunction{
       margin-top: 35px;
       display: flex;
       margin-right: 200px;
      margin-left: 200px;
   
       
    }
    .title {
  height: 60px;
  border-bottom: 1px solid #E1E8EE;
  padding: 20px 30px;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
}  
button .fa fa-window-minimize sign{
  margin-bottom: 25px;
}
.sign{
  margin: 10px;
}
    @media(max-width: 650px ){
     
    } 
    

</style>
