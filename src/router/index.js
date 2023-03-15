import {createRouter, createWebHistory} from "vue-router";

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

const routes = [
    {
        path: "",
        component: HomeView
    },
    {
      path: "/store",
      component: ()=>import("../views/storeview/StoreView.vue")
    },
    {
        path: "/elementplus",
        component: ()=>import("../views/ElementPlusView.vue")
    },
    {
        path: "/test",
        component: ()=>import("../views/TestView.vue")
    },
    {
        path: "/about",
        redirect: "/about/1",
        component: ()=>import("../views/AboutView.vue"),
        children: [
            {
                path: "1",
                component: ()=>import("../views/AboutView1.vue"),
            },
            {
                path: "2",
                component: ()=>import("../views/AboutView2.vue"),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;