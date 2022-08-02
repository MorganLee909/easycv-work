<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import HeaderMain from '@/components/HeaderMain.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseToaster from '@/components/BaseToaster.vue'
import BaseWizzard from '@/components/wizzard/BaseWizzard.vue'

const isShowToaster = ref(false)
const toasterType = ref()
const toasterMessage = ref()

</script>

<template>
  <base-toaster v-if="isShowToaster" :type="toasterType" :message="toasterMessage"/>
  <header-main label="Log Out" hrefUrl="api/logout" />

  <form v-on:submit.prevent="onSubmit" class="signUpForm" autocomplete="off">
    <h1 class="title-tell-us">Tell Us About Yourself</h1>

    <base-wizzard :isRegistered="true" :experience="true" ></base-wizzard>

    <base-input class="input-long" type="text" label="Employer" name="Employer" v-on:update:is-valid="onChildValidation"
      required />

    <div class="firstlastName">
      <base-input class="input-short" type="text" label="Start Date" name="Start Date"
        v-on:update:is-valid="onChildValidation" required />

      <base-input class="input-short" type="text" label="End Date" name="Last Name"
        v-on:update:is-valid="onChildValidation" required />
    </div>

    <base-input class="input-long" type="test" label="Description" name="Description"
      v-on:update:is-valid="onChildValidation" />

    <base-button label="Next" :class="{ primaryBtn: isFormValid }" type="submit" />
  </form>
</template>

<style lang="scss">

  h1{
    text-align: center;
  }

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
