<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { response } from 'express'

const arrayOfInputValue = ref([])

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
  // console.log('inputValue', inputValue)

  if (label === 'Given Name') {
    isGivenNameValid.value = isValueValid
    nameValue.value = inputValue
    console.log('inputValue Name', inputValue)
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
  // console.log('isFormValid__', isFormValid.value)
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

// const createUserPost = () => {
//   createUser('ivan').then(response => {
//     console.log(response)
//   })
// }
const onSubmit = (e) => {
  // this.form.requestSubmit()
  e.preventDefault() // it prevent from page reload

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
    .then(data => console.log('data', data))
    .catch(err => console.log('err', err))

  // console.log('name', e, 'target', e.target[0], e.target[0][1])
  // console.log('submit form', nameValue.value, lastNameValue.value, emailValue.value, passwordValue.value)
}

</script>

<template>
  <header-main />

  <!-- <form action="/api/user" method="post" class="signUpForm" autocomplete="on"> -->
  <form
  v-on:submit="onSubmit"
  action="/api/user"
  method="post"
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
      value="Submit"
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
