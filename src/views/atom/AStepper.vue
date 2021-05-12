<template>
	<v-stepper>
		<v-stepper-header style="justify-content:start; height:50px">
			<v-stepper-step
				class="px-2 py-0"
				:complete="el > 1"
				step="1"
				id="stepper"
			>
				작업정보 >
			</v-stepper-step>

			<v-stepper-step
				class="px-1 py-0"
				color="#ffffff"
				:complete="el > 2"
				step="2"
				id="stepper"
			>
				작업처리 >
			</v-stepper-step>

			<v-stepper-step class="px-1 py-0" color="#ffffff" step="3" id="stepper">
				고객서명
			</v-stepper-step>
		</v-stepper-header>
		<v-stepper-items>
			<v-stepper-content step="1" class="pa-1">
				<v-card flat>
					<slot :name="tabList[0].id" />
				</v-card>
			</v-stepper-content>
			<v-stepper-content step="2"> </v-stepper-content>
		</v-stepper-items>
	</v-stepper>
</template>

<script>
export default {
	props: {
		tabList: Array,
		el: {
			type: Number,
			required: true,
			default: 1
		}
	}
}
</script>

<style>
#stepper span {
	display: none;
}
#stepper .v-stepper__label {
	display: flex;
}
</style>
