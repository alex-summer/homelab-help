import { create } from 'core-js/fn/object';
import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from './pages/AboutMe.vue';
import Blog from './pages/Blog.vue';
import Guides from './pages/Guides';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'blog',
            path: '/blog',
        },
        {
            
        },
    ]
})