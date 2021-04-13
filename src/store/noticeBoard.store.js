export const noticeBoard = {
	namespaced: true,
	state: {
		noticeList: []
	},
	mutations: {
		addNotice(state, newItem) {
			state.noticeList.push(newItem)
		}
	},
	actions: {
		addNotice({ commit }, newItem) {
			commit('addNotice', newItem)
		}
	},
	getters: {
		getNoticeList(state) {
			return state.noticeList
		},
		getNoticeCount(state) {
			return state.noticeList.length
		}
	}
}
