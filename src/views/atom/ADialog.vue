<template>
	<v-dialog v-bind:value="dialog" width="500">
		<v-card>
			<v-card-title class="headline grey lighten-2">
				Privacy Policy
			</v-card-title>
			<slot></slot>
			

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" text @click="handleDialog">
					I accept
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		dialog: { type: Boolean, required: false, default: false },
		btnText: String
	},
	methods: {
		handleDialog() {
			this.$emit('handleDialog', this.$props.btnText)
		}
	}
}
</script>
