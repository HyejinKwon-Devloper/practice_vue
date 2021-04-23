<template>
	<v-layout>
		<ASelect
			:class="[btnList.length > 1 ? 'xs6' : 'xs12', 'ma-1']"
			v-for="s in btnList"
			:key="s.idx"
			dense
			outlined
			:items="s.items"
		/>
	</v-layout>
</template>

<script>
import ASelect from '@/views/atom/ASelect'
export default {
	name: 'SelectorContents',
	components: {
		ASelect
	},
	data: function() {
		return {
			row: ''
		}
	},
	props: {
		btnList: Array
	}
}
</script>
