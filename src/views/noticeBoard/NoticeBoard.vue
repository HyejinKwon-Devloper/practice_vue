<template>
	<v-container fluid>
		<v-card flat>
			<NoticeBoardList @selectedItem="selectedItem" />

			<v-card-actions class="flex-row-reverse">
				<v-icon
					v-show="type === '등록'"
					color="teal darken-1"
					outline
					@click="toggleAddNoticeArea"
					>mdi-plus-circle</v-icon
				>
			</v-card-actions>

			<v-expand-transition>
				<NoticeBoardForm
					v-show="show"
					:noticeTitle="formTitle"
					:notice="item"
					@closeBtnAction="closeExpand"
					@toggleAddNoticeArea="toggleAddNoticeArea"
				/>
			</v-expand-transition>
		</v-card>
	</v-container>
</template>
<script>
import NoticeBoardList from './NoticeBoardList'
import NoticeBoardForm from './NoticeBoardForm'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('noticeBoard')

export default {
	components: {
		NoticeBoardList,
		NoticeBoardForm
		// AButton
	},
	data: function() {
		return {
			show: false,
			item: {},
			formTitle: '공지사항',
			type: '등록'
		}
	},
	methods: {
		...mapActions(['initNotice', 'setNotice']),
		toggleAddNoticeArea: function() {
			this.show = !this.show
			this.formTitle = '공지사항 등록'
			this.type = '등록'
			this.initNotice()
		},
		selectedItem: function(item) {
			this.show = true
			this.formTitle = '공지사항 수정'
			this.type = '수정'
			this.setNotice(item)
		},
		closeExpand: function() {
			this.show = false
			this.type = '등록'
			this.formTitle = '공지사항 등록'
			this.initNotice()
		}
	}
}
</script>
