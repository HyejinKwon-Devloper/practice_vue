import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
        
            component: MainContainer
        },
        {
            path: '/main',

            component: Form
        }
    ]
})
