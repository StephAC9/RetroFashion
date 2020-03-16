<template>
<div>
     <nav>
            <div class="nav-elements">
              <div class="dropdown-media" style="text-align:start; pading-bottom:3px">
                <div class="dropdown">
                  <i class="fa fa-bars dropbtn" @click="openNav" style="font-size:18px;" aria-hidden="true"></i> 
                    <div id="nav-overlay" class="overlay navbar-overlay">
                      <a href="javascript:void(0)" style="color:black"  class="closebtn" @click="closeNav">&times;</a>
                      <div class="overlay-content"> 
                        <div>
                           <div class="nav-content">
                            <div class="nav-row">
                            <div class="nav-column" style="border-top:0.5px solid; text-align:start">
                                <a style="font-size: 16px;color: #050505;" href="/women">Women</a><br>
                                <div style="padding-left:5px">
                                    <a @click="fetchSingleCategoryForWomen('Clothes')">Clothes</a><br>
                                    <a @click="fetchSingleCategoryForWomen('Shoes')">Shoes</a><br>
                                    <a @click="fetchSingleCategoryForWomen('Accessories')">Accessories</a>
                                </div>
                            </div>
                            <div class="nav-column" style="border-top:0.5px solid; text-align:start; margin-end:10px">
                                <a style="font-size: 16px;color: #050505;"  href="/men">Men</a><br>
                                <div style="padding-left:5px">
                                    <a @click="fetchSingleCategoryForMen('Clothes')">Clothes</a><br>
                                    <a @click="fetchSingleCategoryForMen('Shoes')">Shoes</a><br>
                                    <a @click="fetchSingleCategoryForMen('Accessories')">Accessories</a>
                                </div>
                            </div>
                          </div>
                          <div class="nav-row">
                            <div class="nav-column" style="border-top:0.5px solid; text-align:start">
                                <a style="font-size: 16px;color: #050505;"  href="/children">Children</a><br>
                                <div style="padding-left:5px">
                                    <a @click="fetchSingleCategoryForChildren('Clothes')">Clothes</a><br>
                                    <a @click="fetchSingleCategoryForChildren('Shoes')">Shoes</a><br>
                                    <a @click="fetchSingleCategoryForChildren('Accessories')">Accessories</a>
                                </div>
                            </div>
                            <div class="nav-column" style="border-top:0.5px solid; text-align:start">
                                <a style="font-size: 16px;color: #050505;"  href="/accessories">Accessories</a><br>
                                <div style="padding-left:5px">
                                    <a @click="fetchSingleCategoryForAccessories('Women')">Women</a><br>
                                    <a @click="fetchSingleCategoryForAccessories('Men')">Men</a><br>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>                                    
                      </div>
                    </div> 
                  </div>
              </div>      
              <ul>
               <li>
                 <div class="dropdown">
                    <a class="dropbtn"><a href="/women">Women</a></a>
                      <MegaMenu layout="women"></MegaMenu>
                 </div>
               </li>
               <li> 
                 <div class="dropdown">
                    <a class="dropbtn"><a href="/men">Men</a></a>
                      <MegaMenu layout="men"></MegaMenu>
                 </div>
               </li>
               <li>
                 <div class="dropdown">
                   <a class="dropbtn"><a href="/children">Children</a></a>
                    <MegaMenu layout="children"></MegaMenu> 
                 </div>
               </li>
               <li>
                 <div class="dropdown">
                   <a class="dropbtn"><a href="/shoes">Shoes</a></a>
                    <MegaMenu layout="shoes"></MegaMenu> 
                 </div>                
               </li>
               <li>
                 <div class="dropdown">
                   <a class="dropbtn"><a href="/clothes">Clothes</a></a>
                  <MegaMenu layout="clothes"></MegaMenu> 
                 </div>                 
               </li>
               <li>
                 <div class="dropdown">
                   <a class="dropbtn"><a href="/accessories">Accessories</a></a>
                    <MegaMenu layout="accessories"></MegaMenu>
                 </div>                 
               </li>
               <li>
                  <a href="/sales">Sales</a> 
               </li>
              </ul>
            </div>
            <div class="search">
              <input type="checkbox" id="check-search">
              <label for="check-search" class="checkbtn-search">
                <i @click="openSearch"  class="fa fa-search"></i>
              </label>
              <div id="mysearch-overlay" class="overlay search-overlay">
                <a href="javascript:void(0)" style="color:black" class="closebtn" @click="closeSearch">&times;</a>
                <div class="overlay-content">
                  <div class="search-bar" >
                    <input type="text" id="mySearch" onkeyup="" placeholder="Search.." title="Type in a category">
                    <i @click="openSearch"  class="fa fa-search" style="color:grey"></i>
                  </div><hr>
                  <div class="title"><h3 style="color:white; border-bottom: 1px solid white">Popular</h3><hr>
                    <a class="overlay-a" style="font-size:14px" href="#">Wedding</a><br>
                    <a class="overlay-a" style="font-size:14px" href="#">Summer</a><br>
                    <a class="overlay-a" style="font-size:14px" href="#">Dresses</a><br>
                    <a class="overlay-a" style="font-size:14px" href="#">Best sellers</a><br>
                  </div>
                </div>
              </div>  
            </div>
    </nav>
 </div>
