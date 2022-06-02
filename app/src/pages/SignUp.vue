<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'

const typing = ref()
</script>

<template>
  <header-main />

    <form class="signUpForm">
      <h1 class="title-tell-us"> Tell Us About Yourselft {{ typing }}</h1>

    <div class="firstlastName">
      <base-input
        id="123"
        class="input-short"
        type="text"
        label="Given Name"
        v-model="givenName"
      />

      <base-input
        id='456'
        class='input-short'
        type='text'
        label='Last Name'
        v-model='lastName'
      />
    </div>

      <base-input
        id='789'
        class='input-long'
        type='text'
        label='Job Position'
        v-model='jobPositioin'
      />

      <base-input
        id='789'
        class='input-long'
        type='email'
        label='Email'
        v-model='email'
      />

      <base-input
        id='789'
        class='input-long'
        type='text'
        label='Password'
        v-model='password'
      />
  </form>

</template>

<style scoped lang="scss">

.signUpForm{
  display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
}
.title-tell-us{
  font-weight: 700;
  font-size: 25px;
}

.firstlastName{
  display: flex;
  width: 420px;
  justify-content: space-around;
}

</style>
