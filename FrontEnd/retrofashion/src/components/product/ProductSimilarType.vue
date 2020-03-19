<template>

    <div id="product">
        <carousel-3d :controls-visible="true" :clickable="false">
            <slide v-for="(slide, i) in slides" :index="i" v-bind:key="slide">
                <figure>
                    <img :src="require('../../../../../../Images/${product.productImages}')" alt="img">
                    <figcaption>
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!

                    </figcaption>
                </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>

    //import { Carousel3d, Slide } from 'vue-carousel-3d';
    import Vue from 'vue';

    import { Carousel3d, Slide } from 'vue-carousel-3d';

    Vue.use(Carousel3d);
    import { mapGetters } from 'vuex'

    export default {
        name: 'ProductSimilarType',



        components: {
            Carousel3d,
            Slide,
            ...mapGetters('women', ['products'])
        },
        watch: {

            products(value) {
                if (value !== null || value !== underfined) {
                    this.product = this.products[0]
                    console.log(this.products)
                }
            }
        },
        mounted() {
            console.log('mounted')
            this.product = this.products
        },

        data() {
            return {
                slides: 7,

                product: null,
                /*  images: [
                     { }
                 ] */


            };
        },

    };
</script>

<style scoped>
    .carousel-3d-container figure {
        margin: 0;
    }

    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }
</style>