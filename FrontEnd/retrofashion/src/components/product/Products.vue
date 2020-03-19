<template>
    <div class="main-container">
        <div class="category-container">
            <CategoriesBoard class="category" :groupType="groupType" :categories="categories"></CategoriesBoard>
        </div>
        <div class="product-page">
            <div style="padding: 20px">
                <div>
                    <p>Home > {{groupType}}</p>
                </div>
                <div>
                    <h3>{{groupType}}</h3>
                    <p>Lorem corporis eum! Quaerat facere harum quo nam voluptate ex, facilis soluta, eveniet illum
                        laborum aperiam dolores commodi.</p>
                </div>
                <div class="filter">
                    <input type="checkbox" id="check-filter">
                    <label for="check-filter" class="checkbtn-filter">
                        <i @click="openFilter" class="fa fa-sliders"></i>
                        <span style="margin-left:10px">Filter</span>
                    </label>
                    <div id="categoriesFilter" class="overlay">
                        <a href="javascript:void(0)" class="closebtn" style="color: black"
                            @click="closeFilter">&times;</a>
                        <div class="overlay-content">
                            <CategoriesBoard :categories="categories" class="category-overlay" :groupType="groupType">
                            </CategoriesBoard>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products-container">
                <div class="product" @click="goToProductView(product)" v-for="(product,index) in products" :key="index"
                    v-bind:id="index">
                    <productItem :product="product"></productItem>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductItem from './ProductItem'
    import CategoriesBoard from '../mainboard/CategoriesBoard'
    export default {
        name: 'products',
        props: {
            products: {
                type: Array,
                required: true
            },
            groupType: {
                type: String,
            },
            categories: {
                type: Array,
                required: true
            }
        },
        components: {
            ProductItem,
            CategoriesBoard
        },
        mounted() {
            console.log(this.products)
        },
        methods: {
            openFilter() {
                document.getElementById("categoriesFilter").style.width = "100%";
            },
            closeFilter() {
                document.getElementById("categoriesFilter").style.width = "0%";
            },
            goToProductView(product) {
                console.log(product)
                this.$store.dispatch('product/setProduct',{product})
            }
        }
    }
</script>
<style scoped>
    .products-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        flex-basis: 100%;
        margin-bottom: 150px;
    }

    .product {
        flex-basis: 20%;
        min-width: 280px;
        margin: 5px;
        min-height: 380px;
        background-color: rgb(252, 249, 249);
    }

    .product:hover {
        border: 0.5px solid rgb(240, 234, 234)
    }

    .main-container {
        display: flex;
        justify-content: space-between;
    }

    .category-container {
        flex-basis: 25%;
        padding-left: 5px;
    }

    .product-page {
        flex-basis: 80%;
        display: flex;
        flex-direction: column;
    }

    .filter {
        display: none;
        cursor: pointer;
    }

    #check-filter {
        display: none;
    }

    .category-overlay {
        padding: 20px;
        width: 100%;
    }

    .overlay {
        height: 100%;
        width: 0;
        position: fixed;
        /* Stay in place */
        z-index: 2;
        /* Sit on top */
        left: 0;
        top: 0;
        background-color: rgb(243, 235, 235);
        /* Black fallback color */
        background-color: rgba(243, 235, 235, .9);
        /* Black w/opacity */
        padding-bottom: 100px;
        overflow-x: hidden;
        /* Disable horizontal scroll */
        transition: 0.5s;
        /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
    }

    .overlay-content {
        width: 0 auto;
        z-index: 3;
        position: relative;
        top: 25%;
        /* 25% from the top */
        width: 100%;
        /* 100% width */

    }

    .overlay-a {
        padding: 8px;
        text-decoration: none;
        color: #818181;
        display: inline-block;
        transition: 0.5s;
        /* Transition effects on hover (color) */
    }

    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 40px;
    }

    @media(max-width: 950px) {
        .category-container {
            flex-basis: 25%;
        }
    }

    @media (max-width: 850px) {
        .main-container {
            flex-basis: 100%;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
        }

        .category {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .filter {
            display: block;
            width: 200px;
        }

        .category-container {
            display: none;
        }

        .products-container {
            flex-basis: 100%;
        }
    }

    @media screen and (max-height: 650px) {
        .overlay .overlay-a {
            font-size: 20px
        }

        .overlay .closebtn {
            font-size: 20px;
            top: 15px;
            right: 35px;
        }
    }
</style>