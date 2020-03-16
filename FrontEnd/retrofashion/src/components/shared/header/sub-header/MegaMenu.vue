<template>
    <div>
       <div class="dropdown-content" v-if="layout == 'women'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a class="link" @click="fetchSingleCategoryForWomen('Clothes')">All clothes</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Dresses')">Dresses</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Tops')">Tops</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Skirts')">Skirts</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a class="link" @click="fetchSingleCategoryForWomen('Shoes')">All shoes</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Sneakers')">Sneakers</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Boots')">Boots</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Heels')" >Heels</a>
                        </div>
                        <div class="column">
                            <h4>Wedding</h4>
                            <a class="link" @click="fetchSingleCategoryForWomen('Wedding')">Wedding</a>
                            <a class="link" @click="fetchSingleCategoryForWomen('Wedding guest')" >Wedding guest</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" v-else-if="layout == 'men'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a class="link" @click="fetchSingleCategoryForMen('Clothes')">All clothes</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Suits')">Suits</a>
                            <a class="link" @click="fetchSingleCategoryForMen('T-shirts')">T-shirts</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Trousers')">Trousers</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Jackets')">Jackets</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a class="link" @click="fetchSingleCategoryForMen('Shoes')">All shoes</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Sneakers')">Sneakers</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Business shoes')">Business shoes</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Outdoors')">Outdoors</a>
                        </div>
                        <div class="column">
                            <h4>Wedding</h4>
                            <a class="link" @click="fetchSingleCategoryForMen('Wedding')">Wedding</a>
                            <a class="link" @click="fetchSingleCategoryForMen('Wedding guest')">Wedding guest</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" style="width:260px" v-else-if="layout == 'children'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a class="link" href="#">Dresses</a>
                            <a class="link" href="#">Tops</a>
                            <a class="link" href="#">Squirts</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a class="link" href="#">Sneakers</a>
                            <a class="link" href="#">Boots</a>
                            <a class="link" href="#">Heels</a>
                            <a class="link" href="#">Sandals</a>
                        </div>
                    </div>
            </div>
            <div class="dropdown-content" style="width:120px" v-if="layout == 'shoes'">
                        <div class="row">
                        <div class="column">
                            <h4>Shoes</h4>
                            <a class="link" href="#">Women</a>
                            <a class="link" href="#">Men</a>
                            <a class="link" href="#">Children</a>
                        </div>
                    </div>
            </div>
            <div class="dropdown-content" style="width:120px" v-if="layout == 'clothes'">
                        <div class="row">
                        <div class="column">
                            <h4>Groups</h4>
                            <a class="link" href="#">Women</a>
                            <a class="link" href="#">Men</a>
                            <a class="link" href="#">Children</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" style="width:170px" v-if="layout == 'accessories'">
                <div class="row">
                 <div class="column">
                            <h4>Accessories</h4>
                            <a class="link" @click="fetchSingleCategoryForAccessories('Bags')" >Bags</a>
                            <a class="link" @click="fetchSingleCategoryForAccessories('Hats')" >Hats</a>
                            <a class="link" @click="fetchSingleCategoryForAccessories('Sunglasses')">Sunglasses</a>
                            <a class="link" @click="fetchSingleCategoryForAccessories('Watches')">Watches</a>
                            <a class="link" @click="fetchSingleCategoryForAccessories('Jewelries')">Jewelries</a>
                 </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'MegaMenu',
    props:['layout'],
    data(){
      return{
      }
    },
    methods:{
         fetchSingleCategoryForMen(selectedCategory){
            this.$store.dispatch("men/fetchSingleCategory",{selectedCategory:selectedCategory})
        },
        fetchSingleCategoryForWomen(selectedCategory){
            console.log(selectedCategory)
            this.$store.dispatch("women/fetchSingleCategory",{selectedCategory: selectedCategory})
        },
        fetchSingleCategoryForAccessories(selectedCategory){
            console.log(selectedCategory)
            this.$store.dispatch("women/fetchSingleCategory",{selectedCategory: selectedCategory})
        },
        fetchSingleCategoryForChildren(selectedCategory){
            console.log(selectedCategory)
            this.$store.dispatch("children/fetchSingleCategory",{selectedCategory: selectedCategory})
        }, 
    }
   
}
</script>
<style scoped>
    #d{
       border-radius: 0px;
       top: 2px;
    }
    .dropbtn {
    padding: 16px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    transition: .5s;
    text-decoration: none;
    color:whitesmoke;
    }
    @media (max-width: 1100px){
    .dropbtn {
        font-size: 14px;
    }
    }
    .dropbtn:hover {
    color: white;
    }
    .dropdown {
    position: relative;
    display: inline-block;
    }
    .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(63, 61, 61, 0.2);
    z-index: 1;
    top:32px;
    width: 450px;
    margin-right: 30px;
    background: #f8f9fa;
    border-radius: 5px;
    }
    .dropdown-content a {
    color: grey;
    font-size: 11px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: all .5s;
    }
    .dropdown a:hover {
    transition: .5s;
    text-decoration: none;
    color:rgb(58, 53, 53);
    border-bottom: 3px solid rgb(53, 52, 52);
    }
    .dropdown-content a:hover {background-color: transparent}

    .dropdown:hover .dropdown-content {
    display: block;
    }
    .row{
    width: 90%;
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 5px;
    margin: 0 auto;
    }
    .header{
    width: 10%;
    padding-top: 50px;
    padding-right: 10px;
    font-size: 14px;
    border-right: 0.5 solid #525455;
    } 
    .column{
        text-align: center;
    } 
    .link{
        cursor: pointer;
    }
</style>


