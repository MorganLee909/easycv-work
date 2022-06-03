<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const givenName = ref()
</script>

<template>
  <header-main />

    <form class="signUpForm">
      <h1 class="title-tell-us"> Tell Us About Yourselft {{ givenName }}</h1>

      <div class="firstlastName">
        <base-input
          class="input-short"
          type="text"
          label="Given Name"
          v-model="givenName"
        />

        <base-input
          class='input-short'
          type='text'
          label='Last Name'
        />
      </div>

      <base-input
        class='input-long'
        type='text'
        label='Job Position'
      />

      <base-input
        class='input-long'
        type='email'
        label='Email'
      />

      <base-input
        class='input-long'
        type='password'
        label='Password'
      />

      <base-button
        label="Next"
        class="primary-btn"
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
