<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const inputValue = ref()

const isFormValid = ref(false)

const isGivenNameValid = ref(false)
const nameValue = ref()

const isLastNameValid = ref(false)
const lastNameValue = ref()

const isEmailValid = ref(false)
const emailValue = ref()

const isPasswordValid = ref(false)
const passwordValue = ref()

const onChildValidation = (isValueValid, label, inputValue) => {
  if (label === 'Given Name') {
    isGivenNameValid.value = isValueValid
    nameValue.value = inputValue
    // console.log('inputValue Name', inputValue)
  }
  if (label === 'Last Name') {
    isLastNameValid.value = isValueValid
    lastNameValue.value = inputValue
  }
  // if (label === 'Job Position') {
  //   isJobPositionValid.value = value
  // }
  if (label === 'Email') {
    isEmailValid.value = isValueValid
    emailValue.value = inputValue
  }
  if (label === 'Password') {
    isPasswordValid.value = isValueValid
    passwordValue.value = inputValue
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

const onSubmit = (e) => {
  const req = {
    firstName: nameValue.value,
    lastName: lastNameValue.value,
    email: emailValue.value,
    password: passwordValue.value
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  }

  fetch('/api/user', requestOptions)
    .then(response => response.json())
    .then(data => console.log('data', data, 'user registered'))
    .catch(err => console.log('error', err))
}

</script>

<template>
  <header-main />

  <form
    v-on:submit="onSubmit"
    class="signUpForm"
    autocomplete="on">

    <h1 class="title-tell-us">Tell Us About Yourself {{ inputValue }}</h1>

    <div class="firstlastName">
      <base-input
        class="input-short"
        type="text"
        label="Given Name"
        v-on:update:is-valid="onChildValidation"
      />

      <base-input
        class="input-short"
        type="text"
        label="Last Name"
        v-on:update:is-valid="onChildValidation"
      />
    </div>
    <!-- <base-input
      class="input-long"
      type="text"
      label="Job Position"
      v-on:update:is-valid="onChildValidation"
    /> -->

    <base-input
      class="input-long"
      type="email"
      label="Email"
      v-on:update:is-valid="onChildValidation"
    />

    <base-input
      class="input-long"
      type="password"
      label="Password"
      v-on:update:is-valid="onChildValidation"
    />

    <base-button
      label="Next"
      :class="{ primaryBtn: isFormValid }"
      type="submit"
    />
  </form>
</template>

<style scoped lang="scss">
.signUpForm {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
.title-tell-us {
  font-weight: 700;
  font-size: 25px;
}

.firstlastName {
  display: flex;
  width: 420px;
  justify-content: space-around;
}
</style>
