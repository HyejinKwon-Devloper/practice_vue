export const noticeBoard = {
	namespaced: true,
	state: {
		noticeList: [
			{
				idx: 0,
				title: '첫 공지',
				level: 'high',
				contents:
					'짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게' +
					'짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게 짱 길게 엄청길게 엄청엄청 길게',
				writer: 'admin'
			},
			{
				idx: 1,
				title: '두 공지',
				level: 'normal',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 2,
				title: '세 공지',
				level: 'low',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 3,
				title: '넷 공지',
				level: 'low',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 4,
				title: '다섯 공지',
				level: 'high',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 5,
				title: '여섯 공지',
				level: 'high',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 6,
				title: '일곱 공지',
				level: 'high',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 7,
				title: '여덟 공지',
				level: 'normal',
				contents: '두근두근',
				writer: 'admin'
			},
			{
				idx: 8,
				title: '아홉 공지',
				level: 'low',
				contents: '두근두근',
				writer: 'admin'
			}
		],
		notice: {
			index: 0,
			title: '',
			writer: '',
			contents: '',
			level: 'normal'
		}
	},
	mutations: {
		addNoticeList(state, newItem) {
			state.noticeList.push(newItem)
		},
		setNotice(state, item) {
			state.notice = item
		},
		initNotice(state) {
			state.notice = {
				index: 0,
				title: '',
				writer: '',
				contents: '',
				level: 'normal'
			}
		}
	},
	actions: {
		addNoticeList({ commit }, newItem) {
			commit('addNoticeList', newItem)
		},
		setNotice({ commit }, item) {
			commit('setNotice', item)
		},
		initNotice({ commit }) {
			commit('initNotice')
		}
	},
	getters: {
		getNoticeList(state) {
			return state.noticeList
		},
		getNoticeCount(state) {
			return state.noticeList.length
		},
		getNotice(state) {
			return state.notice
		}
	}
}
