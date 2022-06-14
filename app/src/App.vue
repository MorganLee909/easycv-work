<script setup lang="ts">
import { ref, computed } from 'vue'
import Home from './pages/WizzardView.vue'
import SignUp from './pages/SignUp.vue'
import SignIn from './pages/SignIn.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
  '/': Home,
  '/sign-up': SignUp,
  '/sign-in': SignIn
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <!-- <WizzardView /> -->
  <!-- <a href="#/">Home</a>
  <a href="#/sign-up">Sign Up</a> -->
  <component :is="currentView" />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
