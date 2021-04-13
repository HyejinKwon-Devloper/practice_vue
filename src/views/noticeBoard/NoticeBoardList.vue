<template>
	<v-card flat outlined rounded="lg" min-width="100%">
		<v-card-title flat no-gutters outlined align-content-center
			>공지사항</v-card-title
		>
		<v-card-text>
			<v-card-subtitle class="text-left" v-model="totalCount"
				>총 {{ totalCount }} 건</v-card-subtitle
			>
			<v-simple-table fixed-header dense>
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-center">
								No.
							</th>
							<th class="text-center">
								제목
							</th>
							<th class="text-center">
								작성자
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in listItem" :key="index">
							<td>{{ index + 1 }}</td>
							<td :class="item.level === 'high' ? 'red--text' : ''">
								<v-icon v-show="item.level === 'high'" small
									>mdi-exclamation</v-icon
								>
								{{ item.title }}
							</td>
							<td>{{ item.writer }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-card-text>
	</v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('noticeBoard')
export default {
	computed: {
		...mapGetters({
			totalCount: 'getNoticeCount',
			listItem: 'getNoticeList'
		})
	}
}
</script>
