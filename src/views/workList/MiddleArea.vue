<template>
    <v-card class="my-2 mx-4" flat>
        <v-card-text class="px-1">
            <v-layout column>
                <v-flex align-self-end  class="pt-0 pb-1 text-right">
                    <v-checkbox hide-details label="바코드스캔불가여부"></v-checkbox>
                </v-flex>
                <v-flex>
                    <v-btn plain outlined small class="mx-1">
                        이력조회
                    </v-btn>
                        <v-btn plain outlined small class="mx-1">
                        전화걸기
                    </v-btn>
                        <v-btn plain outlined small class="mx-1">
                        작업변경/취소
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    
}
</script>