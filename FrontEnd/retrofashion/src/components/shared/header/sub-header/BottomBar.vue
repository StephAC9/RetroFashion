<template>
<div>
     <nav>
            <div class="nav-elements">
               <div class="dropdown-media" style="text-align:start; pading-bottom:3px">
                <div class="dropdown">
                  <i class="fa fa-bars dropbtn" @click="openNav" style="font-size:18px" aria-hidden="true"></i> 
                    <MegaMenu layout="media"></MegaMenu>
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
                <i @click="openNav"  class="fa fa-search"></i>
              </label>
              <!-- The overlay -->
              <div id="myNav" class="overlay">

                <!-- Button to close the overlay navigation -->
                <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>

                <!-- Overlay content -->
                <div class="overlay-content">
                  <div class="search-bar" >
                    <input type="text" id="mySearch" onkeyup="" placeholder="Search.." title="Type in a category">
                    <i @click="openNav"  class="fa fa-search" style="color:white"></i>
                  </div><hr>
                  <div class="title"><h3>Popular</h3>
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
      /* Open when someone clicks on the span element */
      openNav() {
        document.getElementById("myNav").style.width = "100%";
      },

/* Close when someone clicks on the "x" symbol inside the overlay */
      closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
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
  outline: 0;
  box-shadow: none!important;
  color:whitesmoke;
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */    
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(3, 3, 3); /* Black fallback color */
  background-color: rgba(3, 3, 3, 0.9);  /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  z-index: 2;
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  /* margin-top: 30px; */ /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay-a {
  padding: 8px;
  text-decoration: none;
  color: #818181;
  display: inline-block; /* Display block instead of inline */
  transition: 0.5s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
/* .overlay-a:hover, .overlay-a:focus {
  color: #f1f1f1;
} */

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay .overlay-a {font-size: 20px}
  .overlay .closebtn {
    font-size: 20px;
    top: 15px;
    right: 35px;
  }
}
   
</style>

