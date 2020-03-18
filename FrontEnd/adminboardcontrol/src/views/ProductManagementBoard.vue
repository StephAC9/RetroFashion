<template>
  <div class="home">
       <div class="productBoard">
        <div class="head" style="margin:30px"><h1 style="text-align:center; padding:5px;">ADD NEW PRODUCT</h1></div>
        <div class="product-form">
           <div style="text-align:center; width:40%; margin:0 auto">
                <form>
                  <label for="myfile">Select a product name: </label>
                  <input class="input"  type="file" webkitdirectory directory @change="getProductName" multiple>
                </form>
               <div>
                     <b-form-input id="pName" class="input" v-model="productName" type="text" placeholder="Product name"></b-form-input>
                 </div>
                <div>
                    <b-form-input class="input" v-model="productColor" type="text" placeholder="Product color"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="productSize" type="text" placeholder="Product size"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="quantity" type="number" placeholder="Quatity"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="productPrice" type="text" placeholder="Unit Price"></b-form-input>
                </div>
           </div>
           <div>
               <b-form-textarea
                id="textarea"
                v-model="productDescription"
                placeholder="Product description here..."
                rows="3"
                max-rows="6">
                </b-form-textarea>
           </div>
           <div>
                <b-form-group class="category" label="CUSTOMER GROUP TARGET">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="customerTargetSelected"
                        :options="customerTargetOptions"
                        name="flavour-1"
                    ></b-form-checkbox-group>
                </b-form-group>
                 <b-form-group class="category" label="MAIN CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-2"
                        v-model="mainType"
                        :options="mainOptions"
                        name="flavour-2"
                    ></b-form-checkbox-group>
                </b-form-group>
                 <b-form-group class="category" label="CLOTHES CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-3"
                        v-model="selectedCategories"
                        :options="clothesOptions"
                        name="flavour-3"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group class="category" label="CLOTHES MATERIALS CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-4"
                        v-model="selectedCategories"
                        :options="clothesMaterialOptions"
                        name="flavour-4"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group class="category" label="SHOES CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-5"
                        v-model="selectedCategories"
                        :options="shoesOptions"
                        name="flavour-5"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group class="category" label="ACCESSORIES CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-6"
                        v-model="selectedCategories"
                        :options="accessoriesOptions"
                        name="flavour-6"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group class="category" label="OCCASIONS CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-7"
                        v-model="selectedCategories"
                        :options="occasionsOptions"
                        name="flavour-7"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group class="category" label="SEASONS CATEGORIES">
                    <b-form-checkbox-group
                        id="checkbox-group-8"
                        v-model="selectedCategories"
                        :options="seasonsOptions"
                        name="flavour-8"
                    ></b-form-checkbox-group>
                </b-form-group>
                <div>SelectedCategories: <strong>{{ selectedCategories }}</strong></div>
            </div>
        </div>
    </div><hr>
     <div style="marging:30px;">
        <h4 style="text-align:center">Images</h4><br>
        <p>Note: <em>The first image will be this product's main image so choose carefully!!</em></p><br>
        <div class="image-box">
              <div v-if="!image1">
                <input type="file" @change="onFileChange1">
            </div>
            <div v-else>
                <img :src="image1" />
                <button @click="removeImage1">Remove image</button>
            </div>
          </div>

    </div>
          <div class="image-box">
              <div v-if="!image2">
                <input type="file" @change="onFileChange2">
            </div>
            <div v-else>
                <img :src="image2" />
                <button @click="removeImage2">Remove image</button>
            </div>
          </div>
          <div class="image-box">
              <div v-if="!image3">
                <input type="file" @change="onFileChange3">
            </div>
            <div v-else>
                <img :src="image3" />
                <button @click="removeImage3">Remove image</button>
            </div>
          </div>
          <div class="image-box">
              <div v-if="!image4">
                <input type="file" @change="onFileChange4">
            </div>
            <div v-else>
                <img :src="image4" />
                <button @click="removeImage4">Remove image</button>
            </div>
          </div>
          <div class="image-box">
              <div v-if="!image5">
                <input type="file" @change="onFileChange5">
            </div>
            <div v-else>
                <img :src="image5" />
                <button @click="removeImage5">Remove image</button>
            </div>
          </div> 
          <div style="margin-top:50px">
              <b-button @click="save" size="lg">SAVE PRODUCT</b-button>
          </div><hr>
          <div style="height:50px"></div>
          <div class="head" style="margin:30px"><h1 style="text-align:center; padding:5px;">REMOVE A PRODUCT</h1></div>
          <div class="products-container">
            <div class="product" v-for="(product,index) in products" :key="index" v-bind:id="index">
               <productItem :product = "product"></productItem> 
            </div> 
          </div> 
          <div style="height:200px"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductItem from '../components/ProductItem'
