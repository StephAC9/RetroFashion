<template>
    <div>
        <div id="d" class="dropdown-content" v-if="layout == 'media'">
           <div class="row">
             <div class="column">
                <h4>Menu</h4>
                <a href="/women">Women</a>
                <a href="/men">Men</a>
                <a href="/children">Children</a>
                <a href="/clothes">Clothes</a>
                <a href="/shoes">Shoes</a>
                <a href="/accessories">Accessories</a>
            </div>
          </div>
        </div>
        <div class="dropdown-content" v-if="layout == 'women'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a href="#">Dresses</a>
                            <a href="#">Tops</a>
                            <a href="#">Squirts</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a href="#">Sneakers</a>
                            <a href="#">Boots</a>
                            <a href="#">Heels</a>
                            <a href="#">Sandals</a>
                        </div>
                        <div class="column">
                            <h4>Wedding</h4>
                            <a href="#">Wedding dresses</a>
                            <a href="#">Wedding guest</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" v-else-if="layout == 'men'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a href="#">Dresses</a>
                            <a href="#">Tops</a>
                            <a href="#">Squirts</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a href="#">Sneakers</a>
                            <a href="#">Boots</a>
                            <a href="#">Heels</a>
                            <a href="#">Sandals</a>
                        </div>
                        <div class="column">
                            <h4>Wedding</h4>
                            <a href="#">Wedding dresses</a>
                            <a href="#">Wedding guest</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" style="width:260px" v-else-if="layout == 'children'">
                        <div class="row">
                        <div class="column">
                            <h4>Clothes</h4>
                            <a href="#">Dresses</a>
                            <a href="#">Tops</a>
                            <a href="#">Squirts</a>
                        </div>
                        <div class="column">
                            <h4>Shoes</h4>
                            <a href="#">Sneakers</a>
                            <a href="#">Boots</a>
                            <a href="#">Heels</a>
                            <a href="#">Sandals</a>
                        </div>
                    </div>
            </div>
            <div class="dropdown-content" style="width:120px" v-if="layout == 'shoes'">
                        <div class="row">
                        <div class="column">
                            <h4>Shoes</h4>
                            <a href="#">Women</a>
                            <a href="#">Men</a>
                            <a href="#">Children</a>
                        </div>
                    </div>
            </div>
            <div class="dropdown-content" style="width:120px" v-if="layout == 'clothes'">
                        <div class="row">
                        <div class="column">
                            <h4>Groups</h4>
                            <a href="#">Women</a>
                            <a href="#">Men</a>
                            <a href="#">Children</a>
                        </div>
                        </div>
            </div>
            <div class="dropdown-content" style="width:170px" v-if="layout == 'accessories'">
                <div class="row">
                 <div class="column">
                            <h4>Accessories</h4>
                            <a href="#">Bags</a>
                            <a href="#">Watches</a>
                            <a href="#">Jewelries</a>
                            <a href="#">others</a>
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
    width: 400px;
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
</style>


