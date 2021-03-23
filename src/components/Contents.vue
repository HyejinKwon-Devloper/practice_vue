<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
  <h1>{{ getMember }}</h1>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="100%"
      :src="require('../assets/진.jpg')"
    ></v-img>

    <v-card-title>{{ getMember }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          발매일: 2020년
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        장르 • 디스코, 팝
      </div>

      <div>방탄소년단은 코로나바이러스-19로 인해 전 세계 사람들이 힘든 시간을 보내고 있으며 팬들을 위해 긍정적인 에너지를 함께 나누기를 바랜다고 언급하였다.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
    export default {
    computed:{
      getMember(){
        return this.$store.getters.getSelectedMember
      }
    }
}
</script>