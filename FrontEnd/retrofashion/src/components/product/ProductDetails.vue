<template>
  <div class="product-details-container">
    <div class="product-images-viewer element">
        <div class="multi-show">
            <div @click="showIt(index)" class="img-box" v-for="(image,index) in product.productImages" :key="index">
                <img style="width:100%; height:100px" :src="require(`../../../../Images/${image}`)" alt="">
            </div>
        </div>
        <div class="preview">
            <img style="width:100%; height:100%" :src="require(`../../../../Images/${preview_image}`)" alt="">
        </div>
    </div>
    <div class="element">
        <div class="container mt-15 pt-15">
          <div class="row">
            <h3 class="producttag"><strong>{{product.productName}}</strong></h3>
        </div>
        <div class="row">
            <h1 class="totaltag">Price: <strong>{{product.productPrice}} SEK</strong></h1>
        </div>
        <div class="row">
            <label style="display:inline">Size</label>
            <select v-if="bool2" type="text" v-model="size">
              <option v-for="size in sizes[1]" v-bind:key="size.id">
                {{ size.value }}</option>
            </select>

            <select style="font-size:12px" v-else-if="bool1" type="text" id="size" name="size" v-model="size"
              placeholder="Select a month">
              <option v-for="size in sizes[0]" v-bind:key="size.id">
                {{ size.value }}</option>
            </select>

            <select v-else-if="!bool1 && !bool2" type="text" id="size" name="size" v-model="size"
              placeholder="Select a month">
              <option v-for="size in sizes[2]" v-bind:key="size.id">
                {{ size.value }}</option>
            </select>
        </div>
        </div>
        <div style="text-align:center" ><label style="color:red;" v-if="noSizeEntered">Choose a size please!</label></div>
        <button class="btn" @click="addToCart">ADD TO CART</button>

        <div class="icon-container">
          <i class="fa fa-cc-visa" style="color:navy;"></i>
          <i class="fa fa-cc-amex" style="color:blue;"></i>
          <i class="fa fa-cc-mastercard" style="color:red;"></i>
          <i class="fa fa-cc-discover" style="color:orange;"></i>
        </div>
        <div class="row">
          <div class="container mt-10 pt-10">
            <label><i class="fa fa-check-square-o"></i> Quick delievery in 1-5
              days</label><br />
            <label><i class="fa fa-check-square-o"></i> Free return with 14
              days</label><br />
          </div>
        </div>
        <h3 class="producttag">DESCRIPTION</h3>
            <hr>

            <p>
              This description has been translated automatically:
              ""Slides Gucci women modello Princetown 423513 c9d00 6705 rosa.
              Applications: metal applications Closure: no closure Heel:
              block heel Made in Italy Pattern: solid colour Sole: leather sole Toe:
              round towline Type: slides""
            </p>

      </div>
  </div>
</template>
<script>

  export default {
    props:['product'],
    data() {
      return {
        size:'',
        item: "clothes",
        bool1: false,
        bool2: false,
        noSizeEntered: false,
        preview_image: this.product.productImages[0],

        sizes: [

          [
            { value: "XXS", id: 1 },
            { value: "XS", id: 2 },
            { value: "S", id: 3 },
            { value: "M", id: 4 },
            { value: "L", id: 5 },
            { value: "XL", id: 6 },
            { value: "XXL", id: 7 }

          ],
          [
            { value: "36", id: 1 },
            { value: "37", id: 2 },
            { value: "38", id: 3 },
            { value: "39", id: 4 },
            { value: "40", id: 5 },
            { value: "41", id: 6 },
            { value: "42", id: 7 }

          ],
          [
            { value: "One-Size", id: 1 }
          ]

        ]

      };
    },

    methods: {
      checkout() {

        this.$router.push("/payment");
      },
      addToCart(){
          const cartItem = {
                  productId: this.product.id,
                  productName: this.product.productName,
                  productSize: this.size,
                  productColor: this.product.Size,
                  imageUrl: this.product.productImages[0],
                  price: this.product.productPrice,
                  quantity: 1,
              }
          this.$store.dispatch('cart/sendToCart',{cartItem})
        console.log('Add to cart')
       /*  if(this.size == ''){
          this.noSizeEntered = true
          setTimeout(() => {
            this.noSizeEntered = false
          }, 3000);
        }else{
        } */
      },
      showIt(index){
            console.log('clicked')
            this.preview_image = this.product.productImages[index]
            console.log(this.preview_image)
        }
    },
    mounted() {
      if (this.product.productType == "Clothes") {
        this.bool1 = true
        this.bool2 = false
      } else if (this.product.productType == "Shoes") {

        this.bool1 = false
        this.bool2 = true
      }
      else {
        this.bool1 = false
        this.bool2 = false

      }

    }
  };
</script>

<style scoped>
  .product-details-container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .btn {
    background: rgb(247, 73, 125);
    color: rgb(228, 225, 225);
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 27px;
  }

  .btn:hover {
    background: rgb(247, 73, 142);
    color: rgb(250, 248, 248);
  }

  #totallabel {
    float: right;
  }

  #deliverylabel {
    float: right;
  }

  #orderlabel {
    float: right;
  }

  .totaltag {
    float: left;
    margin-bottom: 2%;
    font-size: 22px;
  }

  .deliverytag {
    float: left;
    margin-bottom: 4%;
  }

  .producttag {
    float: left;
    margin-bottom: 30px;
    font-size: 20px;
    color: rgb(85, 83, 83);
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 300%;
  }

  select[type="text"] {
    font-size: 28px;
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .row #sizelabel {
    margin-bottom: 10px;
    display: block;
    float: left;
    font-size: 27px;
  }

  .row #material-label {
    margin-bottom: 50px;
    display: block;
    float: left;
    font-size: 27px;
  }

  .product-images-viewer{
    display: flex;
}
.multi-show{
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
}
.preview{
   flex-basis: 70%; 
}
.img-box{
    width: 100%;
    height: 70px;
}
.element{
  flex-basis: 40%;
  min-width: 400px;
}
.details{
  widows: 100%;
}

</style>