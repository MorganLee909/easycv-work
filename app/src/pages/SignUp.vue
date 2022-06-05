<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const givenName = ref()

const isFormValid = ref(false)

const isGivenNameValid = ref(false)
const isLastNameValid = ref(false)
const isJobPositionValid = ref(false)
const isEmailValid = ref(false)
const isPasswordValid = ref(false)

const onChildValidation = (value, label) => {
  if (label === 'Given Name') {
    isGivenNameValid.value = value
  }
  if (label === 'Last Name') { isLastNameValid.value = value }
  if (label === 'Job Position') { isJobPositionValid.value = value }
  if (label === 'Email') { isEmailValid.value = value }
  if (label === 'Password') { isPasswordValid.value = value }

  isFormValid.value = formValidation()
  console.log('isFormValid__', isFormValid.value)
}

const formValidation = () => {
  if (
    isGivenNameValid.value &&
    isLastNameValid.value &&
    isJobPositionValid.value &&
    isEmailValid.value &&
    isPasswordValid.value) {
    return true
  } else {
    return false
  }
}

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
          v-on:update:is-valid="onChildValidation"
          v-model="givenName"
        />

        <base-input
          class='input-short'
          type='text'
          label='Last Name'
          v-on:update:is-valid="onChildValidation"
        />
      </div>

      <base-input
        class='input-long'
        type='text'
        label='Job Position'
        v-on:update:is-valid="onChildValidation"
      />

      <base-input
        class='input-long'
        type='email'
        label='Email'
        v-on:update:is-valid="onChildValidation"
      />

      <base-input
        class='input-long'
        type='password'
        label='Password'
        v-on:update:is-valid="onChildValidation"
      />

      <base-button
        label="Next"
        :class="{primaryBtn: isFormValid}"
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
