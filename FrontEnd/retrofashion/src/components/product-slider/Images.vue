<template>
    <div class="product-images-viewer">
        <div class="multi-show">
            <div @click="showIt(index)" class="img-box" v-for="(image,index) in product.productImages" :key="index">
                <img style="width:100%; height:100px" :src="require(`../../../../Images/${image}`)" alt="">
            </div>
        </div>
        <div class="preview">
            <img style="width:100%; height:100%" :src="require(`../../../../Images/${_image}`)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'Images',
    props:['product'],
    data:()=>({
        _image:''
    }),
    created(){
        this._image = this.product.productImages[0]
    },
    methods:{
        showIt(index){
            this._image = ''
            console.log('clicked')
            this._image = this.product.productImages[index]
            console.log(this._image)
        }
    }



}
</script>
<style scoped>
.product-images-viewer{
    display: flex;
    width: 600px;
}
.multi-show{
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
}
.preview{
   flex-basis: 70%; 
}
.img-box{
    width: 100%;
    height: 70px;
}
</style>