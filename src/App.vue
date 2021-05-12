<template>
	<v-app>
		<Navigation :show="show" />
		<v-main>
			<Header :show="show" @toggleNav="toggleNav" />
			<router-view></router-view>
			<v-fab-transition>
				<v-btn color="pink" fab dark small absolute bottom right @click="goTop">
					<v-icon>mdi-chevron-up</v-icon>
				</v-btn>
			</v-fab-transition>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation.vue'
export default {
	name: 'App',
	components: {
		Header,
		Footer,
		Navigation
	},
	data: function() {
		return {
			show: false
		}
	},
	methods: {
		toggleNav: function(v) {
			this.show = v
		},
		goTop() {
			window.scrollTo(0, 0)
			console.log(window)
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100% !important;
}
</style>
