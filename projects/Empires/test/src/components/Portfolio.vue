<template>
  <div>
    <AppBar />
    <div class="container">
      <div
        style="display: flex; margin-top: 20px; justify-content: space-around"
      >
        <h1 class="col-md-4">
          Gridsome Portfolio Starter Powered by Vue.js & Tailwind v1
        </h1>
        <h1 class="col-md-4">
          Gridsome Portfolio Starter Powered by Vue.js & Tailwind v1
        </h1>
      </div>
      <div class="mt-10 text-h4">
        This gridsome theme was forked from my personal website. I added more
        features and decided to release it as an open source project. Check it
        out on GitHub or check out the screencast I did. Feel free to use it for
        your own site or projects! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Minima, repellat. Dolores iure, quas perspiciatis
        rerum quaerat atque eum repellat autem.
      </div>
      <div class="d-flex justify-space-around">
        <v-icon x-large style="font-size: 400px"> mdi-email </v-icon>
        <v-icon large color="blue-grey darken-2" style="font-size: 400px">
          mdi-call-split
        </v-icon>
      </div>
      <h2>Here are some projects I've worked on:</h2>
      <div class="d-flex align-center">
        <v-icon large color="blue" style="font-size: 50px">
          mdi-checkbox-marked-circle
        </v-icon>
        <h4 class="ml-2" style="font-size: 25px">Project One</h4>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam
        animi iure nemo exercitationem a, eius non culpa itaque!
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../common-components/AppBar";
export default {
  name: "Portfolio",
  components: {
    AppBar,
  },
};
</script>

<style>
</style>