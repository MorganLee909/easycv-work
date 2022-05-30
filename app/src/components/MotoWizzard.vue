<script setup lang="ts">

import { ref } from 'vue'

const isShowSecondRow = ref(false)
const isShowGetStarted = ref(false)

setTimeout(() => {
  isShowSecondRow.value = true
}, 2000)

setTimeout(() => {
  isShowGetStarted.value = true
}, 4000)

</script>

<template>
  <div class="container-moto">
    <p class="moto colorBlack">Create the Best CV</p>
    <div class="second-row-container">
      <p :class="{ moveBottom: isShowSecondRow }" class="moto colorGreen">in just Several <br> Clicks</p>
      <p :class="{ showGetStarted: isShowGetStarted }" class="get-started"> Get Started --> </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container-moto{
    display: block;
  }

  .second-row-container{
    overflow: hidden;
  }

  .moto{
    font-weight: 900;
    font-size: 74px;
    line-height: 110px;
    text-transform: uppercase;
    text-align: left;
    color: $black;
    margin: 0;
  }

  .colorBlack{
    color: $black;
    position: relative;
    animation: firstBlock 2000ms;
    animation-timing-function: ease-out;
  }

    .colorGreen{
    position: relative;
    transform: translateY(-100%);
    color: $primary;
    transition: all 1.25s;
  }

  .moveBottom{
    transform: translateY(0%)
  }

  @keyframes firstBlock {
    0% {
      opacity: 0;
      top: -100%;
      }
    100% {
      opacity: 1;
      top: 0px
      }
  }
  .showGetStarted{
    opacity: 1 !important;
  }

  .get-started{
    opacity: 0;
    position: relative;
    height: 60px;
    top: -109px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 20px;
    color: $black;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
      color: $primaryHover;
      padding-left: 16px;
    }

    &:after{
      right: 4px;
    }
  }
</style>
