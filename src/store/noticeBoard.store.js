export const noticeBoard = {
	namespaced: true,
	state: {
		noticeList: []
	},
	mutations: {
		addNotice(state, newItem) {
			state.push(newItem)
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
			return state.length
		}
	}
}
