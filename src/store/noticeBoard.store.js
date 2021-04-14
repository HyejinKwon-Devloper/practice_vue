export const noticeBoard = {
	namespaced: true,
	state: {
		noticeList: [
			{idx: 0, title: '첫 공지', level: 'high', contents: '두근두근', writer: 'admin'}
		]
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
