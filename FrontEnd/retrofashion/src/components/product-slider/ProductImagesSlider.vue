<template>
  <div>
    <hooper class="product-images" :settings="hooperSettings" >
      <slide  v-for="(slide, indx) in product.productImages" :key="indx" :index="indx">
        <img style="width: 450px; height: 500px;" :src="
            require(`../../../../Images/${slide}`)
          " />
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
  </div>
</template>

<script>
  import {
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
    Progress as HooperProgress
  } from "hooper";
  import "hooper/dist/hooper.css";

  export default {
    name: "ProductImagesSlider",
    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
      HooperProgress
    },
    props:['product'],
    data() {
      return {
        images: [
          { src: "110913_1_2048x2048.jpg" },
          { src: "110913_2_2048x2048.jpg" },
          { src: "110913_3_2048x2048.jpg" },
          { src: "110913_4_2048x2048.jpg" },
          { src: "110913_5_1024x1024.jpg" }
        ],
        hooperSettings: {
          itemsToShow: 1,
          centerMode: true,
          breakpoints: {
            800: {
              centerMode: true,
              itemsToShow: 1
            },
            1000: {
              itemsToShow: 1,
              centerMode: true
            }
          }
        }
      };
    }
  };
</script>
<style scoped>
.product-images{
  height: 500px;
  max-width: 500px;
  text-align: center;
  outline: none;
}
  
</style>