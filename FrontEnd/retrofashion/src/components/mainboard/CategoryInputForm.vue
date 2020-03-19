<template>
        <b-form-checkbox-group
              style="min-width:123px"  
              v-model="selected"
              :options="category.elements"
              :name="`flavour-${category.name}`"
              stacked
              >
              <div class="selected-items" v-if="show">
                  <div class="item" >
                    <div v-for="(item,index) in selected" :key="index" v-bind:id="index">
                     <div>{{item}}</div><br>
                    </div>
                  </div>
                  <div>
                    <a style="text-decoration:underline; cursor:pointer" @click="fetchRelatedCategory">search</a>
                  </div>
              </div>
        </b-form-checkbox-group>
</template>
<script>
export default {
    name:'CategoryInputForm',
    props:{
        category: {
            type: Object,
            required: true
        },
        groupType: {
          type: String,
          required: true
        }
    },
    data(){
        return{
            selected: [],
            show: false
        }
    },

    watch:{
        selected(v){
            if(v !== null || v !== undefined){
                console.log(this.selected)
                if(this.selected.length > 0) {
                    this.show = true
                } else{
                    this.show = false
                }              
            }
        }
    },
    methods:{
         fetchRelatedCategory(){
             console.log('TargetedGroup:  '+ this.groupType)
             this.$store.dispatch(this.groupType.toLowerCase()+"/filterProducts",{selected: this.selected})
        },
    }
}
</script>
<style scoped>
    .selected-items{
        width:100%;
        display: flex;
        justify-content: space-between;
        border: 0.5px solid rgb(209, 208, 207);
        border-radius: 5px;
        padding: 10px;
        margin-top: 20px;
    }
    .item{
        flex-basis: 60%;
        color: rgb(104, 100, 100);
        font-size: smaller;
    }
    a{
        color: black;
        text-decoration: underline;
    }
    a:hover{
        color: rgb(51, 50, 50);
    }
    .search{
        text-decoration: underline;
        cursor: pointer;
    }

</style>