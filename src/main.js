import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import AboutMe from './components/Pages/AboutMe.vue';
import Home from './components/Pages/Home.vue';
import Login from './components/Pages/Login.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/about', component: AboutMe},
        {path: '/login', component: Login}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
