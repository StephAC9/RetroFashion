<template>
  <div id="selectCategory">
    <h1>{{ categoryName }}</h1>
    <v-select
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
  font-size: 26px;
  font-weight: 600;
}

#selectCategory {
  max-width: 25%;
}
</style>
