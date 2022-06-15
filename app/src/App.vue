<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss">
  // @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    // font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
  }
</style>
