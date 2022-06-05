<template>
  <button class="disabled-btn">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    primary?: boolean;
    secondary: boolean;
    disabled?: boolean;
    btnTypeClass?: string;
    label?: string;
    type: string;
  }>(),
  {
    primary: false,
    secondary: false,
    disabled: true,
    type: 'disabled',
    label: 'Button Name'
  }
)
</script>

<style scoped lang="scss">
.disabled-btn {
  margin-top: 60px;
  border: 1px solid $middleGrey;
  border-radius: 2px;
  width: 410px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  color: $middleGrey;
  background-color: unset;
}

.primaryBtn {
  border: 1px solid $primary;
  background-color: $primary;
  color: $white;
  cursor: pointer;
}
</style>
