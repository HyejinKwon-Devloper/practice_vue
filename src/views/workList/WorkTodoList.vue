<template>
    <v-list>
        <v-list-item dense v-for="item in listItem" :key="item.title">
            <v-list-item-content>
                <v-layout column>
                    <v-flex>
                        <v-list-item-subtitle class="text-left">
                            {{ item.title }}
                        </v-list-item-subtitle>
                    </v-flex>
                    <MultiButtonListItem v-if="item.type === 'multiBtn'" :title="item.contents" :btnList="item.btnInfo"/>
                    <v-flex v-else align-self-start>
                        <AButton 
                            class="mt-1"
                            small
                            outlined
                            plain
                            :btnText="item.btnInfo.btnText"
                            :iconShape="item.btnInfo.iconShape"
                        />
                    </v-flex>
                </v-layout>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import AButton from '@/views/atom/AButton'
import MultiButtonListItem from './MutiButtonListItem'
export default {
    components:{
        AButton,
        MultiButtonListItem
    },
    data: function(){
        return {
            listItem: [
                {title: '설치위치', btnInfo: {btnText:'첨부', iconShape:"mdi-camera" } },
                {title: '콜상담 내용', btnInfo: {btnText:'상담이력'}},
                {type: 'multiBtn'
                ,title: '접수유형'
                ,contents: '설치/해체-이전설치'
                ,btnInfo:[{btnText:'첨부', iconShape:"mdi-camera" }, {btnText:'첨부', iconShape:"mdi-camera" }] }
            ]
        }
        
    }
}
</script>

<style lang="sass">

      
</style>