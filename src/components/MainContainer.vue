<template>
  <v-container fluid>
    <v-layout mb-4>
      <NoticeBoard />
    </v-layout>

    <v-layout>
      <Statistcs />
    </v-layout>
  </v-container>
</template>

<script>
import NoticeBoard from "@/components/noticeBoard/NoticeBoard";
import Statistcs from "@/components/statistics/Statistics";
export default {
  components: { NoticeBoard, Statistcs },
};
</script>

<style lang="sass"></style>
