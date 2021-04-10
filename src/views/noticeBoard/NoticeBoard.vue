<template>
<v-container fluid>
  <v-card flat>
    <NoticeBoardList />

    <v-card-actions >
      <AButton
       :type="'text'"
        color="teal darken-1" 
        @btnAction="toggleAddNoticeArea"
        btnText="등록"
        :text="true"
        />
    </v-card-actions>

    <v-expand-transition>
      <NoticeBoardAdd  v-show="show" />
    </v-expand-transition>
  </v-card>
</v-container>
</template>
<script>
import NoticeBoardList from './NoticeBoardList'
import NoticeBoardAdd from './NoticeBoardAdd'
import AButton from '@/views/atom/AButton'
export default {
  components: {
    NoticeBoardList,
    NoticeBoardAdd,
    AButton
  },
  data: function(){
    return {
      show: false
    }
  },
  methods: {
    toggleAddNoticeArea: function(){
      this.show = !this.show
    }
  }
}
</script>