</template>
<script>
import MegaMenu from './MegaMenu'
export default {
    name:'bottom-bar',
    components:{
      MegaMenu
    },
    data(){
      return{
        items: true,
        layout: '',
      }
    },
    methods:{
      openSearch() {
        document.getElementById("mysearch-overlay").style.width = "100%";
      },
      closeSearch() {
        document.getElementById("mysearch-overlay").style.width = "0%";
      },
      openNav() {
        document.getElementById("nav-overlay").style.width = "100%";
      },
      closeNav() {
        document.getElementById("nav-overlay").style.width = "0%";
      },
      fetchSingleCategoryForMen(selectedCategory){
        this.closeNav()
            this.$store.dispatch("men/fetchSingleCategory",{selectedCategory:selectedCategory})
        },
        fetchSingleCategoryForWomen(selectedCategory){
            console.log(selectedCategory)
            this.closeNav()
            this.$store.dispatch("women/fetchSingleCategory",{selectedCategory: selectedCategory})
        },
        fetchSingleCategoryForAccessories(selectedCategory){
            console.log(selectedCategory)
            this.closeNav()
            this.$store.dispatch("women/fetchSingleCategory",{selectedCategory: selectedCategory})
        },
        fetchSingleCategoryForChildren(selectedCategory){
            console.log(selectedCategory)
            this.closeNav()
            this.$store.dispatch("children/fetchSingleCategory",{selectedCategory: selectedCategory})
        },
    }
   
}
</script>
<style scoped>
.dropdown-media{
  display: none;
}
.checkbtn{
  text-align: left;
}
  a:hover {
      transition: .5s;
      text-decoration: none;
      color:whitesmoke;
      border-bottom: 2px solid white;
  }
  nav {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
  }
  ul{
    text-align: center;
  }
  @media (max-width: 850px) {
    nav {
        display: flex;
    }
    .search {
        display: block;
        flex-basis: 70%;
    }
    .nav-elements {
        flex-basis: 30%;
    }
    .dropdown-media{
      display: block;
    }
  }
  .main-menu{
    z-index: 10;
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
@media (max-width: 1000px){
  .dropdown-content {
    width: 600px; 
  }  
}
@media (max-width: 975px){
  .dropbtn a {
      font-size: 12px;
  }
  a{
    font-size: 12px;
  }

    
}
@media (max-width: 950px){
  .dropdown-content {
    width: 600px; 
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
  width: 800px;
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
}
.dropdown a:hover {
  transition: .9s;
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
}
.header{
  width: 10%;
  padding-top: 50px;
  padding-right: 10px;
  font-size: 14px;
  border-right: 0.5 solid #525455;
}
#mySearch{
  width: 50%;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.5px solid;
  outline: 0;
  box-shadow: none!important;
  color:rgb(37, 36, 36);
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */    
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
.search-overlay{
  height: 75%;
  background-color: rgb(243, 235, 235); /* Black fallback color */
  background-color: rgba(243, 235, 235, .9);  /* Black w/opacity */
}

.navbar-overlay{
  height: 100%;
  background-color: rgb(243, 235, 235); /* Black fallback color */
  background-color: rgba(243, 235, 235, .9);  /* Black w/opacity */
  padding-bottom: 100px;
}

.overlay-content {
  z-index: 2;
  position: relative;
  top: 25%; 
  width: 100%; 
  text-align: center; 
}

.overlay-a {
  padding: 8px;
  text-decoration: none;
  color: #818181;
  display: inline-block; 
  transition: 0.5s; 
}
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px;
}
.nav-content{
        display: flex;
        width: 80%;
        margin: 0 auto;
        flex-direction: column;
        justify-content: space-around;
        background-color: rgb(221, 181, 181);
        background-color: rgb(221, 181, 181,.8);
        border-radius: 5px;
        padding: 40px 10px 10px;
    }
    .nav-row{
        flex-basis: 40%;
        display: flex;
        height: 150px;
        width: 50%;
        justify-content: space-between;
        margin: 0 auto;
    }
    .na-column{
       flex-basis: 40%;
       margin: 20px; 
    }
    .title{
      width: 50%;
      margin: 0 auto;
      border-radius: 5px;
      border: 0.5px solid wheat;
      background-color: rgb(221, 181, 181);
      background-color: rgb(221, 181, 181,.8);
      padding: 20px;
    }
    @media (max-width: 650px) {
      .nav-row{
        width: 100%;
        justify-content: space-around;
    }
  }

@media(max-height: 450px) {
  .overlay .overlay-a {font-size: 20px}
  .overlay .closebtn {
    font-size: 20px;
    top: 15px;
    right: 35px;
  }
}
   
</style>
