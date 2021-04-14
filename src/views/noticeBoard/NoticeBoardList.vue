<template>
	<v-card flat outlined rounded="lg" min-width="100%">
		<v-card-title flat no-gutters outlined align-content-center
			>공지사항</v-card-title
		>
		<v-card-text>
				<v-data-table
					:headers="headers"
					hide-default-footer
					:items="listItem"
					item-key="idx"
					show-expand
					class="overflow-y-auto"
					height="35vh"
					@dblclick="clickedRow"
					v-scroll.self="() => {}"
				> 
				<template v-slot:top>
					<v-flex class="text-left">
						총 {{ totalCount }} 건
					</v-flex>
				</template>
				<template v-slot:item.idx="{ index }">
					{{ index + 1}}
				</template>
				<template v-slot:item.title="{ item }">
					<td :class="item.level === 'high' && 'red--text' "> {{ item.title }} </td>
				</template>
				<template v-slot:expanded-item="{ headers, item }">
					<td colspan="1" class="white__td text-center">
						<v-icon>mdi-backspace-reverse-outline</v-icon>
					</td>
					<td :colspan="headers.length-1" class="white__td text-left">{{ item.contents }}</td>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('noticeBoard')
export default {
	data: function(){
		return{
			headers: [
				{text: "No," , align: 'center', value: "idx"},
				{text: "제목", align: 'center', value: "title"},
				{text: "작성자", align: 'center' , value: 'writer'}
			]
		}
	},
	computed: {
		...mapGetters({
			totalCount: 'getNoticeCount',
			listItem: 'getNoticeList'
		})
	},
	methods: {
		clickedRow(n){
			console.log(n)
		}
	}
}
</script>

<style scoped>
.white__td {
	padding:0px; 
	margin:0px; 
	background-color: white;
	height: 100%;
}
</style>