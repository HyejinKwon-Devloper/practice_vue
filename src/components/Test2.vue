<template>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <div>
            <h1>단방향 바인딩 : {{ msg }}</h1>
            <h1>양방향 바인딩 : {{ message }}</h1>
            <input 
                placeholder="여기에 입력하세요."
                v-model="message" 
            />
        </div>
      </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    data: function() {
        return {
            msg: "Hello World!"
        }
    },
    computed:{
        message:{
            get () {
                return this.$store.getters.getMessage
            },
            set (value) {
                this.$store.commit('changeMessage', value)
            }
        }
    }
}
</script>