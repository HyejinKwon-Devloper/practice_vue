<template>
	<v-card flat>
		<v-divider />
		<v-subheader
			><h4
				class="text-no-wrap"
				style="background-image: linear-gradient(transparent 60%, #F8CD07 40%)"
			>
				고객정보
			</h4>
		</v-subheader>
		<v-divider class="mt-1 mx-4" />
		<v-list>
			<v-list-item v-for="item in customInfoList" :key="item.title">
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
								<component :is="item.custom.customName" :item="item.custom" />
							</template>
						</component>
						<v-divider class="mt-2" />
					</v-layout>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-card>
</template>

<script>
import ContentsAndAction from '@/views/workList/ContentsAndAction'
export default {
	data: function() {
		return {
			customInfoList: [
				{
					title: '고객명',
					component: ContentsAndAction,
					contents: '벽산햇빛어린이집',
					btnInfo: []
				},
				{
					title: '주소',
					component: ContentsAndAction,
					contents: '경기 용인시 수지구 ********',
					btnInfo: [
						{
							preIcon: 'mdi-chevron-right',
							btnAction: () => {},
							dialog: false,
							dialogContents: '',
							style: { outlined: false, small: true }
						}
					]
				},
				{
					title: '주요연락처',
					component: '',
					contents: '벽산햇빛어린이집',
					btnInfo: []
				}
			]
		}
	}
}
</script>
