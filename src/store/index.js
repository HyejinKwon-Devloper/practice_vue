import Vue from 'vue'
import Vuex from 'vuex'
import { noticeBoard } from './noticeBoard.store'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		noticeBoard
	}
})
