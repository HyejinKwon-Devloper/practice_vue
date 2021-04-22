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
					<component
						:is="checkPoint(item.type)"
						:title="item.contents"
						:btnList="item.btnInfo"
					>
						<template v-slot:prepend v-if="item.customContents">
							<v-text-field
								class="mt-1"
								v-model="item.contents"
								outlined
								label=""
								dense
								disabled
								type="text"
							>
								<template v-slot:append>
									<v-fade-transition leave-absolute>
										<v-btn
											width="24"
											height="24"
											src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
											alt=""
											>수정</v-btn
										>
									</v-fade-transition>
								</template>
							</v-text-field>
						</template>
					</component>
				<v-divider class="mt-2"/>
				</v-layout>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>

<script>
import AButton from '@/views/atom/AButton'
import MultiButtonListItem from './MutiButtonListItem'
import ContentsAndAction from './ContentsAndAction'
export default {
	components: {
		AButton,
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
				case 'custom':
					break
			}
			return selectedComponent
		},
		handleDialog(key, idx) {
			let row = this.listItem[idx].btnInfo
			let btnIdx = row.findIndex(b => b.btnText === key)
			row[btnIdx].dialog = !row[btnIdx].dialog

			let targetList = this.listItem
			targetList[idx].btnInfo = row
			this.listItem = targetList
		}
	},
	data: function() {
		return {
			listItem: [
				{
					type: 'multiBtn',
					title: '설치위치',
					btnInfo: [
						{
							btnText: '첨부',
							preIcon: 'mdi-camera',
							btnAction: () => {},
							dialog: false
						}
					]
				},
				{
					type: 'multiBtn',
					title: '설치위치(코디)',
					btnInfo: [
						{
							btnText: '첨부',
							preIcon: 'mdi-camera',
							btnAction: () => {},
							dialog: false
						}
					],
					customContents: true,
					customName : 'custom'
				},
				{
					type: 'multiBtn',
					title: '콜상담 내용',
					contents: '',
					btnInfo: [
						{
							btnText: '상담이력',
							btnAction: key => this.handleDialog(key, 2),
							dialog: false
						}
					]
				},
				{
					type: 'multiBtn',
					title: '접수유형',
					contents: '설치/해체-이전설치',
					btnInfo: [
						{
							btnText: '스마트부품조회',
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '현장처리정보',
							btnAction: () => {},
							dialog: false
						}
					]
				},
				{
					type: 'contentsAndAction',
					title: '설치이력',
					contents: '어쩌구저쩌구',
					btnInfo: [
						{
							btnText: '상세조회',
							style: { outlined: true },
							btnAction: () => {},
							dialog: false
						}
					]
				},
				{
					type: 'contentsAndAction',
					title: '접수자',
					contents: '-',
					btnInfo: [
						{
							icon: true,
							preIcon: 'mdi-phone',
							style: { outlined: false, small: true },
							btnAction: () => {},
							dialog: false
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="sass"></style>
