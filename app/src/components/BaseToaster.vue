<template>
  <div class="toaster-container">
    <div class="toaster">
      <img class="icon-toaster" src="../assets/svg/alert.svg" />
      <p class="toaster-message">{{props.message}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props =
  defineProps<{
    message: string;
    type: string;
  }>()

</script>

<style scoped lang="scss">
.toaster-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: toaster 3s;
  position: absolute;
  top: -90px;
}

.toaster {
  width: 420px;
  height: 60px;
  background: $error;
  border-radius: 4px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.toaster-message {
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  width: 325px;
  text-align: center;
}

.icon-toaster {
  width: 24px;
  padding: 22px;
}

@keyframes toaster {
  0% {
    top: -90px;
  }

  50% {
    top: 40px;
  }

  75% {
    top: 40px;
  }

  100% {
    top: -90px;
  }
}
</style>
