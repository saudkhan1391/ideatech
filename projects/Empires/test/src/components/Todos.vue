<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Totds",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
</style>