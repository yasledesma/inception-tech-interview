<template>
  <v-app>
    <!-- TODO: make this page render on the server -->
    <Navbar />   
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },
  mounted() {
    document.title = "Inception Tech Interview";
  }
};
</script>
