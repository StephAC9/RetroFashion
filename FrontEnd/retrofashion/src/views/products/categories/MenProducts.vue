<template>
    <div>
        <div class="container">
            <div class="a"></div>
            <div class="b">
                <h1 style="text-align:center">Hello men page</h1>
            </div>
            <div class="a"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container{
        display: flex;
    }
    .a{
        flex-basis: 5%;
        height: 1000px;
    }
    .b{
        flex-basis: 90%;
        background: beige;
        height: 1000px;
    }
</style>