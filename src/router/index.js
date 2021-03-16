import Vue from 'vue'
import Router from 'vue-router'
import FormContainer from '@/components/FormContainer'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
        
            component: FormContainer
        },
        {
            path: '/main',

            component: Form
        }
    ]
})
