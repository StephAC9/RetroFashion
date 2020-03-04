<template>
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
                 <a href="/Dam">Dam</a>
               </li>
               <li>
                 <a href="/Men">Men</a>
               </li>
               <li>
                 <a href="/Children">Children</a>
               </li>
               <li>
                 <a href="/shoes">Shoes</a>
               </li>
               <li>
                 <a href="/clothes">Clothes</a>
               </li>
               <li>
                 <a href="#">Accessories</a>
               </li>
               <li>
                 <a href="/rea">Rea</a>
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
</template>
<script>
export default {
    name:'bottom-bar'
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

</style>

