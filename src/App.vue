<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app>
    <Navigation/>
    </v-navigation-drawer>
     <Header />
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
        <Footer/>
   
    </v-app>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Navigation from '@/components/Navigation.vue'
  export default {
    name: 'App',
    components:{
      Header,
      Footer,
      Navigation
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%!important;
}


</style>
