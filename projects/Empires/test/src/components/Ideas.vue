<template>
  <div class=" container shades ">
    <h1>Ideas</h1>
    <div>
      <v-text-field
        label="Main input"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Another input"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "ideas",
};
</script>

<style>
</style>