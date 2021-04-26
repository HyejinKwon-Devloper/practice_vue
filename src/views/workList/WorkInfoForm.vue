<template>
	<v-card flat rounded="lg" outlined>
		<v-layout>
			<v-layout column>
				<v-card-text>
					<v-layout full-width>
						<v-flex xs3 justify-center align-self-center>
							<v-sheet
								width="63px"
								height="40px"
								color="#7EB3F2"
								rounded="lg"
								class="d-flex ma-auto"
								style="color: white; align-items:center; justify-content:center"
								>09:30
							</v-sheet>
							<!-- <v-btn small width="63px">OptionalBtn</v-btn> -->
						</v-flex>
						<v-flex xs9 mx-1>
							<v-layout column>
								<v-flex
									align-self-start
									justify-space-between
									class="text-left"
								>
									<v-layout>
										<v-flex
											d-inline-flex
											align-self-center
											style="color:#64A0E6"
											order-xs1
											>상태</v-flex
										>
										<v-flex d-inline-flex class="mx-1" order-xs2>고객명</v-flex>
										<v-flex d-inline-flex class="mx-1" order-xs3>
											<v-chip
												small
												outlined
												label
												style="padding: 0 5px!important"
												>G1</v-chip
											>
										</v-flex>
										<v-flex d-inline-flex class="mx-1" order-xs4>
											<v-chip
												small
												label
												outlined
												style="padding: 0 5px!important"
												>긴급/당일콜</v-chip
											>
										</v-flex>
									</v-layout>
								</v-flex>
								<v-flex>
									<v-layout justify-space-between>
										<v-flex justify-start class="text-left text--secondary"
											>제품번호</v-flex
										>
										<v-spacer />
										<v-flex justify-end class="text-right text--secondary"
											>작업유형</v-flex
										>
									</v-layout>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-card-text>

				<v-divider />

				<v-flex>
					<v-card-subtitle class="text-left caption text--secondary"
						>접수유형</v-card-subtitle
					>
				</v-flex>
			</v-layout>

			<v-divider vertical />

			<v-flex xs1 align-self-center>
				<v-card-actions id="expandAction">
					<v-icon @click="show = !show" class="ma-auto">{{
						show ? 'mdi-chevron-up' : 'mdi-chevron-down'
					}}</v-icon>
				</v-card-actions>
			</v-flex>
		</v-layout>

		<v-expand-transition>
			<v-flex v-show="show">
				<v-divider />
				<v-subheader
					><h4
						class="text-no-wrap"
						style="background-image: linear-gradient(transparent 60%, #F8CD07 40%)"
					>
						작업정보확인
					</h4>
				</v-subheader>
				<v-divider class="mt-1 mx-4" />
				<WorkTodoList />
			</v-flex>
		</v-expand-transition>
	</v-card>
</template>

<script>
import WorkTodoList from '@/views/workList/WorkTodoList'
export default {
	components: { WorkTodoList },
	data: function() {
		return {
			show: false
		}
	}
}
</script>

<style lang="sass" scoped>
#expandAction
    padding: 0px!important
</style>
