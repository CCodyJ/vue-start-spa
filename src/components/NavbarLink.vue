<template>
     <a
        class="nav-link"
        :class="activeClases" 
        :href="page.link.URL"
        :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}
        <span class="sr-only">(current)</span>
    </a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClases() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }
}
</script>
<style scoped>
    .emphasize {
        text-decoration: underline !important;
    }
</style>