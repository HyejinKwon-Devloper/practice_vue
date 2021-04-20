<template>
	<v-card>
		<v-carousel
			cycle
			hide-delimiter-background
			show-arrows-on-hover
			height="30vh"
			round
		>
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet :color="colors[i]" height="100%">
					<v-layout>
						<v-flex fill-height align-self-center>
							<div class="display-3">{{ slide }} Slide</div>
						</v-flex>
					</v-layout>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				'indigo',
				'warning',
				'pink darken-2',
				'red lighten-1',
				'deep-purple accent-4'
			],
			slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
		}
	}
}
</script>
