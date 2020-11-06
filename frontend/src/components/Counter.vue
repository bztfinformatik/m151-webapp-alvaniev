<template>
  <div id="container">
    <h1>Click Counter</h1>
    <v-btn @click="add">Add Click</v-btn>
    <p>Click Counts: {{ counter }}</p>
  </div>
</template>


<script>

export default {
  data: () => (
    {
      counter: 0,
    }
  ),
  methods: {
    add() {
      this.counter += 1;
    },
  },
};
</script>

<style scoped>
#container {
  margin-left: 24px;
}
</style>
