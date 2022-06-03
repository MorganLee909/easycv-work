<template>
  <div class="input-container" :class="{error: !isValidInput}">

    <input
      @keyup="typingHandle"
      @keydown="clearTimer"
      @focus="onFocus"
      @blur="onBlur"
      :id="id"
      :type="type"
      @input='updateInputValue'
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
import { defineProps, withDefaults, defineEmits, ref, onMounted, watch, reactive } from 'vue'

const watchInpute = ref('')
const isValidInput = ref(true)
const activeInput = ref(false)

const onBlur = () => {
  if (watchInpute.value.length > 1) {
    activeInput.value = true
  } else {
    activeInput.value = false
  }

  console.log('activeInput.value OnBlur', activeInput.value, watchInpute.value)
}

const onFocus = () => {
  activeInput.value = true
  console.log('activeInput.value OnFocuse', activeInput.value, watchInpute.value)
}

const props = withDefaults(
  defineProps<{
      id?: string
      label?: string
      type?: string
      inputValue: string
    }>(),
  {
    id: '',
    label: '',
    type: 'text',
    inputValue: ''
  }
)

watch(watchInpute, async (watchInputeNewValue) => {
  // console.log('activeInput', activeInput.value)

  if (props.type === 'email') {
    // console.log('props.type-email', props.type)
  }
  if (props.type === 'text') {
    console.log('props.type-text', props.type)
  }
  if (props.type === 'password') {
    console.log('props.type-password', props.type)
  }
  // console.log('watchInputeNewValue', watchInputeNewValue, 'watchInpute', watchInpute.value)
})

const doneTypingInterval = 500

const doneTyping = () => {
  // console.log('done typing', watchInpute.value)

  if (props.type === 'email') {
    checkEmail(watchInpute.value)
  }
}

const typingTimer = setTimeout(doneTyping, doneTypingInterval)

const typingHandle = () => {
  // console.log('typing')

  clearTimeout(typingTimer)
  setTimeout(doneTyping, doneTypingInterval)
}

const clearTimer = () => {
  // console.log('clear timer')

  clearTimeout(typingTimer)
}

const checkEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    // this.msg['email'] = 'Please enter a valid email address';
    console.log('Good Email')
    isValidInput.value = true
  } else {
    console.log('Please enter a valid email address')
    isValidInput.value = false

    // this.msg['email'] = '';
  }
}
// const inputValue = ref(myInput)
// const inputValue2 = computed(() => props.modelValue)

// console.log('inputValue2', inputValue2)

// const emit = defineEmits<{(e: 'update:modelValue', value: string): void;
//   }>()

// const updateInputValue = (e: Event) => {
//   const target = e.target as HTMLInputElement
//   emit('update:modelValue', target.value)
//   console.log('target.value', target.value, 'target.type', target.type)
// }

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

// .input-container label{
//   position: absolute;
//   left: 10px;
//   bottom: 15px;
//   font-size: 16px;
//   color: $middleGrey;
//   transition: .25s;
//   pointer-events: none;
// }

// input[type=text]:focus + label,
// input[type=email]:focus + label,
// input[type=password]:focus + label

// {
//   font-size: 14px;
//   color: $grey;
//   transform: translateY(-52px);
// }

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

// input[type=text]:focus, input[type=text]:hover,
// input[type=email]:focus, input[type=email]:hover,
// input[type=password]:focus, input[type=password]:hover
// {
//   border: 1px solid $primary;
// }

//visited
input[type=text]:visited, input[type=email]:visited,
input[type=password]:visited
{
    background: $white;
}

// input[type=text]:valid + label, input[type=email]:valid + label,
// input[type=password]:valid + label
// {
//     transform: translateY(-52px);
//     font-size: 14px;
//     color: $grey;
// }

</style>
