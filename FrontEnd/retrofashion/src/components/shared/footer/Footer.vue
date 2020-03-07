<template>
    <div class="main-footer-container">
        <TopFooter></TopFooter>
        <BottomFooter></BottomFooter>
    </div>
</template>
<script>
import TopFooter from './sub-footer/TopFooter'
import BottomFooter from './sub-footer/BottomFooter'

export default {
    name: 'Footer',
    components:{
        TopFooter,
        BottomFooter
    }
}
</script>
<style scoped>
.main-footer-container{
    background-color: #203139;
}
   
</style>