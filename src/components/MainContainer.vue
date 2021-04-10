<template>
  <v-container fluid>
    <v-layout mb-4>
      <NoticeBoardList />
    </v-layout>

    <v-layout>
      <Statistcs />
    </v-layout>
  </v-container>
</template>

<script>
import NoticeBoardList from "@/views/noticeBoard/NoticeBoardList";
import Statistcs from "@/views/statistics/Statistics";
export default {
  components: { NoticeBoardList, Statistcs },
};
</script>

<style lang="sass"></style>
