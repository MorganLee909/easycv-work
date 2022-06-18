<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
      label?: string
      hrefUrl?: string
    }>(),
  {
    label: '',
    hrefUrl: 'sign-in'
  }
)

</script>

<template>
  <header class="main-header">
    <router-link to="/">
      <img src="../assets/svg/easyCVworkLogo.svg">
    </router-link>

    <router-link :to='props.hrefUrl' class="sign-in"> {{ label }} </router-link>
  </header>
</template>

<style scoped lang="scss">
  .main-header{
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
  }

  .sign-in{
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    color: $primary;
    cursor: pointer;

    &:hover{
      color: $primaryHover;
    }
  }
</style>
