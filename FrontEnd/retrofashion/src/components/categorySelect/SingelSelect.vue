<template>
  <div id="selectCategory">
    <h1>{{ categoryName }}</h1>
    <v-select
      style="width:100%"
      v-model="selected"
      :options="options"
      :checkboxed="true"
      :multiple="true"
    ></v-select>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

export default {
  name: "singel-select",
  props: {
    categoryName: {
      type: String,
      default: "Clothes"
    },
    options: {
      type: Array
    }
  },

  data: () => ({
    return: {
      selected: null
    }
  })
};
</script>

<style scoped>
h1,
.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 18px;
  font-weight: bold;
}

#selectCategory {
  width: 100%;
}
</style>
