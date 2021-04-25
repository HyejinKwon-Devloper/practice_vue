<template>
	<v-layout>
		<v-radio-group v-model="row" row>
			<v-radio v-for="rdo in btnList" :key="rdo.btnValue" :label="rdo.btnText" :value="rdo.btnValue" />
		</v-radio-group>
	</v-layout>
</template>

<script>
export default {
	name: 'RadioContents',
	data: function() {
		return {
			row: ''
		}
	},
	props: {
		btnList: Array,
		selectStyle: String
	}
}
</script>
