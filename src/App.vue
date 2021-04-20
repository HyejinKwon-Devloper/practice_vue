<template>
  <v-app>
    <Navigation :show="show" />
    <v-main>
      <Header :show="show" @toggleNav="toggleNav" />
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Navigation,
  },
  data: function(){
    return {
      show: false
    }
  },methods:{
    toggleNav: function(v){
      this.show = v
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
}
</style>
