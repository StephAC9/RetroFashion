<template>
  <v-app>
      <div class="navbar">
        <div class="top-bar">
          <div class="bar-left">
              <b-navbar-brand style="background: none; font-family:cursive, sans-serif;" class="logo" href="/"><h1 style="display:inline">R</h1> etroFashion</b-navbar-brand>
            </div>
            <div class="bar-center" >
              <form class="example" action="#">
                <input type="text" placeholder="Search.." name="search">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="bar-right">
              <div style="flex-basis:70%; text-align:end; padding-top:10px">
                <button class="btn" :id="`popover-2-${placement}`" style="padding: 0; border: none; background: none;">
                  <i class='fa fa-user' style='font-size:30px;color:rgb(230,230,230,2)'></i>
                </button>
                 <b-popover
                  :placement="placement"
                  :target="`popover-2-${placement}`" 
                  title="LOGIN"
                  triggers="focus"
                  :content="`Placement ${placement}`"
                  >
                      <div style="width:300px; padding:10px">
                        <div>

                        <input class="login-input" type="text" id="email" name="email"><br><br>
                        </div>
                        <input class="login-input" type="password" id="password" name="password"><br><br>
                        <input style="background:rgb(247, 73, 125);font-weight:bold; color:rgb(230,230,230,2)" class="login-input" type="submit" value="LOGIN">
                      </div>
                      <div>
                        <div>
                          <h4 style="text-align:center;color:#152429"><a style="color:#152429" id="login-link-register" href="#">Register</a></h4>
                        </div>
                        <div>
                          <p style="text-align:center; color:#152429"><a style="color:#152429"  id="login-link-forgotten-pass" href="#">Forgotten password?</a></p>
                        </div>
                      </div>
                  </b-popover> 
                <div style="color: white; font-size:10px; z-index: 2; top:25px;text-align:end; font-family:cursive, sans-serif;">Login</div>
              </div>
              <div class="cart">
                  <div v-show="items" class="items-number">
                      <p style="text-align:center; padding-top:5px"><strong>1</strong></p>
                  </div>
                  <div class="cart-icon">
                    <button class="btn" :id="`popover-1-${placement}`" style="margin: 0 auto; padding: 0; border: none; background: none;">
                      <i class="fa fa-cart-arrow-down" style="font-size:30px;color:rgb(230,230,230,2);"></i>
                    </button>
                    <b-popover
                      :target="`popover-1-${placement}`"
                      :placement="placement"
                      title="Popover!"
                      triggers="hover focus">
                      Hello
                    </b-popover>
                    <div style="color: white; font-size:10px; z-index: 2; text-align:center;font-family:cursive, sans-serif;">Cart</div>
                  </div>
              </div>
            </div>
        </div>
        </div>
        <nav>
            <div class="nav-elements">
              <input type="checkbox" id="check">
              <label for="check" class="checkbtn">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </label>         
              <ul>
               <li>
                 <a href="/">Home</a>
               </li>
               <li>
                 <a href="#">About</a>
               </li>
               <li>
                 <a href="#">hfjh</a>
               </li>
               <li>
                 <a href="#">tyryuti</a>
               </li>
               <li>
                 <a href="#">werqtry</a>
               </li>
              </ul>
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
    <section>
    <router-view/>
    </section>
  </v-app>
 </template>

<script>
export default {
  name: 'App',
  components:{
  },
  data: () => ({
    items: true,
    placement:'bottomleft',
  }),
 
};
</script>
<style scoped>
body{
  /* font-family: montserrat; */
  font-family:cursive, sans-serif;
}
.btn:focus {
    outline: 0;
    box-shadow: none!important;
}
  .navbar{
    display: flex;
    flex-direction: column;
    background: #203139;
    width: 100%; 
  }
  .top-bar{
    padding-top:5px;
    padding-bottom: 10px;  
    width: 100%;
    display: flex;
  }
  .bottom-bar{
    width: 100%;
    padding-top:10px;
    padding-bottom: 10px;
    background: #111d22; 
  }
  .bar-left{
    flex-basis: 33%;
  }
  .bar-center{
    flex-basis: 33%;
  }
  .bar-right{
    display: flex;
    flex-basis: 33%;
    justify-items: end;
    height: 100%;
    
  }
  /* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: rgb(247, 73, 125);
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}
.cart{
  flex-basis:30%; 
  padding-left:10%;
} 
.items-number {
  position: relative;
  z-index: 1;
  border-radius: 50%;
  height: 40%;
  width: 23px;
  left: 17px;
  background: rgb(185, 69, 69);
  color:white;
  font-size: 10px;
}
.cart-icon {
  position: absolute;
  margin-top: 5px;
  height: 40%;
  width: 30px;
  top: 18px;
}
nav{
  background: #152429;
  width: 100%;
  height: 40px;
  display: flex;
  z-index: 2;

}
.nav-elements{
  flex-basis: 100%;
}
.logo{
  color: white;
  font-size: 35px;
  font-weight: bold;
}
nav ul{
  width: 100%;
  margin-right: 20px;
  margin-top: 7px;
  z-index: 0;
}
nav ul li{
  display: inline-block;
  margin: 0 5px;
}
nav ul li a{
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,a:hover{
background: #2c3e5A;
  transition: .5s;
  text-decoration: none;
}
.checkbtn{
  font-size: 25px;
  color: rgb(230,230,230,2);
  cursor: pointer;
  display: none;
  margin-left: 10px;
}
.checkbtn-search{
  font-size: 20px;
  color: rgb(230,230,230,2);
  cursor: pointer;
  display: none;
  margin-left: 10px;
}
#check{
  display: none;
}
#check-search{
  display: none;
}
.search{
  flex-basis:70%; 
  text-align: end; 
  padding-top:5px;
  padding-right:20px;
  display: none;
}
@media (max-width: 952px){
  .logo{
    font-size: 25px;
    display: inline-box;
  }
  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 550px){
  .checkbtn{
    display: block;
  }
  .checkbtn-search{
    display: block;
  }
  .search{
    display: block;
  }
  .nav-elements{
    flex-basis: 30%;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    left: -100%;
    top:120px;
    text-align: center;
    transition: all .5s;
    font-family:cursive, sans-serif;
  }
  .search-box{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    right: -100%;
    text-align: center;
    transition: all .5s;
    top:126px;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    font-family:cursive, sans-serif;
    
  }
  nav ul li a{
    font-size: 20px;
  }
  a:hover,a.active{
    background: none;
  }
  #check:checked ~ ul{
    left: 0;
  }
  #check-search:checked ~ .search-box{
    right: 0;
  }
  .cart{
    padding-left:15%;
  }
  .bar-center{
    display: none
  }
  .bar-left{
    flex-basis: 65%;
    padding-left:30px;
  }
}
/* section{
  background: url(bg1.jpg) no-repeat;
  background-size: cover;
  height: calc(100vh - 80px);
} */

.login{
  width:300px;
  height: 300px;
  padding: 5px;
  text-align: center;
}
.login-input{
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
/* #login-link:hover{
  background: transparent;
} */
#login-link-forgotten-pass:hover,#login-link-register:hover{
  background: transparent;
}

</style>
