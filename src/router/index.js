import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        if (savePosition) {
            return savePosition;
        } else {
            var top;
            if (window.innerWidth >= 700) {
                top = 676
            } else {
                top = 267
            }
            return {
                x: 0,
                y: top
            }
        }
    },
    routes: [
        {
            path: '/',
            component: resolve => require(['../pages/Home.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'home'
        }, //首页
        {
            path: '/Home',
            component: resolve => require(['../pages/Home.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Home'
        },
        {
            path: '/game',
            component: resolve => require(['../components/Game.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'game'
        },
        {
            path: '/Note',
            component: resolve => require(['../components/Note.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Note'
        },
        {
            path: '/Speech',
            component: resolve => require(['../components/Speech.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Speech'
        },
        {
            path: '/Api',
            component: resolve => require(['../components/Web-api.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Api'
        },

    ]
})