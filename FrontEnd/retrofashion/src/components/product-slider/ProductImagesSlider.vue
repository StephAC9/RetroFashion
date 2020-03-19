<template>
  <div>
    <hooper :settings="hooperSettings" style="height: 600px; width:600px; ">
      <slide v-for="(slide, indx) in images" :key="indx" :index="indx">
        <img style="width: 100%; height: 100%;" :src="
            require(`../../../../Images/women/clothes/Dickies Dark Denim Blue Bootcut Jeans/${slide.src}`)
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
  .product-images.container {
    height: 640px;
    width: 500px;
  }
</style>