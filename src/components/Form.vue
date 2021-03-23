<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
  <h1>{{ bts.name }}</h1>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="100%"
      :src="bts.img"
    ></v-img>

    <!-- <Contents/> -->
    <v-divider class="mx-4"></v-divider>

    <v-card-title>Member</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="bts"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip 
           v-for="member in members"
          :key="member.name"
          :value="member"
          >{{ member.name }} </v-chip>
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
// import Contents from '@/components/Contents'

export default {
    // components:{
      // Contents
    // },
    data: () => ({
      loading: false,
      selection: {},
      members: [
        {name : 'RM'},
        {name : 'Jin', img: require('@/assets/Jin.jpg')},
        {name : 'Suga'},
        {name : 'J-Hope'},
        {name : 'V'},
        {name : 'Jimin'},
        {name : 'Jeongguk'}
      ]
    }),
    computed:{
      bts: {
        get() {
            return this.$store.getters.getSelectedMember
        },
        set(value){
          if(value) this.$store.commit('changeMember',value)
        }
      }
    },
    methods: {
      listening () {
        this.loading = true
        window.open('https://www.youtube.com/watch?v=gdZLi9oWNZg');
        this.loading = false
      }
    },
}
</script>