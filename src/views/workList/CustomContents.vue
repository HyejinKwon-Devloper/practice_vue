<template>
	<v-text-field
		class="ma-1"
		:value="item.contents"
		outlined
		label=""
		dense
		disabled
		hide-details
		type="text"
	>
		<template v-slot:append>
			<v-fade-transition leave-absolute>
				<v-btn plain outlined width="24" height="24" alt="">수정</v-btn>
			</v-fade-transition>
		</template>
	</v-text-field>
</template>

<script>
export default {
	name: 'CustomContents',
	props: {
		item: Object
	}
}
</script>
