<template>
  <div class="sweet-page">
    <h1>{{ message }}</h1>
    <button @click="handleButtonClick">Click this to toggle some silly little pokemons</button>
    <ul>
      <li v-for="pokemon in pokemons" v-if="show">
        {{pokemon.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'sweetpage',
  mounted() {
    this.populatePokemon();
  },
  methods: {
    populatePokemon() {
      // what to use here for http request?
      axios('http://pokeapi.co/api/v2/pokemon')
        .then((data) => {
          this.pokemons = data.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleButtonClick() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      message: 'This page is so sweet right?',
      pokemons: [],
      show: false,
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
