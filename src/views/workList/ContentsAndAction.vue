<template>
	<v-flex>
		<slot name="prepend"/>
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
				<v-flex v-for="btn in btnList" :key="btn.btnText">
					<AButton
						class="ma-1"
						:icon="btn.icon"
						:btnText="btn.btnText"
						:key="btn.btnText"
						:preIcon="btn.preIcon"
						:postIcon="btn.postIcon"
						:small="btn.style ? btn.style.small : false"
						@btnAction="btn.btnAction"
						plain
						:outlined="btn.style ? btn.style.outlined : true"
						:max-width="btn.icon ? undefined : '152px'"
						:max-height="btn.icon ? undefined : '40px'"
					>
					</AButton>
					<ADialog
						v-show="btn.dialog"
						:dialog="btn.dialog"
						:key="btn.btnText + 'dialog'"
						:btnText="btn.btnText"
						@handleDialog="btn.btnAction"
					/>
				</v-flex>
			</v-flex>
		</v-layout>
		<slot name="append"/>
	</v-flex>
</template>

<script>
import AButton from '@/views/atom/AButton'
import ADialog from '@/views/atom/ADialog'
export default {
	components: { AButton, ADialog },
	props: {
		title: String,
		btnList: {
			type: Array,
			default: () => [
				{
					icon: Boolean,
					preIcon: String,
					postIcon: String,
					style: { outlined: Boolean, small: Boolean },
					btnAction: Function,
					dialog: Boolean
				}
			]
		},
		icon: Boolean,
		preIcon: String,
		postIcon: String
	}
}
</script>
