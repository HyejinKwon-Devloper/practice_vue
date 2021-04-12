<template>
	<v-card flat outlined rounded="lg">
		<v-card-title>
			공지사항 등록
		</v-card-title>
		<v-card-text>
			<v-form ref="form" lazy-validation @submit.prevent="submit">
				<v-text-field
					counter="3"
					label="Title"
					required
					@input="$v.title.$touch()"
					@blur="$v.title.$touch()"
				>
				</v-text-field>
				<v-textarea
					counter="1000"
					label="공지내용"
					:value="value"
					@input="$v.contents.$touch()"
					required
				>
				</v-textarea>
				<v-flex text-left>
					<AButton
						text-left
						btnText="Submit"
						:outlined="true"
						type="button"
						class="mr-5"
					/>
					<AButton text-left btnText="Close" :outlined="true" type="button" />
				</v-flex>
			</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
import AButton from '@/views/atom/AButton'
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
	mixins: [validationMixin],
	components: { AButton },
	data: () => ({
		rules: [v => v.length <= 25 || 'Max 25 characters'],
		nameRules: [
			v => !!v || 'Title is required',
			v => (v && v.length <= 300) || 'Title must be less than 300 characters'
		],
		value: 'Hello!'
	}),
	validations: {
		title: { required, maxLength: maxLength(1) },
		contents: { required }
	},
	methods: {
		submit() {
			console.log(this.$v.$invalid)
			this.$v.$touch()
			console.log(this.$v.$invalid)
		},
		clear() {
			this.$v.$reset()
			this.name = ''
			this.email = ''
			this.select = null
			this.checkbox = false
		}
	}
}
</script>
