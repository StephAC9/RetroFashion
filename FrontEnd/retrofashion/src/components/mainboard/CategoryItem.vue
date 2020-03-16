<template>
  <div class="item" role="tablist">
    <b-card style="border:none" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <div class="category-item" @click="show = !show" style="border:none;background:transparent" block  v-b-toggle= "'accordion-'+category.id" variant="light">
          <div style="flex-basis:50%">{{category.name}}</div>
          <div  style="flex-basis:50%;" v-if="isOpen == true"><i class="fa fa-window-minimize sign"></i></div>
          <div style="flex-basis:50%" v-else><i class="fa fa-plus sign"></i></div>
        </div>
      </b-card-header>
      <b-collapse :id="`accordion-${category.id}`" role="tabpanel">
        <b-card-body>
          <!-- <div>
            <SelectedCategories
            v-model="selected"
            :options="category.elements"
            ></SelectedCategories>
          </div> -->
          <b-form-group>
          <CategoryForm style="min-width:123px" :category="category"></CategoryForm>
          </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
//import SelectedCategories from '../categorySelect/SingelSelect'
import CategoryForm from './CategoryInputForm'
  export default {
    name:'CategoryItem',
    components:{
      CategoryForm,
      //SelectedCategories
    },
    props:['category'],
    data() {
      return {
        show: false,
        isOpen: false,
        selected:null
      }
    },
    watch:{
      show(val){
        if(val !== null || val !== undefined){
          if(this.show == false){
            this.isOpen = false
          }else{
            this.isOpen = true
          }
        }
      }
    },
  }
</script>
<style scoped>
  .category-item{
    display: flex;
    min-width: 140px;
    height: 50px;
    padding-top: 12px;;
    padding-left: 10px;
  }
  .sign{
    font-size: 20px;
    font-weight: lighter;
    text-align:end;
    color: rgb(149, 151, 153); 
    width:100%;
    transition-duration: 0.9;
  } 
  @media (max-width: 750px) {
      .sign{
        font-size: 12px;
      } 
  }

  @media (max-width: 650px) {
      .sign{
        font-size: 10px;
      } 
  }
</style>
