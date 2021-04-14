<template>

  <v-card>
     <v-navigation-drawer app :value="show" full-height   style="opacity:1">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/Jin.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Hyejin</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
   

</template>

<script>
export default {
  props:{
    show:{ type: Boolean, required: false, default: false}
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", link: "/" },
        { title: "공지사항", icon: "mdi-account", link: "/notice" },
        { title: "Test2", icon: "mdi-account-group-outline", link: "/test2" },
      ],
    };
  },
};
</script>
