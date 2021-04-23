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
						:is="item.component"
						:title="item.contents"
						:btnList="item.btnInfo"
					>
						<template v-slot:prepend v-if="item.customContents">
							<v-text-field
								class="ma-1"
								v-model="item.contents"
								outlined
								label=""
								dense
								disabled
								hide-details
								type="text"
							>
								<template v-slot:append>
									<v-fade-transition leave-absolute>
										<v-btn plain outlined width="24" height="24" alt=""
											>수정</v-btn
										>
									</v-fade-transition>
								</template>
							</v-text-field>
						</template>
					</component>
					<v-divider class="mt-2" />
				</v-layout>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>

<script>
import AButton from '@/views/atom/AButton'

export default {
	components: {
		AButton
	},
	computed: {},
	methods: {
		dynamicImport(type) {
			let selectedComponent = ''
			switch (type) {
				case 'multiBtn':
					selectedComponent = () => import('./MultiButtonListItem')
					break
				case 'contentsAndAction':
					selectedComponent = () => import('./ContentsAndAction')
					break
				case 'selectContnets':
					selectedComponent = () => import('./SelectorContents')

					break
				case 'radioContents':
					selectedComponent = () => import('./RadioContents')
					break
				case 'custom':
					return
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
					component: '',
					title: '설치위치',
					btnInfo: [
						{
							btnText: '첨부',
							preIcon: 'mdi-camera',
							btnAction: () => {},
							dialog: false,
							style: { outlined: true, small: true }
						}
					]
				},
				{
					type: 'multiBtn',
					component: '',
					title: '설치위치(코디)',
					btnInfo: [
						{
							btnText: '첨부',
							preIcon: 'mdi-camera',
							btnAction: () => {},
							dialog: false,
							style: { outlined: true, small: true }
						}
					],
					customContents: true,
					customName: 'custom'
				},
				{
					type: 'multiBtn',
					component: '',
					title: '콜상담 내용',
					contents: '',
					btnInfo: [
						{
							btnText: '상담이력',
							btnAction: key => this.handleDialog(key, 2),
							dialog: false,
							style: { outlined: true, small: true }
						}
					]
				},
				{
					type: 'selectContnets',
					component: '',
					title: '설치장소',
					btnInfo: [
						{
							idx: 0,
							items: ['가정', '재택'],
							selectEvt: () => {}
						},
						{
							idx: 1,
							items: ['주택', '상가'],
							selectEvt: () => {}
						}
					]
				},
				{
					type: 'selectContnets',
					component: '',
					title: '다중시설',
					btnInfo: [
						{
							idx: 0,
							items: ['해당안됨', '해당'],
							selectEvt: () => {}
						}
					]
				},
				{
					type: 'multiBtn',
					component: '',
					title: '접수유형',
					contents: '설치/해체-이전설치',
					btnInfo: [
						{
							btnText: '스마트부품조회',
							btnAction: () => {},
							dialog: false,
							style: { outlined: true, small: true }
						},
						{
							btnText: '현장처리정보',
							btnAction: () => {},
							dialog: false,
							style: { outlined: true, small: true }
						}
					]
				},
				{
					type: 'contentsAndAction',
					component: '',
					title: '설치이력',
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
					component: '',
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
				},
				{
					type: 'multiBtn',
					component: '',
					title: '기타',
					btnInfo: [
						{
							btnText: '상품추천',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '현장소리',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '서명',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '모터설치',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '모터반환',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						},
						{
							btnText: '고객상담',
							style: { outlined: true, small: true, width: '90px' },
							btnAction: () => {},
							dialog: false
						}
					]
				}
			]
		}
	},
	mounted() {
		this.listItem.forEach(item => {
			item.component = this.dynamicImport(item.type)
		})
	}
}
</script>

<style lang="sass"></style>
