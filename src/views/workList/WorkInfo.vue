<template>
    <v-card width="360px">
        <v-layout column>
            <v-flex>
                <v-card flat >
                    <v-divider />
                </v-card>
            </v-flex>
            <v-divider />
            <v-flex>
                <WorkTodoList />
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
import WorkTodoList from '@/views/workList/WorkTodoList'
export default {
    components:{WorkTodoList}
}
</script>
        WorkTodoList

<style scoped>


</style>