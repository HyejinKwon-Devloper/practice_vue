<template>
    <v-app-bar
      dark
      app
    >
      <v-app-bar-nav-icon @click="handleNavagation" />
      <v-toolbar-title>TITLE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  props:{
    show: {type: Boolean, default: false}
  },
  methods: {
    handleNavagation: function(){
      this.$emit('toggleNav', !this.show)
    }
  }
}
</script>

<style scoped>
    .header-custom {
        padding: 0;
    }
</style>