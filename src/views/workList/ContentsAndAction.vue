<template>
	<v-flex>
		<v-layout align-content-space-between>
			<v-flex
				class="mt-1 text-left"
				justify-start
				align-self-center
				justify-space-between
			>
				{{ title }}
			</v-flex>
			<v-flex justify-end class="text-right">
				<AButton
					:icon="btn.icon"
					v-for="btn in btnList"
					:key="btn.btnText"
					plain
					:btnText="btn.btnText"
					@btnAction="btn.btnAction && btn.btnAction"
					:outlined="btn.style ? btn.style.outlined : true"
				>
				</AButton>
			</v-flex>
		</v-layout>
	</v-flex>
</template>

<script>
import AButton from '@/views/atom/AButton'
export default {
	components: { AButton },
	props: {
		title: String,
		btnList: Array,
		icon: Boolean,
		preIcon: String,
		postIcon: String
	}
}
</script>
