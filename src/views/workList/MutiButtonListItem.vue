<template>
    <v-flex >
        <v-list-item-title class="mt-1 text-left">
           {{ title }}
        </v-list-item-title>
        <AButton
            class="ma-1" 
            v-for="btn in btnList" :key="btn.title"
            small
            outlined
            plain
            max-width="152px"
            max-height="40px"
            min-width="152px"
            min-height="40px"
            :btnText="btn.btnText"
        />
    </v-flex>
</template>

<script>
import AButton from '@/views/atom/AButton'
export default {
    components:{AButton},
    props: {
        title: String,
        btnList: Array
    }
}
</script>

