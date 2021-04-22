<template>
	<v-card class="mx-auto mt-1" max-width="360px">
		<v-layout column>
			<v-flex>
				<v-card flat>
					<v-card-title>
						TEST
					</v-card-title>
					<v-divider />
				</v-card>
			</v-flex>
			<v-divider />
			<v-flex>
				<v-subheader><h4 class="text-no-wrap" style="background-image: linear-gradient(transparent 60%, #F8CD07 40%)">작업정보확인</h4></v-subheader>
				<v-divider/>
				<WorkTodoList />
			</v-flex>
		</v-layout>
	</v-card>
</template>

<script>
import WorkTodoList from '@/views/workList/WorkTodoList'
export default {
	components: { WorkTodoList }
}
</script>

<style scoped></style>
