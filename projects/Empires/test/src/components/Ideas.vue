<template>
  <div class="container shades">
    <h1>Ideas</h1>
    <form @submit="submit">
      <v-text-field
        label="Title"
        hide-details="auto"
        :value="title"
        v-model="title"
      ></v-text-field>
      <v-textarea
        class="mt-5"
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        value="This is clearable text."
        v-model="description"
      ></v-textarea>
      <v-btn elevation="5" x-large color="primary" type="submit"> Submit</v-btn>
    </form>
    <div class="d-flex flex-wrap">
      <v-card
        v-for="idea in ideas"
        :key="idea"
        elevation="2"
        outlined
        class="warning mt-10 pt-5 pl-5 mr-5"
        style="height: 150px; width: 500px"
      >
        <h4>{{ idea.title }}</h4>
        <div>{{ idea.description }}</div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ideas",
  component: {},

  data: () => ({
    title: "",
    description: "",
    ideas: [],
  }),
  methods: {
    submit() {
      //   evt.preventDefault();
      this.ideas.push({ title: this.title, description: this.description });
      console.log("this ideas ", this.ideas);
    },
  },
};
</script>

<style>
</style>