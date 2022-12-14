import Vue from 'vue'
import VueRouter from 'vue-router'
import { layouts, pages } from '@/router/pages'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "default",
            path: '/',
            //@ts-ignore
            component: layouts.default,
            children: [
                {
                    name: "home",
                    //@ts-ignore
                    component: pages.home,
                    path: '/'
                },
                {
                    name: "widget",
                    component: pages.widget,
                    path: '/widget'
                },
                {
                    name: "listener checker",
                    //@ts-ignore
                    component: pages.listenerChecker,
                    path: '/listener-checker'
                },
            ]
        },

    ]
})

export default router