<script setup lang="ts">

</script>

<template>
  <div class="container-moto">
    <p class="moto colorBlack">Create the Best CV</p>
    <p class="moto colorGreen">just in Several <br> Clicks</p>
    <p class="get-started"> Get Started --> </p>
  </div>
</template>

<style lang="scss" scoped>
  .container-moto{
    display: block;
    // justify-content: center;
    // height: 100vh;
    // flex-flow: column;
  }

  .moto{
    font-weight: 800;
    font-size: 74px;
    line-height: 110px;
    text-transform: uppercase;
    text-align: left;
    color: $black;
    margin: 0;
  }

  .colorBlack{
    color: $black;
  }

  .colorGreen{
    color: $primary;
  }

  .get-started{
    position: relative;
    height: 60px;
    top: -109px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 20px;
    color: $black;
    cursor: pointer;
    transition: all 0.25s;

  &:hover{
    color: $primaryHover;
    // letter-spacing: 2px;
    padding-left: 16px;

    // -webkit-transform: translateX(3px);
    // transform: translateX(3px);
    // left: 4px;
  }

  &:after{
    right: 4px;
  }

  }
</style>
