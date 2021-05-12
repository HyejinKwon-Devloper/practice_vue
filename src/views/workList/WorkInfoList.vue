<template>
	<div>
		<WorkInfoForm
			v-for="info in cardList"
			:key="info.idx"
			:cardInfo="info"
			@nextStep="nextStep"
		/>
	</div>
</template>

<script>
import WorkInfoForm from '@/views/workList/WorkInfoForm'

export default {
	components: { WorkInfoForm },
	name: 'WorkInfoList',
	props: {
		nextStep: {
			type: Function,
			required: false,
			default: () => {}
		}
	},
	methods: {
		handleDialog(cardListIdx, infoListIdx, key, idx) {
			this.cardList[cardListIdx].infoList[infoListIdx].infos[key].btnInfo[
				idx
			].dialog = !this.cardList[cardListIdx].infoList[infoListIdx].infos[key]
				.btnInfo[idx].dialog
		}
	},
	data: function() {
		return {
			cardList: [
				{
					idx: 0,
					resevedTime: '09:30',
					state: '접수',
					cstmNm: '홍길동',
					grpNm: 'G1',
					call: '긴급',
					prodNum: '20000001',
					workType: '설치',
					receiptType: '가접수',
					infoList: [
						{
							key: '자재정보',
							infos: [
								{
									type: 'contentsAndAction',
									component: '',
									title: '자재리스트',
									btnInfo: [
										{
											preIcon: 'mdi-chevron-right',
											btnAction: () => this.handleDialog(0, 0, 0, 0),
											dialog: false,
											dialogContents: '',
											style: { outlined: false, small: true }
										}
									]
								}
							]
						},
						{
							key: '작업정보',
							infos: [
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
											dialogContents: '',
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
									custom: {
										customName: 'CustomContents'
									}
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
									type: 'radioContents',
									component: '',
									title: '수도시설',
									btnInfo: [
										{
											idx: 0,
											btnText: '상수도',
											btnValue: 'top',
											selectEvt: () => {}
										},
										{
											idx: 0,
											btnText: '하수도',
											btnValue: 'bottom',
											selectEvt: () => {}
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
					],
					mainAction: {
						actionName: '',
						actionFunc: () => {
							alert('hello')
						}
					},
					otherAction: {
						actionName: '',
						actionFunc: () => {
							alert('hello')
						}
					}
				},
				{
					idx: 1,
					resevedTime: '10:30',
					state: '도착',
					cstmNm: '홍길순',
					prodNum: '20000001',
					workType: '반환',
					receiptType: '접수유형',
					otherAction: {}
				}
			]
		}
	}
}
</script>
