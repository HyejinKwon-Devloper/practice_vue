<template>
<v-flex >
	<v-card v-for="l in listItem" :key="l.key" flat>
	<v-divider />
	<v-subheader
		><h4
			class="text-no-wrap"
			style="background-image: linear-gradient(transparent 60%, #F8CD07 40%)"
		>
			{{ l.key }}
		</h4>
	</v-subheader>
	<v-divider class="mt-1 mx-4" />
	<v-list >
		<v-list-item v-show="l.infos" v-for="item in l.infos" :key="item.title">
			<v-list-item-content>
				<v-layout column>
					<v-flex>
						<v-list-item-subtitle class="text-left">
							{{ item.title }}
						</v-list-item-subtitle>
					</v-flex>
					<component
						:is="item.component"
						:title="item.contents"
						:btnList="item.btnInfo"
					>
						<template v-slot:prepend v-if="item.customContents">
							<component :is="item.custom.customName"
								:item="item.custom"
							/>
						</template>
					</component>
					<v-divider class="mt-2" />
				</v-layout>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</v-card>
</v-flex>
</template>

<script>
import AButton from '@/views/atom/AButton'

export default {
	components: {
		AButton,
	},
	computed: {},
	methods: {
		dynamicImport(type) {
			let selectedComponent = ''
			switch (type) {
				case 'multiBtn':
					selectedComponent = () => import('./MultiButtonListItem')
					break
				case 'contentsAndAction':
					selectedComponent = () => import('./ContentsAndAction')
					break
				case 'selectContnets':
					selectedComponent = () => import('./SelectorContents')
					break
				case 'radioContents':
					selectedComponent = () => import('./RadioContents')
					break
				case 'custom':
					return
			}
			return selectedComponent
		}
	},
	props:{
		items: Array
	},
	data: function() {
		return {
			listItem: [
				{
					key: '',
					infos:[]
				}
			]
		}
	},

	created(){
		this.listItem = this.items
		this.listItem && this.listItem.forEach((l) => {
			l.infos.forEach(item => {
			item.component = this.dynamicImport(item.type)
			if(item.customContents){
				this.$options.components = {
					...this.$options.components,
					[item.custom.customName] :  ()=> import('./'+item.custom.customName)
				}
			}
			})
		})
		
	}
}
</script>

<style lang="sass"></style>
