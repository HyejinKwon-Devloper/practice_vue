<template>
	<v-list>
		<v-list-item dense v-for="item in listItem" :key="item.title">
			<v-list-item-content>
				<v-layout column>
					<v-flex>
						<v-list-item-subtitle class="text-left">
							{{ item.title }}
						</v-list-item-subtitle>
					</v-flex>
					<!-- <MultiButtonListItem
						v-if="item.type === 'multiBtn'"
						:title="item.contents"
						:btnList="item.btnInfo"
					/> -->
					<component
						:is="checkPoint(item.type)"
						:title="item.contents"
						:btnList="item.btnInfo"
						:btnAction="item.btnAction"
					>
						{{ item.dialog && <ADialog :dialog="item.dialog" /> }}
					</component>
				</v-layout>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>

<script>
import AButton from '@/views/atom/AButton'
import ADialog from '@/views/atom/ADialog'
import MultiButtonListItem from './MutiButtonListItem'
import ContentsAndAction from './ContentsAndAction'
export default {
	components: {
		AButton,
		ADialog
	},
	methods: {
		checkPoint(type) {
			let selectedComponent = ''
			switch (type) {
				case 'multiBtn':
					selectedComponent = MultiButtonListItem
					break
				case 'contentsAndAction':
					selectedComponent = ContentsAndAction
					break
			}
			return selectedComponent
		},
		handleDialog() {
			this.dialog = !this.dialog
		}
	},
	data: function() {
		return {
			listItem: [
				{
					title: '설치위치',
					btnInfo: [{ btnText: '첨부', preIcon: 'mdi-camera' }]
				},
				{
					type: 'contentsAndAction',
					title: '콜상담 내용',
					contents: '-',
					btnInfo: [{ btnText: '상담이력', btnAction: this.handleDialog }],
					dialog: false
				},
				{
					type: 'multiBtn',
					title: '접수유형',
					contents: '설치/해체-이전설치',
					btnInfo: [
						{ btnText: '첨부', preIcon: 'mdi-camera' },
						{ btnText: '첨부', preIcon: 'mdi-camera' }
					]
				},
				{
					type: 'contentsAndAction',
					title: '설치이력',
					contents: '어쩌구저쩌구',
					btnInfo: [{ btnText: '상세조회', style: { outlined: true } }]
				},
				{
					type: 'contentsAndAction',
					title: '접수자',
					contents: '-',
					btnInfo: [
						{ icon: true, preIcon: 'mdi-phone', style: { outlined: false } }
					]
				}
			]
		}
	}
}
</script>

<style lang="sass"></style>
