<template>
    <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    ></navbar>

    <page-viewer 
        :page="pages[activePage]"
    ></page-viewer>
</template>

<script>
import Navbar from './components/Navbar.vue';

import PageViewer from './components/PageViewer.vue';

export default {
    components: {
        Navbar,
        PageViewer
    },
    data() {
                return {
                    activePage: 0,
                    pages: [
                    {
                     link: {text: 'Home', URL: 'index.html'},
                     pageTitle: 'Home Page',
                     content: 'This is the home content'
                    },
                    {
                      link: {text: 'About', URL: 'about.html'},
                      pageTitle: 'About Page',
                      content: 'This is the about content'
                    },
                    {
                      link: {text: 'Contact', URL: 'contact.html'},
                      pageTitle: 'Contact Page',
                      content: 'This is the contact content'
                    
                    }
                  ]
                };
            },
}
</script>