<script setup lang="ts">
</script>

<template>
  <header class="main-header">
    <img src="../assets/easyCVworkLogo.svg">
    <p class="sign-in"> Sign In </p>
  </header>
</template>

<style scoped lang="scss">
  @import '@/assets/css/main.scss';

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
    color: $primary;
    cursor: pointer;

    &:hover{
      color: $primaryHover;
    }
  }
</style>
