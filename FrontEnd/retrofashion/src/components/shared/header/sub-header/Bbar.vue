<template>
<div>
     <nav>
            <div class="nav-elements">
              <input type="checkbox" id="check">
              <label for="check" class="checkbtn">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </label>
              <div class="nav-bar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown 
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <div class="header">
                        <h2>Mega Menu</h2>
                    </div>   
                    <div class="row">
                        <div class="column">
                        <h3>Category 1</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                        <div class="column">
                        <h3>Category 2</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                        <div class="column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>             
              </div>         
            <div class="search">
              <input type="checkbox" id="check-search">
              <label for="check-search" class="checkbtn-search">
                <i class="fa fa-search"></i>
              </label>
              <div class="search-box">
              </div> 
            </div>
    </nav>
 </div>
</template>
<script>
export default {
    name:'bottom-bar',
    components:{
    },
    data(){
      return{
      }
    },
   
}
</script>
<style scoped>
.btn:focus {
    outline: 0;
    box-shadow: none!important;
}

.navbar {
    display: flex;
    flex-direction: column;
    background: #203139;
    width: 100%;
}

.main-header-container {
    background: #203139;
}

.top-bar {
    padding-top: 5px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
}

.bottom-bar {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #111d22;
}

.bar-left {
    flex-basis: 33%;
}

.bar-center {
    flex-basis: 33%;
}

.bar-right {
    display: flex;
    flex-basis: 33%;
    justify-items: end;
    height: 100%;
}

form.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
}

form.example button {
    float: left;
    width: 20%;
    padding: 10px;
    background: rgb(247, 73, 125);
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
}

.cart {
    flex-basis: 30%;
    padding-left: 10%;
}

.items-number {
    position: relative;
    z-index: 1;
    border-radius: 50%;
    height: 40%;
    width: 23px;
    left: 17px;
    background: rgb(185, 69, 69);
    color: white;
    font-size: 10px;
}

.cart-icon {
    position: absolute;
    margin-top: 5px;
    height: 40%;
    width: 30px;
    top: 18px;
}

nav {
    background: #152429;
    width: 100%;
    height: 40px;
    display: flex;
    z-index: 2;
}

.nav-elements {
    flex-basis: 100%;
    overflow: hidden;
}

.logo {
    color: white;
    font-size: 35px;
    font-weight: bold;
}

nav .nav-bar {
    width: 100%;
    margin-right: 20px;
    z-index: 0;
    padding-top: 8px;
}

nav a {
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

.checkbtn {
    font-size: 25px;
    color: rgb(230, 230, 230, 2);
    cursor: pointer;
    display: none;
    margin-left: 10px;
}

.checkbtn-search {
    font-size: 16px;
    color: rgb(230, 230, 230, 2);
    cursor: pointer;
    display: none;
    margin-left: 10px;
}

#check {
    display: none;
}

#check-search {
    display: none;
}

.search {
    flex-basis: 70%;
    text-align: end;
    padding-top: 5px;
    padding-right: 20px;
    display: none;
}

a:hover {
    background: none;
    color: transparent;
    text-decoration: none;
}

@media (max-width: 1100px) {
    .logo {
        font-size: 25px;
        display: inline-box;
    }
    nav .nav-bar a {
        font-size: 14px;
    }
    .nav-elements {
        padding-left: 0;
    }
    nav {
        display: flex;
    }
}

@media (max-width: 952px) {
    nav {
        display: flex;
    }
    .logo {
        font-size: 25px;
        display: inline-box;
    }
    nav .nav-bar  a {
        font-size: 14px;
    }
    .nav-elements {
        padding-left: 0;
    }
}

@media (max-width: 850px) {
    nav {
        display: flex;
    }
    .checkbtn {
        display: block;
    }
    .checkbtn-search {
        display: block;
    }
    .search {
        display: block;
        flex-basis: 70%;
    }
    .nav-elements {
        flex-basis: 30%;
    }
    .elements{
         position: fixed;
        width: 100%;
        background: #2c3e50;
        left: -100%;
        top: 120px;
        text-align: center;
        transition: all .5s;
        font-family: cursive, sans-serif;
    }
    .nav-bar {
        position: fixed;
        width: 100%;
        background: #2c3e50;
        left: -100%;
        top: 120px;
        text-align: center;
        transition: all .5s;
        font-family: cursive, sans-serif;
    }
    .search-box {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        right: -100%;
        text-align: center;
        transition: all .5s;
        top: 126px;
    }
    nav .nav-bar {
        display: block;
        margin: 50px 0;
        font-family: cursive, sans-serif;
    }
    nav .nav-bar a {
        font-size: 10px;
    }
    a:hover {
        background: none;
        text-decoration: none;
    }
    #check:checked~.nav-bar {
        left: 0;
    }
    #check-search:checked~.search-box {
        right: 0;
    }
    .cart {
        padding-left: 15%;
    }
    .bar-center {
        display: none
    }
    .bar-left {
        flex-basis: 65%;
        padding-left: 30px;
    }
}

.login {
    width: 300px;
    height: 300px;
    padding: 5px;
    text-align: center;
}

.login-input {
    width: 80%;
    height: 40px;
    display: inline-block;
    padding: 10px;
    border: 1 solid;
    background-color: #f1f1f1;
}

.login-input:focus {
    outline: 0;
    box-shadow: none!important;
}

#login-link-forgotten-pass:hover,
#login-link-register:hover {
    background: transparent;
}

/* Navbar container */

/* Links inside the navbar */
.nav-elements a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px; 
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Mega Menu header, if needed */
.dropdown-content .header {
  background: red;
  padding: 16px;
  color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #ccc;
  height: 250px;
}

/* Style links inside the columns */
.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a background color on hover */
.column a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

  
</style>


