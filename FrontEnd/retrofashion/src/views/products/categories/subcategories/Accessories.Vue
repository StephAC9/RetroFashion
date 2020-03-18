template>
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