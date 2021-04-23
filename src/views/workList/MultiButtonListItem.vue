<template>
	<!-- <v-flex >
		<slot name="prepend" />
		<v-list-item-title class="mt-1">
			{{ title }}
		</v-list-item-title>
		<AButton
			class="ma-1"
			v-for="btn in btnList"
			:key="btn.title"
			small
			outlined
			plain
			max-width="152px"
			max-height="40px"
			min-width="150px"
			min-height="40px"
			:btnText="btn.btnText"
			:preIcon="btn.preIcon"
			:postIcon="btn.postIcon"
		/>
	</v-flex> -->
	<v-layout column>
		<v-flex>
			<slot name="prepend" />
			<v-list-item-title class="mt-1 text-left">
				{{ title }}
			</v-list-item-title>
		</v-flex>
		<v-flex>
			<v-layout align-content-start>
				<v-flex text-left xs12>
					<AButton
						class="ma-1"
						v-for="btn in btnList"
						:key="btn.title"
						:class="btnList.length > 1 ? 'xs6' : 'xs12'"
						:outlined="btn.style && btn.style.outlined"
						:min-width="btn.style && btn.style.width"
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
						style: {
							outlined: { type: Boolean, required: false, default: true },
							small: Boolean,
							width: String,
							height: String
						},
						btnAction: Function,
						dialog: Boolean
					}
				]
			}
		}
	}
}
</script>
