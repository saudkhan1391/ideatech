<template>
  <v-app>
    <v-main>
      <AppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./common-components/AppBar";
export default {
  name: "App",
  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
