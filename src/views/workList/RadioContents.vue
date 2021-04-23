<template>
	<v-layout>
		<v-radio-group v-model="row" row>
			<v-radio label="Option 1" value="radio-1"></v-radio>
			<v-radio label="Option 2" value="radio-2"></v-radio>
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
