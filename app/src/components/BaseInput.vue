<template>
  <div class="input-container">
    <!-- <label v-if="label" :for="id" class="">
      {{ label }}
    </label> -->

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input='updateInputValue'
      class=""
      required
    />

    <label>
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref } from 'vue'

const props = withDefaults(
  defineProps<{
      id?: string
      label?: string
      type?: string
      modelValue?: string
    }>(),
  {
    id: '',
    label: '',
    type: 'text',
    modelValue: ''
  }
)

const emit = defineEmits<{(e: 'update:modelValue', value: string): void;
  }>()

const updateInputValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
  console.log('target.value', target.value, 'props.modelValue', props.modelValue)
}

</script>

<style scoped lang="scss">
input{
  height: 50px;
  background: #FFFFFF;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  text-align: left;
  outline: none;
  border: none;
  border: 1px solid $secondGrey;
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

.input-container label{
  position: absolute;
  left: 10px;
  bottom: 15px;
  font-size: 16px;
  color: $middleGrey;
  transition: .25s;
  pointer-events: none;
}

input[type=text]:focus + label,
input[type=email]:focus + label

{
  font-size: 14px;
  color: $grey;
  transform: translateY(-52px);
}

input[type=text]:valid + label {
  transform: translateY(-52px);
  font-size: 14px;
  color: $grey;
}

input[type=text]:focus, input[type=text]:hover{
  border: 1px solid $primary;
}
input[type=text]:valid + label, input[type=email]:valid + label {
    transform: translateY(-52px);
    font-size: 14px;
    color: $grey;
}
</style>
