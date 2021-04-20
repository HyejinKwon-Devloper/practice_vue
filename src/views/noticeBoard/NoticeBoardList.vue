<template>
	<v-card flat outlined rounded="lg" min-width="100%">
		<v-card-title flat no-gutters outlined align-content-center
			>공지사항</v-card-title
		>
		<v-card-text>
			<v-data-table
				id="virtual-scroll-table"
				:headers="headers"
				hide-default-footer
				item-key="idx"
				show-expand
				fixed-header
				class="overflow-y-auto"
				height="35vh"
				:items="listItem"
				@dblclick:row="clickedRow"
				v-scroll:#virtual-scroll-table="() => {}"
			>
				<template v-slot:top>
					<v-flex class="text-left"> 총 {{ totalCount }} 건 </v-flex>
				</template>
				<!-- <template v-slot:body="{ headers }">
					<tbody>
						<v-virtual-scroll
							:colspan="headers.length"
						
							item-height="50"
							height="300"
						>
							<template v-slot:default="{ item, index }">
							<tr>
								<td>{{ index + 1 }}</td>
								<td :class="item.level === 'high' && 'red--text'">
									{{ item.title }}
								</td>
								<td>{{ item.writer }}</td>
							</tr> 
						</template>
						</v-virtual-scroll>
					</tbody>
				</template> -->
				<template v-slot:item.idx="index">
					{{ index + 1 }}
				</template>
				<template v-slot:item.title="item">
					<td :class="item.level === 'high' && 'red--text'">
						{{ item.title }}
					</td>
				</template>
				<template v-slot:expanded-item="{ headers, item }">
					<td colspan="1" class="white__td text-center">
						<v-icon>mdi-backspace-reverse-outline</v-icon>
					</td>
					<td :colspan="headers.length - 1" class="white__td text-left">
						{{ item.contents }}
					</td>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('noticeBoard')
export default {
	data: function() {
		return {
			headers: [
				{ text: 'No.', align: 'center', value: 'idx' },
				{ text: '제목', align: 'center', value: 'title' },
				{ text: '작성자', align: 'center', value: 'writer' }
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
		clickedRow(e, info) {
			let item = {
				...info.item,
				index: info.index
			}
			this.$emit('selectedItem', item)
		}
	}
}
</script>

<style scoped>
.white__td {
	padding: 0px;
	margin: 0px;
	background-color: white;
	height: 100%;
}
</style>
