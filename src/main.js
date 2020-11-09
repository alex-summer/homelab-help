import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import AboutMe from './components/Pages/AboutMe.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutMe}
    ]
});


App.use(router);

createApp(App).mount('#app')
