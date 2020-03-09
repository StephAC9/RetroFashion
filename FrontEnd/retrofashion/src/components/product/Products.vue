<template>
    <div class="overflow-auto products-container">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
    </div>
</template>
<script>
export default {
    name:'Products',
     methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
}
</script>
<style scoped>
    .products-container{
        display: flex;
    }
</style>