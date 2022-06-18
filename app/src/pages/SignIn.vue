<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import axios from 'axios'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const isFormValid = ref(false)

const isEmailValid = ref(false)
const emailValue = ref()

const isPasswordValid = ref(false)
const passwordValue = ref()

const passwordShow = ref(false)

const onChildValidation = (isValueValid, label, inputValue, IsPasswordShow) => {
  if (label === 'Email') {
    isEmailValid.value = isValueValid
    emailValue.value = inputValue
  }
  if (label === 'Password') {
    isPasswordValid.value = isValueValid
    passwordValue.value = inputValue
    passwordShow.value = IsPasswordShow
  }

  isFormValid.value = formValidation()
}

const formValidation = () => {
  if (
    isEmailValid.value &&
    isPasswordValid.value
  ) {
    return true
  } else {
    return false
  }
}

const onSubmit = () => {
  axios.post('/api/login', {
    email: emailValue.value,
    password: passwordValue.value
  })
    .then(function (response) {
      console.log('response', response)
      router.push('/logged-in')
    })
    .catch(function (error) {
      console.log('error', error)
    })
}

</script>

<template>
  <header-main label="Sign Up" hrefUrl="sign-up" />
  <form v-on:submit.prevent="onSubmit" class="signInForm" autocomplete="off">
    <h1 class="title-tell-us">Sign In</h1>

    <base-input
      class="input-long"
      type="email"
      label="Email"
      name="Email"
      v-on:update:is-valid="onChildValidation"
      required
    />

    <base-input
      class="input-long"
      :type="passwordShow ? 'text' : 'password' "
      label="Password"
      name="Password"
      v-on:update:is-valid="onChildValidation"
      required
    />

    <base-button label="Sign In" :class="{ primaryBtn: isFormValid }" type="submit" />
  </form>
</template>

<style lang="scss">

.signInForm {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: 70vh;
}
</style>
