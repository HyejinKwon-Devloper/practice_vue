import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Contents from '@/components/Contents'
import NoticeBoard from '@/views/noticeBoard/NoticeBoard'
import WorkInfoContainer from '@/views/workList/WorkInfoContainer'
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
			path: '/notice'
		},
		{
			component: WorkInfoContainer,
			path: '/work'
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
