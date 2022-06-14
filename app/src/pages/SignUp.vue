<script setup lang="ts">
import { ref } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

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
    .then((response) => response.json())
    .then((data) => console.log('data', data, 'user registered'))
    .catch((err) => console.log('error', err))
}

</script>

<template>
  <header-main />

  <form v-on:submit="onSubmit" class="signUpForm" autocomplete="off">
    <h1 class="title-tell-us">Tell Us About Yourself</h1>

    <div class="firstlastName">
      <base-input
        class="input-short"
        type="text"
        label="Given Name"
        name="Given Name"
        v-on:update:is-valid="onChildValidation"
        required
      />

      <base-input
        class="input-short"
        type="text"
        label="Last Name"
        name="Last Name"
        v-on:update:is-valid="onChildValidation"
        required
      />
    </div>

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
