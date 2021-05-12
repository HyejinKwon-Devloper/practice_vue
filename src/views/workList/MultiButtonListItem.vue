<template>
	<v-layout column>
		<v-flex>
			<slot name="prepend" />
			<v-list-item-title class="mt-1 text-left">
				{{ title }}
			</v-list-item-title>
		</v-flex>
		<v-flex>
			<v-layout align-content-start wrap>
				<v-flex text-left :class="`xs`+btn.size" v-for="btn in btnList" :key="btn.title">
					<AButton
						:outlined="btn.outlined"
						:width="btn.width"
						min-height="40px"
						plain
						:btnText="btn.btnText"
						:preIcon="btn.preIcon"
						:postIcon="btn.postIcon"
					/>
				</v-flex>
			</v-layout>
		</v-flex>
	</v-layout>
</template>

<script>
import AButton from '@/views/atom/AButton'
export default {
	name: 'MultiButtonListItem',
	components: { AButton },
	props: {
		title: String,
		btnList: {
			type: Array,
			default: () => {
				return [
					{
						icon: Boolean,
						preIcon: String,
						postIcon: String,
						size: Number,
						outlined: { type: Boolean, required: false, default: true },
						small: Boolean,
						width: String,
						height: String,
						btnAction: Function,
						dialog: Boolean
					}
				]
			}
		}
	}
}
</script>
