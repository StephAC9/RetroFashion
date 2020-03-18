<template>
  <div>
    <div class="product-images-container">
      <div class="thumbnail-container">
        <div class="thumbnail-image">1</div>
        <div class="thumbnail-image">2</div>
        <div class="thumbnail-image">3</div>
        <div class="thumbnail-image">4</div>
        <div class="thumbnail-image">5</div>
      </div>
      <div class="selected-image-container">
        <div
          style="width: 100%; height: 100%;"
          v-for="(i, index) in images"
          :key="index"
        >
          <img
            style="width: 100%; height: 100%;"
            :src="require(`../../../../Images/${i}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductImagesViewer",
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    ...mapGetters("women", ["products"])
  },

  data: () => ({
    images: ["men/shoes/high converse/1_5122_ZM_ALT1.jpg"],
    currentIndex: 0,
    product: null
  }),

  created() {
    console.log(this.products);
  }
};
</script>

<style scoped>
.product-images-container {
  display: flex;
  height: 400px;
  width: 640px;
  border: solid;
}
.thumbnail-container {
  flex-basis: 20%;
  border: solid;
  background-color: yellow;
}
.selected-image-container {
  flex-basis: 80%;
  height: 100%;
  border: solid;
  background-color: tomato;
}
.thumbnail-image {
  width: 100%;
  height: 20%;
  border: solid;
  padding: 2px;
}
</style>
