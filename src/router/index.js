import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Contents from '@/components/Contents'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
        
            component: MainContainer
        },
        {
            path: '/member',

            component: Contents
        }
    ]
})
