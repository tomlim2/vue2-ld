import Vue from 'vue'
import VueRouter from 'vue-router'
import { layouts, pages } from '@/router/pages'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "default", component: layouts.default, path: '/', children: [
                { name: "home", component: pages.home, path: '/' },
                { name: "widget", component: pages.widget, path: '/widget', children: [] },
            ]
        },

    ]
})

export default router