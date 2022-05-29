<script setup lang="ts">

</script>

<template>
  <div class="container-moto">
    <p class="moto colorBlack">Create the Best CV</p>
    <div class="second-row-container">
      <p class="moto colorGreen">in just Several <br> Clicks</p>
      <p class="get-started"> Get Started --> </p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .container-moto{
    display: block;
    // justify-content: center;
    // height: 100vh;
    // flex-flow: column;
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
    animation: firstBlock 1500ms;
    // animation-delay: 0.5s;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    // transition: visibility 0s, opacity 0.5s linear;
  }

    .colorGreen{
    // display: inline-block;
    position: relative;
    transform: translateY(0%);
    color: $primary;
    animation: secondBlock 1500ms ;
    // animation: secondBlock 1200ms;
    // animation-delay: 2s;
    // animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    // transition: opacity 5s, transform 5s;
    // transition: visibility 0s, opacity 5s linear;

  // &:before{
  //   overflow: hidden;
  //   top: -220px;
  //   transition: all 1s;
  // }

  // &:after{
  //   overflow: visible;
  //   top: 0px;
  //   transition: width 1s ease-in-out;
  // }

  }

  // @for $i from 1 through 2 {
  //     .moto {
  //         animation-delay: #{$i * 2.5}s;
  //     }
  // }

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

  @keyframes secondBlock {
    0% {
      opacity: 0;
      transform: translateY(-100%);
      // transform: scaleX(10%);
      // top: -100%;
      }
    100% {
      // transform: scaleX(100%);
      opacity: 1;
      // top: 0px
      // width: 100%;
      }
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
