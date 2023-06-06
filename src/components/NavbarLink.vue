<template>
    <li>
     <router-link
        :to="`/${index}`"
        class="nav-link"
        active-class="active emphasize"  
        :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}
        <span class="sr-only">(current)</span>
    </router-link>
</li>
</template>

<script>
export default {
    props: ['page', 'index']
    
}
</script>
