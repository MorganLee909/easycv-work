<template>
  <div class="input-container" :class="{error: !isValidInput }">

    <input
      @keyup="typingHandle"
      @keydown="typingHandle"
      @focus="typingHandle"
      @blur="typingHandle"
      :type="type"
      name=""
      class=""
      v-model="watchInpute"
      @animationstart="checkAnimation"
    />

    <label :class="[ activeInput ? 'inputLabelActive' : '', 'inputLabel' ]">
      {{ label }}
    </label>

    <p v-if="!isValidInput" class="inputErrorMessage"> {{ message }} </p>

    <img
    v-if="props.name === 'Sign Up Password'"
      @click="showPassword"
      class="show-password-icon"
      :src="eyeIcon[eyeIconIndex]"
      />
  </div>

</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref } from 'vue'

const props = withDefaults(
  defineProps<{
      id?: string
      label?: string
      type?: string
      name: string
    }>(),
  {
    id: '',
    label: '',
    type: 'text'
  }
)

const watchInpute = ref('')
const isValidInput = ref(true)
const activeInput = ref(false)
const message = ref('')
const isPasswordOpen = ref(false)
const eyeIcon = ref([require('../assets/svg/eyeClose.svg'), require('../assets/svg/eyeOpen.svg')])
const eyeIconIndex = ref(0)

const doneTyping = () => {
  inputValidation(watchInpute.value)
}

const typingHandle = () => {
  activeInput.value = true
  setTimeout(doneTyping, 1500)
}

const inputValidation = (inputValue) => {
  if (props.type === 'email') {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
      isValidInput.value = true
      updateInputValue()
    } else {
      isValidInput.value = false
      message.value = 'Please enter a valid email address'
      updateInputValue()
    }
  }

  if (props.type === 'text') {
    if (inputValue.length > 1) {
      isValidInput.value = true
      updateInputValue()
    } else {
      isValidInput.value = false
      message.value = 'Required field'
      updateInputValue()
    }
  }

  if (props.label === 'Password') {
    if (/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(inputValue)) {
      isValidInput.value = true
      updateInputValue()
    } else {
      isValidInput.value = false
      message.value = 'Bad password'
      updateInputValue()
    }
  }
}

const emit = defineEmits<{(e: 'update:isValid', value: boolean, label: string): void;
  }>()

const updateInputValue = () => {
  emit('update:isValid', isValidInput.value, props.label, watchInpute.value, isPasswordOpen.value)
}

const checkAnimation = (e: { animationName: string }) => {
  if (e.animationName === 'on-auto-fill-start-2d998ef9') {
    activeInput.value = true
  }
}

const showPassword = () => {
  isPasswordOpen.value = !isPasswordOpen.value

  if (eyeIconIndex.value === 1) {
    eyeIconIndex.value = 0
  } else {
    eyeIconIndex.value = 1
  }

  updateInputValue()
}

</script>

<style scoped lang="scss">
:-webkit-autofill {
    animation-name: on-auto-fill-start;
  }

:not(:-webkit-autofill) {
  animation-name: on-auto-fill-cancel;
}

@keyframes on-auto-fill-start {
}

@keyframes on-auto-fill-cancel {
}

input{
  height: 50px;
  background: $white;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  text-align: left;
  outline: none;
  border: none;
  border: 1px solid $lightGrey;
  padding-left: 10px;
  font-size: 16px;
}

input:focus {
  border: 1.5px solid $primary !important;
}

input:hover {
  border: 1px solid $middleGrey;
}

.input-container{
  display: flex;
  flex-flow: column;
  position: relative;
  margin-top: 30px;
  height: 94px;
}
.input-short{
  width: 200px;
}

.input-long{
  width: 410px;
}

.error input, .error input:focus,
.error input:active, .error input:visited, .error input:hover{
  border: 1px solid $error !important;
  transition: .75s;
}

.inputErrorMessage{
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  color: $error;
  transition: .75s;
}

.inputLabel{
  position: absolute;
  left: 10px;
  top: 16px;
  font-size: 16px;
  color: $lightGrey2;
  transition: .25s;
  pointer-events: none;
}

.inputLabelActive{
  font-size: 14px;
  color: $grey;
  transform: translateY(-52px);
}

input[type=text]:visited, input[type=email]:visited,
input[type=password]:visited
{
    background: $white;
}

.show-password-icon{
  position: absolute;
  right: 12px;
  top: 16px;
  height: 22px;
  width: 22px;
  cursor: pointer;
}
</style>
