<script setup lang="ts">
import HeaderMain from '../components/HeaderMain.vue'
import MainContainer from '@/components/ContainerMain.vue'
// console.log('VUE_APP_ROOT_API_PORT', process.env.VUE_APP_ROOT_API_PORT)

// #if(${URL}) Access URL: ${URL}
// #end Login: ${LOGIN}
// Password: ${PASSWORD}

</script>

<template>
  <header-main hrefUrl="sign-in" label="Sign In" />
  <!-- <HelloWorld msg="something like or that"/> -->
  <MainContainer />
</template>

<style lang="scss">
</style>
