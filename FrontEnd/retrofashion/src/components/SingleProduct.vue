<template>
    <div class="card"> 
       <div class="card-body"> 
           <h5 class="card-title">{{product.productName}}</h5> 
           <p class="card-text">Price: <b>{{product.productPrice}}kr</b></p> 
            <p class="card-text">Description: <b>{{product.productDescription}}</b></p> 
           <button 
               class="btn mt-3"
               :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
               @click="addToCart(product.id)"
               :disabled="!inCartQuantity">
               {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
           </button> 
       </div> 
   </div>
</template>

<script>
    export default{
        props: ["product"],
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            }
        }
    }
</script>