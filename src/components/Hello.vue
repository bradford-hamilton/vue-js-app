<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button v-on:click="eventHandler">Check out this sweet page now</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods: {
    eventHandler() {
      this.$route.router.go('/sweet-page');
    },
  },
  data() {
    return {
      message: 'Vue.js is pretty cool I guess',
      link: '/sweet-page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
