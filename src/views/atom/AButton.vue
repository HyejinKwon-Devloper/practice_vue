<template>
	<v-btn
		id="aButton"
		:depressed="depressed"
		:elevation="elevation"
		:icon="icon"
		:outlined="outlined"
		:plain="plain"
		:color="color"
		@click="handleBtn"
		:left="true"
		:small="small"
		:fab="fab"
		:width="width"
		:height="height"
		:max-height="maxHeight"
		:max-width="maxWidth"
		:min-height="minHeight"
		:min-width="minWidth"
	>
		<v-icon v-show="!!preIcon">{{ preIcon }}</v-icon>
		{{ btnText }}
		<v-icon v-show="!!portIcon">{{ portIcon }}</v-icon>
	</v-btn>
</template>
<script>
export default {
	props: {
		elevation: { type: Number },
		depressed: { type: Boolean },
		icon: { type: Boolean },
		preIcon: { type: String },
		portIcon: { type: String },
		outlined: { type: Boolean },
		plain: { type: Boolean },
		color: { type: String },
		type: { type: String },
		btnText: { type: String },
		left: { type: Boolean },
		text: { type: Boolean },
		align: { type: String },
		shape: { type: String },
		small: { type: Boolean },
		fab: Boolean,
		width: String,
		height: String,
		maxWidth: String,
		maxHeight: String,
		minWidth: String,
		minHeight: String
	},
	methods: {
		handleBtn: function() {
			this.$emit('btnAction', this.btnText)
		}
	}
}
</script>
<style lang="sass">
#aButton
    border-color: #bdbdbd
    color: #222222
    font-family: 'SpoqaHanSansNeo-Regular'
</style>
