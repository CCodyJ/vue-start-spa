import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/pages.vue';
import pagesList from './views/pagesList.vue'
import pageEdit from './views/pageEdit.vue'




const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageViewer, props: true },
        {
            path: '/pages', 
            component: Pages,
            children: [
                { path: '', component: pagesList },
                { path: 'create', component: CreatePage },
                { path: ':index/edit', component: pageEdit, props: true}
            ] 
        },
        
        
        
        
    ]

});

export default router;