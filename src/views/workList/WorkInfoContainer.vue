<template>
	<v-card class="mx-auto mt-1" max-width="360px" flat>
		<AStepper :tabList="tabList" :el="el" max-height="100%">
			<template v-slot:WorkInfoList>
				<WorkInfoList @nextStep="nextStep" />
			</template>
			<template v-slot:WorkProcess>
				<WorkProcess @nextStep="nextStep" />
			</template>
		</AStepper>
	</v-card>
</template>

<script>
import WorkInfoList from '@/views/workList/WorkInfoList'
import WorkProcess from '@/views/workList/WorkProcess'
import AStepper from '@/views/atom/AStepper'

export default {
	components: { AStepper, WorkInfoList, WorkProcess },
	methods: {
		nextStep: function() {
			this.el++
		}
	},
	data: function() {
		return {
			el: 1,
			tabList: [
				{
					id: 'WorkInfoList',
					name: '작업정보'
				},
				{
					id: 'WorkProcess',
					name: '작업처리'
				}
			]
		}
	}
}
</script>
