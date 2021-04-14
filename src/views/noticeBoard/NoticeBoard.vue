<template>
	<v-container fluid>
		<v-card flat>
			<NoticeBoardList />

			<v-card-actions class="flex-row-reverse">
				<v-icon color="teal darken-1" outline @click="toggleAddNoticeArea"
					>mdi-plus-circle</v-icon
				>
			</v-card-actions>

			<v-expand-transition>
				<NoticeBoardAdd
					v-show="show"
					@toggleAddNoticeArea="toggleAddNoticeArea"
				/>
			</v-expand-transition>
		</v-card>
	</v-container>
</template>
<script>
import NoticeBoardList from './NoticeBoardList'
import NoticeBoardAdd from './NoticeBoardAdd'
// import AButton from '@/views/atom/AButton'
export default {
	components: {
		NoticeBoardList,
		NoticeBoardAdd
		// AButton
	},
	data: function() {
		return {
			show: false
		}
	},
	methods: {
		toggleAddNoticeArea: function() {
			this.show = !this.show
		}
	}
}
</script>
