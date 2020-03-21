<template>
  <div>
    <div class="navbar">
      <div class="top-bar">
        <div class="bar-left">
          <b-navbar-brand
            style="background: none; font-family:cursive, sans-serif;text-decoration: none;"
            class="logo a"
            href="/home"
          >
            <h1 style="display:inline">R</h1>etroFashion
          </b-navbar-brand>
        </div>
        <div class="bar-center">
          <form class="example" action="#">
            <input type="text" placeholder="Search.." name="search" />
            <button class="btn" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div class="bar-right">
          <div class="bar-right-content">
            <div class="nav-icon">
              <button class="btn-icon" :id="`popover-2-${placement}`">
                <i class="fa fa-user _icon" style="margin-left:2px"></i>
              </button>
              <popover layout="login"></popover>
              <div class="desciption">Login</div>
            </div>
            <div class="nav-icon favorites">
              <button class="btn-icon">
                <i class="fa fa-gratipay _icon" style="margin-left:5px"></i>
              </button>
              <div class="desciption">Favorites</div>
            </div>
            <div @click="goToCart" class="nav-icon">
              <button class="btn-icon" :id="`popover-1-${placement}`">
                <i class="fa fa-cart-arrow-down _icon" style="margin-right:5px"></i>
              </button>
              <popover layout="cart"></popover>
              <div style="width: 100%;margin-left:6px; text-align:start" class="desciption">Cart</div>
              <div v-if="count > 0" class="items-count-notification">
                <p style="color:white;">
                  <strong>{{count}}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Popover from "../../../popover/Popover";
import {mapGetters} from 'vuex'
export default {
  name: "top-bar",
  components: {
    Popover
  },
  data: () => ({
    items: false,
    placement: "bottomleft"
  }),
  computed:{
    ...mapGetters('cart',['count'])
  },

  mounted(){
    console.log(this.count)
  },
  methods: {
    goToCart() {
      console.log("go to Cart");
      this.$store.dispatch('cart/goToCart')
    }
  },

}

</script>
<style scoped>
@import "../../../../assets/css/header-style.css";

a:hover {
  transition: 0.5s;
  text-decoration: none;
  color: whitesmoke;
  border-bottom: 3px solid white;
}

a {
  font-size: 30px;
}

.bar-right-content {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.nav-icon {
  flex-basis: 15%;
  text-align: end;
  padding-top: 10px;
  max-width: 50px;
  position: relative;
  z-index: 0;
}

.desciption {
  color: white;
  font-size: 10px;
  z-index: 2;
  top: 25px;
  font-family: cursive, sans-serif;
  position: absolute;
  margin-top: 5px;
}

.btn-icon {
  padding: 0;
  border: none;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 1;
  outline: none;
}

._icon {
  font-size: 30px;
  color: rgb(230, 230, 230, 2);
}

.items-count-notification {
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 25px;
  background: rgb(247, 73, 125);
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  font-size: 7px;
  padding-top: 8px;
  z-index: 2;
  top: -12px;
  left: 15px;
}

@media (max-width: 1150) {
  .items-count-notification {
    right: 70px;
  }
}

@media (max-width: 1000) {
  .items-count-notification {
    right: 100px;
  }
}

@media (max-width: 900) {
  .items-count-notification {
    right: 110px;
  }
}

@media (max-width: 1150) {
  .items-count-notification {
    right: 90px;
  }
}

@media (max-width: 850px) {
  .nav-icon {
    text-align: center;
  }

  .desciption {
    text-align: center;
  }

  .bar-right-content {
    width: 80%;
    justify-content: space-around;
  }
}

@media (max-width: 650px) {
  .nav-icon {
    text-align: center;
    margin: 5px;
    margin-bottom: 10px;
  }

  .desciption {
    text-align: center;
  }

  .bar-right-content {
    width: 100%;
  }

  .favorites {
    display: none;
  }
}
</style>