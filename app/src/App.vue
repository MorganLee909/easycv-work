<script setup lang="ts">
// import { Options, Vue } from 'vue-class-component';
import '../src/assets/css/main.scss'
import WizzardView from './components/WizzardView.vue'

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {}
</script>

<template>
  <WizzardView />
  <!-- <HeaderMain/> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld :msg="Welcome"/> -->
  <!-- <HelloWorld msg="something like or that"/> -->

</template>

<style>
@font-face {
  font-family: 'Inter', sans-serif;
  src: url(@/assets/fonts/Inter-VariableFont_slnt\,wght.ttf) format("truetype");
}
  #app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
