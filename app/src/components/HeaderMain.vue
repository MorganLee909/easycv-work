<script setup lang="ts">
</script>

<template>
  <header class="main-header">
    <a href="#/">
      <img src="../assets/svg/easyCVworkLogo.svg">
    </a>

    <a href="#/sign-in" class="sign-in"> Sign In </a>
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
