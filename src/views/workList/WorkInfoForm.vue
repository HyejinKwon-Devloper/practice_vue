<template>
	<v-card flat rounded="lg" outlined class="my-1">
		<v-layout>
			<v-layout column>
				<v-card-text>
					<v-layout full-width>
						<v-flex xs3 justify-center align-self-center>
							<v-sheet
								width="63px"
								max-height="40px"
								color="#7EB3F2"
								rounded="lg"
								class="d-flex ma-auto"
								style="color: white; align-items:center; justify-content:center"
								>
								{{
									cardInfo.resevedTime
								}}
							</v-sheet>
							<v-btn small width="63px" dense plain outlined class="labelBtn my-1">고장진단</v-btn>
						</v-flex>
						<v-flex xs9 mx-1>
							<v-layout column>
								<v-flex
									align-self-start
									justify-space-between
									class="text-left"
									mb-1
								>
									<v-layout>
										<v-flex
											d-inline-flex
											align-self-center
											style="color:#64A0E6"
											order-xs1
											>{{ cardInfo.state }}</v-flex
										>
										<v-flex d-inline-flex class="mx-1" order-xs2>{{ cardInfo.cstmNm }}</v-flex>
										<v-flex d-inline-flex class="mx-1" order-xs3 >
											<v-chip
												v-show="cardInfo.grpNm"
												small
												outlined
												label
												style="padding: 0 5px!important"
												>{{ cardInfo.grpNm }}</v-chip
											>
										</v-flex>
										<v-flex d-inline-flex class="mx-1" order-xs4>
											<v-chip
												v-show="cardInfo.call"
												small
												label
												outlined
												style="padding: 0 5px!important"
												>{{ cardInfo.call }}</v-chip
											>
										</v-flex>
									</v-layout>
								</v-flex>
								<v-flex>
									<v-layout justify-space-between>
										<v-flex justify-start class="text-left text--secondary"
											>{{ cardInfo.prodNum }}</v-flex
										>
										<v-spacer />
										<v-flex justify-end class="text-right text--secondary"
											>{{ cardInfo.workType }}</v-flex
										>
									</v-layout>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
					<v-card-actions>
						<v-btn width="100%" dense plain outlined >
							main btn
						</v-btn>
					</v-card-actions>
				</v-card-text>

				<v-divider />

				<v-flex>
					<v-card-subtitle class="text-left caption text--secondary"
						>{{ cardInfo.receiptType }}</v-card-subtitle
					>
				</v-flex>
			</v-layout>

			<v-divider vertical />

			<v-flex xs1 align-self-center>
				<v-card-actions  class="pa-0">
					<v-icon @click="show = !show" class="ma-auto">{{
						show ? 'mdi-chevron-up' : 'mdi-chevron-down'
					}}</v-icon>
				</v-card-actions>
			</v-flex>
		</v-layout>
		<MiddleArea  v-show="show"  />
		<v-expand-transition>
			<WorkTodoList v-show="show" :items="cardInfo.infoList"/>
		</v-expand-transition>
	</v-card>
</template>

<script>
import WorkTodoList from '@/views/workList/WorkTodoList'
import MiddleArea from '@/views/workList/MiddleArea'

export default {
	components: { WorkTodoList , MiddleArea},
	props: {
		cardInfo : {
			type: Object, 
			required: true, 
			default: function(){
				return {
					resevedTime: String, 
					state : String,
					cstmNm: String,
					grpNm: String,
					call: String,
					prodNum: String,
					workType: String,
					receiptType: String,
					infoList: Array, 
					otherAction: Object
				}
			}
		}
	},
	data: function() {
		return {
			show: false
		}
	}
}
</script>

<style lang="sass" scoped>
.labelBtn
	font-size: 12px
	border-color: grey

</style>
