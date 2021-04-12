<template>
	<v-container fluid>
		<v-layout mb-4>
			<NoticeBoardList />
		</v-layout>

		<v-layout>
			<v-flex lg6>
				<Statistcs />
			</v-flex>
			<v-flex lg6>
				<Contents />
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import NoticeBoardList from '@/views/noticeBoard/NoticeBoardList'
import Statistcs from '@/views/statistics/Statistics'
import Contents from '@/components/Contents'
export default {
	components: { NoticeBoardList, Statistcs, Contents }
}
</script>

<style lang="sass"></style>
