<template>
<div>
     <nav>
            <div class="nav-elements">
              <input type="checkbox" id="check">
              <label for="check" class="checkbtn">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </label>         
              <ul>
               <li>
                  <a href="/news">News</a>
               </li>
               <li>
                 <a href="/Dam">Women</a>
               </li>
               <li> 
                 <a href="/Men">Men</a>
               </li>
               <li>
                 <a href="/Children">Children</a>
               </li>
               <li>
                 <a class="shoes" href="/shoes">Shoes</a>
               </li>
               <li>
                 <a href="/clothes">Clothes</a>
               </li>
               <li>
                 <a href="/accessories">Accessories</a>
               </li>
               <li>
                 <a href="/sales">Sales</a>
               </li>
               <li>
                 <a href="/best sellers">Best sellers</a>
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
 </div>
</template>
<script>
export default {
    name:'bottom-bar',
    data(){
      return{
        items: true,
      }
    },
   
}
</script>
<style scoped>
  a:hover {
      transition: .5s;
      text-decoration: none;
      color:whitesmoke;
      border-bottom: 3px solid white;
  }
  nav {
        display: flex;
        text-align: center;
  }
  @media (max-width: 850px) {
    nav {
        display: flex;
        text-align: justify;
    }
    .search {
        display: block;
        flex-basis: 70%;
    }
    .nav-elements {
        flex-basis: 30%;
    }
  }
  .inferior-bar-women{
    width: 100%;
    height: 300px;
    border-bottom: 1 solid black;
    transition: .5s;
    background: gray;
    z-index: 2;
}
  
</style>

