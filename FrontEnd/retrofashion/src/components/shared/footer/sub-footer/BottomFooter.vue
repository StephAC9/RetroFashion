<template>
    <div class="container-footer-bottom">
        <div class="sm">
            f
        </div>
        <div class="sm">
            in
        </div>
    </div>
</template>
<script>
export default {
    name: 'BottomFooter'
}
</script>
<style scoped>
    .container-footer-bottom{
        display: flex;
        background-color: #152429;
        padding: 10px;
        height: 100px;
        justify-content: center;
    }
    .sm{
        width: 30px;
        height: 30px;
        border-radius: 3px;
        border: 0.5px solid rgb(97, 94, 94);
        font-family:Arial Black;
        color:white;
        text-align: center;
        margin: 20px;        
    }
    .sm:hover{
        border-color: thistle;
    }
    
</style>