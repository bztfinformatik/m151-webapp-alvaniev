<template>
  <div id="container">
    <h1>Images</h1>
    <div>
      <img id="pict" :src="imgUrl[index]" alt="0">
    </div>
    <v-btn @click="next">Next</v-btn>
  </div>
</template>


<script>

export default {
  data: () => (
    {
      imgUrl: [
        'https://images.unsplash.com/photo-1565294346415-dd9884b51e5b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1565074602450-ccabbd4ed954?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1565150271841-262d0854c5c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      ],
      counter: 0,
    }
  ),
  methods: {
    next() {
      this.counter += 1;
    },
  },
  computed: {
    index() {
      return this.counter % this.imgUrl.length;
    },
  },
};
</script>

<style scoped>
#pict {
  height: 144px;
  width: 240px;
}
#container {
  margin-left: 24px;
}
</style>
