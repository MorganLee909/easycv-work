<template>
  <div class="input-container" :class="{error: !isValidInput}">

    <input
      @keyup="typingHandle"
      @keydown="clearTimer"
      @focus="onFocus"
      @blur="onBlur"
      :type="type"
      class=""
      v-model="watchInpute"
      required
    />

    <label :class="[ activeInput ? 'inputLabelActive' : '', 'inputLabel' ]">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref } from 'vue'

const watchInpute = ref('')
const isValidInput = ref(true)
const activeInput = ref(false)

const onBlur = () => {
  if (watchInpute.value.length > 1) {
    activeInput.value = true
  } else {
    activeInput.value = false
  }
}

const onFocus = () => {
  activeInput.value = true
}

const props = withDefaults(
  defineProps<{
      id?: string
      label?: string
      type?: string
    }>(),
  {
    id: '',
    label: '',
    type: 'text'
  }
)

const doneTypingInterval = 500

const doneTyping = () => {
  inputValidation(watchInpute.value)
}

const typingTimer = setTimeout(doneTyping, doneTypingInterval)

const typingHandle = () => {
  clearTimeout(typingTimer)
  setTimeout(doneTyping, doneTypingInterval)
}

const clearTimer = () => {
  clearTimeout(typingTimer)
}

const inputValidation = (inputValue) => {
  if (props.type === 'email') {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
      // console.log('Good Email')
      isValidInput.value = true
      updateInputValue()
    } else {
      // console.log('Please enter a valid email address')
      isValidInput.value = false
      updateInputValue()
    }
  }

  if (props.type === 'text') {
    if (inputValue.length > 1) {
      isValidInput.value = true
      updateInputValue()
    } else {
      isValidInput.value = false
      updateInputValue()
    }
  }

  if (props.type === 'password') {
    if (/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(inputValue)) {
      // console.log('password is good')
      isValidInput.value = true
      updateInputValue()
    } else {
      // console.log('password is bad')
      isValidInput.value = false
      updateInputValue()
    }
  }
}

const emit = defineEmits<{(e: 'update:isValid', value: boolean, label: string): void;
  }>()

const updateInputValue = () => {
  emit('update:isValid', isValidInput.value, props.label, watchInpute.value)
}

</script>

<style scoped lang="scss">
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

.input-container{
  display: flex;
  flex-flow: column;
  position: relative;
  margin-top: 60px;

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
}

.inputLabel{
  position: absolute;
  left: 10px;
  bottom: 15px;
  font-size: 16px;
  color: $middleGrey;
  transition: .25s;
  pointer-events: none;
}

.inputLabelActive{
  font-size: 14px;
  color: $grey;
  transform: translateY(-52px);
}

//visited
input[type=text]:visited, input[type=email]:visited,
input[type=password]:visited
{
    background: $white;
}

</style>
