<template>
	<v-card flat outlined rounded="lg">
		<v-card-title>
			{{ noticeTitle }}
		</v-card-title>
		<v-card-text>
			<v-form ref="form" lazy-validation @submit.prevent="submit">
				<v-text-field
					v-model="notice.title"
					counter="50"
					label="제목"
					required
					:error-messages="checkTitleError"
					@input="$v.title.$touch()"
					@blur="$v.title.$touch()"
				>
				</v-text-field>
				<v-textarea
					counter="1000"
					label="공지내용"
					v-model="notice.contents"
					@input="$v.contents.$touch()"
					required
				>
				</v-textarea>
				<v-radio-group row v-model="notice.level">
					<template v-slot:label>
						<h3><strong>중요도 :: </strong></h3>
					</template>
					<v-radio
						color="red"
						on-icon="mdi-chevron-double-up"
						off-icon="mdi-chevron-double-up"
						label="high"
						value="high"
					/>
					<v-radio
						on-icon="mdi-minus"
						off-icon="mdi-minus"
						label="normal"
						value="normal"
					/>
					<v-radio
						color="success"
						on-icon="mdi-chevron-double-down"
						off-icon="mdi-chevron-double-down"
						label="low"
						value="low"
					/>
				</v-radio-group>
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
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('noticeBoard')
export default {
	mixins: [validationMixin],
	components: { AButton },
	props: {
		noticeTitle: { type: String, required: true }
	},
	data: () => ({}),
	validations: {
		title: { required, maxLength: maxLength(50) },
		contents: { required, maxLength: maxLength(1000) }
	},
	computed: {
		notice: {
			get() {
				let init = this.$store.state.noticeBoard.notice
				return this.$store.getters.getNotice
					? this.$store.getters.getNotice
					: init
			}
		},
		checkTitleError() {
			const errors = []
			if (!this.$v.title.$dirty) return errors

			!this.$v.title.maxLength &&
				errors.push('제목은 최대 50글자까지만 입력가능합니다.')
			!this.$v.title.required && errors.push('제목을 입력해주세요.')

			return errors
		}
	},
	methods: {
		...mapActions(['addNoticeList']),

		submit() {
			this.$v.$touch()
			if (!this.$v.$invalid) {
				let notice = {
					...this.notice,
					writer: 'admin'
				}
				this.addNoticeList(notice)
				this.clear()
				this.$emit('toggleAddNoticeArea')
			}
		},
		clear() {
			this.$v.$reset()
			this.notice.title = ''
			this.notice.contents = ''
			this.notice.level = 'normal'
		}
	}
}
</script>
