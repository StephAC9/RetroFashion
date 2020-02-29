<template>
  <div class="home">
  <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      image:''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
     createImage(file) {
       console.log(file)
      var reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
        console.log(this.image.toString())
        }
        
      reader.readAsDataURL(file);
    }, 
    removeImage: function () {
      this.image = '';
    },
  }
}
</script>
<style  scoped>
#app {
  text-align: center;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}


</style>
