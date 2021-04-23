<template>
	<v-select
		:items="items"
		:label="label"
		:dense="dense"
		:outlined="outlined"
		hide-details
	>
	</v-select>
</template>

<script>
export default {
	name: 'ASelect',
	props: {
		items: Array,
		label: String,
		dense: Boolean,
		outlined: Boolean
	}
}
</script>
