<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseToaster from '@/components/BaseToaster.vue'

const isShowToaster = ref(false)
const toasterType = ref()
const toasterMessage = ref()

const isFormValid = ref(false)

const isGivenNameValid = ref(false)
const nameValue = ref()

const isLastNameValid = ref(false)
const lastNameValue = ref()

const isEmailValid = ref(false)
const emailValue = ref()

const isPasswordValid = ref(false)
const passwordValue = ref()
const passwordShow = ref(false)

const onChildValidation = (isValueValid, label, inputValue, IsPasswordShow) => {
  if (label === 'Given Name') {
    isGivenNameValid.value = isValueValid
    nameValue.value = inputValue
  }
  if (label === 'Last Name') {
    isLastNameValid.value = isValueValid
    lastNameValue.value = inputValue
  }

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
    isGivenNameValid.value &&
    isLastNameValid.value &&
    isEmailValid.value &&
    isPasswordValid.value
  ) {
    return true
  } else {
    return false
  }
}

const onSubmit = () => {
  isShowToaster.value = false

  axios.post('/api/user', {
    firstName: nameValue.value,
    lastName: lastNameValue.value,
    email: emailValue.value,
    password: passwordValue.value
  })
    .then((response) => {
      switch (response.data) {
        case 'User with this email already exists':
          toasterType.value = 'warning'
          toasterMessage.value = 'User with this email already exists'
          isShowToaster.value = true
          break
        case 'ERROR: unable to create new user':
          toasterType.value = 'error'
          toasterMessage.value = 'ERROR: unable to create new user'
          isShowToaster.value = true
      }

      if (typeof (response.data) !== 'string') {
        router.push('/logged-in')
      }
    })
}
</script>

<template>
  <base-toaster v-if="isShowToaster" :type="toasterType" :message="toasterMessage"/>
  <header-main label="Sign In" hrefUrl="sign-in" />

  <form v-on:submit.prevent="onSubmit" class="signUpForm" autocomplete="off">
    <h1 class="title-tell-us">Tell Us About Yourself</h1>

    <div class="firstlastName">
      <base-input class="input-short" type="text" label="Given Name" name="Given Name"
        v-on:update:is-valid="onChildValidation" required />

      <base-input class="input-short" type="text" label="Last Name" name="Last Name"
        v-on:update:is-valid="onChildValidation" required />
    </div>

    <base-input class="input-long" type="email" label="Email" name="Email" v-on:update:is-valid="onChildValidation"
      required />

    <base-input class="input-long" :type="passwordShow ? 'text' : 'password'" label="Password" name="Sign Up Password"
      v-on:update:is-valid="onChildValidation" required />

    <base-button label="Next" :class="{ primaryBtn: isFormValid }" type="submit" />
  </form>
</template>

<style scoped lang="scss">
.signUpForm {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: 70vh;
}

.title-tell-us {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 60px;
}

.firstlastName {
  display: flex;
  width: 420px;
  justify-content: space-around;
}
</style>
