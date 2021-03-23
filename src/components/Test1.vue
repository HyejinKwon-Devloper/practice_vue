<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12 content-box bts-contents"
        max-width="374"
    >
  <h1>BTS</h1>
    <v-img
      height="250"
      :src="require('@/assets/bts.jpg')"
    ></v-img>
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip :key="item.name" v-for="item in members">{{ item.name }}</v-chip>
      </v-chip-group>
    </v-card-text>
    </v-card>
</template>
<script>
export default {
    data: function(){
        return{
            members: [
                {name : 'RM' , position: 'Leader'},
                {name : 'Jin' , position: '보컬'},
                {name : 'Suga' , position: '래퍼'},
                {name : 'J-Hope' , position: '래퍼'},
                {name : 'Jimin' , position: '리드보컬'},
                {name : 'V' , position: '보컬'},
                {name : 'JK' , position: '보컬'}
            ]
        }
    }
}
</script>
<style lang="sass">
    .bts-contents
        text-align: center
        margin: 13px
</style>