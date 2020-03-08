<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button class="btn btn-primary" @click="checkout">GOTO Payment</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    checkout() {
      // $(’#miniCart’).modal(’hide’)
      this.$router.push("/payment");
    }
  }
};
</script>
