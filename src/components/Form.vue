<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
  <h1>BTS</h1>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="require('../assets/bts.jpg')"
    ></v-img>

    <v-card-title>Dynamite</v-card-title>

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

    <v-card-title>Member</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip 
           v-for="member in members"
          :key="member.name"
          :value="member.name"
          @click="selectMember">{{ member.name }} {{ getMember }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="listening"
      >
        Listen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    data: () => ({
      loading: false,
      selection: '',
      members: [
        {name : 'RM'},
        {name : 'Jin'},
        {name : 'Suga'},
        {name : 'J-Hope'},
        {name : 'V'},
        {name : 'Jimin'},
        {name : 'Jeongguk'}
      ]
    }),
    computed:{
      getMember(){
        return this.$store.getters.getSelectedMember
      }
    },
    methods: {
      listening () {
        this.loading = true
        window.open('https://www.youtube.com/watch?v=gdZLi9oWNZg');
        this.loading = false
      },
      selectMember(){
        this.$store.commit('changeMember',this.selection)
      }
    },
}
</script>