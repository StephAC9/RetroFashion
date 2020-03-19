<template>

    <div id="product">

        <carousel-3d :controls-visible="true" :clickable="false">
            <slide v-for="(image, i) in product.productImages" :index="i" v-bind:key="image">
                <img :src="require(`../../../../../../Images/${product.productImages}`)">
                <figure>

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

    // img :src = "require(`../../../../../../Images/${product.productImages}`)"

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
        data() {
            return {
                slides: 7,
                product: null


            };
        },
        watch: {

            products(value) {
                if (value !== null || value !== undefined) {
                    this.product = this.products
                    console.log(this.products)
                }
            }
        },
        mounted() {

            console.log('mounted')
            this.product = this.products
            console.log(this.product.productName)


        }

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