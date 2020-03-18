<template>
    <div class="home">
<!--  <div class="left"></div> -->      
    <div>
        <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators >
        <b-carousel-slide
          class="img1-carrousel img-carroussel-height" 
          caption="Vintage kids"
        ></b-carousel-slide>
        <b-carousel-slide
          class="img2-carrousel img-carroussel-height" 
          caption="Vintage women"
        ></b-carousel-slide>
        <b-carousel-slide
          class="img3-carrousel img-carroussel-height" 
          caption="Vintage men"
        >
        </b-carousel-slide>
        </b-carousel>
        <div class="info">
          <div class="info-element">
            <p class="title"><strong>NEED HELP?</strong></p><br>
            <p class="text">If you need some help, you can contact us <a class="link" href="mailto:retrofashion@yahoo.com">here</a> </p>
          </div>
          <div class="info-element">
            <p class="title"><strong>FAST DELIVERY</strong></p><br>
            <p class="text">Free delivery from shopping above 500Kr</p>
          </div>
          <div class="info-element">
            <p class="title"><strong>FREE RETURN</strong></p><br>
            <p class="text">Return free of charges within 30days.</p>
          </div>
        </div>
        <div class="category">
          <div class="category-element">
            <img style="width:100%;height:300px" src="../../../Images/fix-images/zara-spring-collection-here-139593.jpg" alt="">
            <div style="margin-top:20px;margin-bottom:10px">
              <p style="padding:5px;"> <strong>Vintage Kids</strong></p>
            </div>
          </div>
          <div class="category-element">
            <img style="width:100%;height:300px" src="../../../Images/fix-images/30-vintage-looks-to-bring-back-this-summer-from-the-50s-to-90s-9.jpg" alt="">
            <div style="margin-top:20px;margin-bottom:10px">
              <p style="padding:5px;"> <strong>Vintage Women</strong></p>
            </div>
          </div>
          <div class="category-element">
            <img style="width:100%;height:300px" src="../../../Images/fix-images/90s-looks-19-dad.jpg" alt="">
            <div style="margin-top:20px;margin-bottom:10px">
              <p style="padding:5px;"> <strong>Vintage Men</strong></p>
            </div>
          </div>    
        </div>
        <div class="title-sub-category"><p><strong>WE OFFER GOOD QUALITY ARTICLES SUITABLE FOR ALL TYPES OF OCCASIONS.</strong></p></div>
        <div class="sub-category">
          <div class="box img-height">
            <b-card
              class="img1"
              overlay
              img-alt="Card Image"
              text-variant="white"
              title="50s Summer">
            </b-card>
          </div>
          <div class="box img-height">
            <b-card
              class="img2"
              overlay
              img-alt="Card Image"
              text-variant="white"
              title="Men Business">
            </b-card>
          </div>
          <div class="box img-height">
            <b-card
              class="img3"
              overlay
              img-alt="Card Image"
              title="Wedding">
            </b-card>
          </div>
          <div class="box img-height">
            <b-card
              class="img4"
              overlay
              img-alt="Card Image"
              title="Party, Wedding guess, Summer, Sun">
            </b-card>
          </div>
        </div>
      </div>
<!--       <div class="right"></div> 
 --></div>
</template>

<script>
//import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  /* created(){
    this.$store.dispatch('women/fetchWomenProducts')
    this.$store.dispatch('men/fetchMenProducts')
    this.$store.dispatch('fetchClothesProducts')
    this.$store.dispatch('fetchShoesProducts')
    this.$store.dispatch('fetchProductsOnSales')
    this.$store.dispatch('fetchAccessories')
  } */
  beforeCreate(){
    this.$store.dispatch('layouts/inHomePage')
  },
}
</script>
<style  scoped>
  img{
    cursor: pointer;
    width:100%;
    height:300px;
  }
  .img-carroussel-height{
    height: 400px;
  }
  .sub-category{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 3px;
    border: 0.5px solid rgb(167, 163, 161);
    margin-bottom: 100px;
  }
  .box{
    flex-basis: 50%;
    padding: 10px;
    min-width: 350px;
  }
  .img1-carrousel{
    cursor: pointer;
    background-size: 100%;
    background-image: url('../../../Images/fix-images/7638fc6e0c3c3b7d1dc7971e7b11345c.jpg');
    background-repeat: no-repeat;
    z-index: 0;
  }
  .img2-carrousel{
    cursor: pointer;
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url('../../../Images/fix-images/c5d9c2_7b584c595cf14efca1f5b27188d15c8f.jpg');
  }
  .img3-carrousel{
    cursor: pointer;
    z-index: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url('../../../Images/fix-images/7abc126c9bae21e6d2942b46b0d20fc9.jpg');
  }
  .img1{
    cursor: pointer;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../../Images/fix-images/mens-fashion-in-the-1950s-summer-beach-outfits.jpg');
    background-repeat: no-repeat;
  }
  .img2{
    cursor: pointer;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../../Images/fix-images/2754.jpg');
  }
  .img3{
    cursor: pointer;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../../Images/fix-images/94406_1.jpeg');
  }
  .img4{
    cursor: pointer;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../../Images/fix-images/240582-9096-l-dYMaTeX.jpg');
  }
  .info{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .info-element{
    flex-basis: 30%;
    text-align: center;
  }
  .title{
    text-align:center; 
    font-size:17px;
    color: rgb(116, 113, 112);
  }
  .text{
    text-align:center;
    padding-left:10px;
    padding-right:10px;
    color: rgb(167, 163, 161);
  }

  .link{
    text-decoration: underline;
    color: black;
  }
  .category{
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
  }
  .category-element{
    flex-basis: 31%;
    padding:5px;
    min-width: 350px;
  }
  .img-height{
    height: 500px;
  }
  .title-sub-category{
    font-size:25px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 10px;
    color: rgb(116, 113, 112);
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 950px) {
    .img-carroussel-height{
      height: 320px;
    }
    .text{
    font-size: smaller;
    }
  }
  @media (max-width: 850px) {
    .title{
      font-size:13px;
      height: 20px;
    }
    .img-carroussel-height{
      height: 290px;
    }
    .text{
    font-size: smaller;
    }
  }
  @media (max-width: 650px) {
    .img-carroussel-height{
      height: 200px;
    }
    .text{
    font-size: smaller;
    }
    .title-sub-category{
      font-size:17px;
      margin-top: 70px;
    }
  }
  
</style>