export default {
  name: 'Dasboard',
  components:{
    ProductItem
  },
  data(){
    return{
      tofavorites: false,
      first: true,
      image:'',
      price:799,
      show:false,
      image1:'',
      image2:'',
      image3:'',
      image4:'',
      image5:'',
      productName:'',
      productColor:'',
      productSize:'',
      quantity:1,
      productPrice:'',
      productDescription:'Lorem ipsum,quaerat sequi, voluptas iusto libero voluptatem delectus esse asperiores in temporibus non maxime consectetur dignissimos nostrum at officiis. Eius, fugiat excepturi qui mollitia molestias iste, ipsum temporibus aliquam, eligendi dolorum consectetur magni adipisci veritatis officiis optio. Velit eius corporis, commodi amet odio molestias?',
      customerTargetSelected:[],
      mainType:[],
      selectedCategories: [], 

      //Categories should be dynamic  Also product sizes could be set in advance for all products
      customerTargetOptions: [
            { text: 'Men', value: 'Men' },
            { text: 'Women', value: 'Women' },
            { text: 'Children', value: 'Children' },
     ],
      mainOptions: [
            { text: 'Clothes', value: 'Clothes' },
            { text: 'Shoes', value: 'Shoes' },
            { text: 'Accessories', value: 'Accessories' }
     ],
     clothesOptions: [
            { text: 'New Arrivals', value: 'newArrivals' },
            { text: 'Premium collection', value: 'Premium' },
            { text: 'Trousers', value: 'Trousers' },
            { text: 'Shorts', value: 'Shorts' },
            { text: 'Shirts', value: 'Shirts' },
            { text: 'T-shirts', value: 'T-shirts' },
            { text: 'Pull-over', value: 'Pull-Over' },
            { text: 'Jackets', value: 'Jackets' },
            { text: 'Dresses', value: 'Dresses' },
            { text: 'Squirts', value: 'Squirts' },
            { text: 'Swim wear', value: 'Swim wear' },
            { text: 'Underwears', value: 'Underwears' },
            { text: 'Suits', value: 'Suits' },
            { text: 'Polo', value: 'Polo' },
     ],
     clothesMaterialOptions:[
         { text: 'Cotton', value: 'Cotton' },
         { text: 'Leather', value: 'Leather' },
         { text: 'Jeans', value: 'Jeans' },
         { text: 'Polyester', value: 'Polyester' },
     ],
     shoesOptions:[
         { text: 'Sneakers', value: 'Sneakers' },
         { text: 'Heels', value: 'Heels' },
         { text: 'Boots', value: 'Boots' },
         { text: 'Sandals', value: 'Sandals' },
         { text: 'Ballerinas', value: 'Ballerinas' },
         { text: 'Dress shoes', value: 'DressShoes' },
         { text: 'Sports', value: 'Sports' },
         { text: 'Nature', value: 'Nature' }
     ],
     accessoriesOptions:[
         { text: 'TravelBags', value: 'TravelBags' },
         { text: 'HandBags', value: 'HandBags' },
         { text: 'Wallets', value: 'Wallets' },
         { text: 'Belts', value: 'Belts' },
         { text: 'Jewelries', value: 'Jewelries' },
         { text: 'Scarfs', value: 'Scarfs' },
         { text: 'Watches', value: 'Watches' },
     ],
     occasionsOptions:[
         { text: 'Party', value: 'Party' },
         { text: 'Cocktail', value: 'Cocktail' },
         { text: 'Wedding', value: 'Wedding' },
         { text: 'Sport', value: 'Sport' },
         { text: 'Beach', value: 'Beach' },
     ],
     seasonsOptions:[
         { text: 'Winter', value: 'Winter' },
         { text: 'Summer', value: 'Summer' },
         { text: 'Spring', value: 'Spring' },
         { text: 'Autumn', value: 'Autumn' },
     ],                
     images:[],
    }
  },
  computed:{
    ...mapGetters(['products']),

  },
  beforeCreate(){
    this.$store.dispatch('fetchProducts')
  },
   created(){
    var someDate = new Date()
    var numberOfDaysToAdd = 30
    const dueDate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
    console.log(new Date())
    console.log(new Date(dueDate))
  },
  
  methods: {
    getProductName(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
     this.productName  = files[0].webkitRelativePath
    },
    onFileChange1(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      if (!files.length)
        return;
     this.images.push(`${this.customerTargetSelected[0].toLowerCase()}/${this.mainType[0].toLowerCase()}/${this.productName}/${files[0].name}`)
 
      this.createImage1(files[0]);
    },
     createImage1(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image1 = e.target.result
        }        
      reader.readAsDataURL(file);
    }, 
    removeImage1: function () {
      this.image1 = '';
    },


     onFileChange2(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      if (!files.length)
        return;
      this.images.push(`${this.customerTargetSelected[0].toLowerCase()}/${this.mainType[0].toLowerCase()}/${this.productName}/${files[0].name}`)
      this.createImage2(files[0]);
    },
     createImage2(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image2 = e.target.result
        }       
      reader.readAsDataURL(file);
    }, 
    removeImage2: function () {
      this.image2 = '';
    },


     onFileChange3(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.images.push(`${this.customerTargetSelected[0].toLowerCase()}/${this.mainType[0].toLowerCase()}/${this.productName}/${files[0].name}`) 
      this.createImage3(files[0]);
    },
     createImage3(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image3 = e.target.result
        }        
      reader.readAsDataURL(file);
    }, 
    removeImage3: function () {
      this.image3 = '';
    },


     onFileChange4(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.images.push(`${this.customerTargetSelected[0].toLowerCase()}/${this.mainType[0].toLowerCase()}/${this.productName}/${files[0].name}`)  
      this.createImage4(files[0]);
    },
     createImage4(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image4 = e.target.result
        }        
      reader.readAsDataURL(file);
    }, 
    removeImage4: function () {
      this.image4 = '';
    },


     onFileChange5(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.images.push(`${this.customerTargetSelected[0].toLowerCase()}/${this.mainType[0].toLowerCase()}/${this.productName}/${files[0].name}`)  
      this.createImage5(files[0]);
    },
     createImage5(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image5 = e.target.result
        }        
      reader.readAsDataURL(file);
    }, 
    removeImage5: function () {
      this.image5 = '';
    },

    save(){
      this.selectedCategories.push(this.mainType[0])
      const pName = document.getElementById('pName').value
      console.log(pName)
      console.log(this.selectedCategories)
      console.log(this.images)
      console.log(this.customerTargetSelected[0])
          this.$store.dispatch('saveProduct',{
            name: pName,
            groupTarget: this.customerTargetSelected[0],
            type: this.mainType[0],
            color: this.productColor,
            size: this.productSize,
            description: this.productDescription,
            categories: this.selectedCategories,
            price: this.productPrice,
            quantity: this.quantity,
            images: this.images
        }) 
    },
 
  }
}
</script>
<style  scoped>
  #app {
    text-align: center;
  }
  img {
    width: 10%;
    height: 70px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
  .images-box{
      margin-top: 20px;
      padding: 10px;
  }
  .input{
      width: 90%;
      margin: 10px;
  }
  .category{
      margin-bottom:50px;
  }
  .products-container{
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
  .heart-icon:hover{
    color: rgb(231, 45, 76);
  }
  
  .addedToFav{
    color:rgb(247, 8, 48);
  } 
</style>
