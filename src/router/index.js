import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Contents from '@/components/Contents'
import NoticeBoard from '@/views/noticeBoard/NoticeBoard'
import WorkInfo from '@/views/workList/WorkInfo'
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
            component: NoticeBoard,
            path: '/notice',
        },
        {
            component: WorkInfo,
            path: '/work',
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
