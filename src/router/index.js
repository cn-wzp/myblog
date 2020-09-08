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
            path: '/Aboutme',
            component: resolve => require(['../pages/Aboutme.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Aboutme'
        },
        {
            path: '/Share',
            component: resolve => require(['../components/temSharelist.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Share'
        },
        {
            path: '/Game',
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
        {
            path: '/Movie',
            component: resolve => require(['../components/movie.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'movie'
        },
        {
            path: '/Play',
            component: resolve => require(['../components/play.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'play'
        },
        {
            path: '/Countdown',
            component: resolve => require(['../components/countdown.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'countdown'
        },
        {
            path: '/Register',
            component: resolve => require(['../components/register.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'register'
        },
        {
            path: '/Css',
            component: resolve => require(['../components/css.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'css'
        },
    ]
})