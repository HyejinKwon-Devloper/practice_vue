import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Contents from '@/components/Contents'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
        
            component: MainContainer
        },
        {
            path: '/test1',
            component: Test1
        },
        {
            path: '/test2',
            component: Test2
        },
        {
            path: '/member',

            component: Contents
        }
    ]
})
