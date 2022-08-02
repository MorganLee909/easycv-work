<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    active?: boolean;
    passed: boolean;
    step: string;
    label: string;
    showRoute?: boolean;
  }>(),
  {
    active: false,
    passed: false,
    showRoute: true
  }
)
</script>

<template>
    <div class="wizzardPointContainer">
        <div class="circle" :class="{ circleFilled: passed, circleInnactive: !active && !passed }">
            <p> {{ step }} </p>
        </div>
        <p class="wizzardPointLabel" :class="{ labelInnactive: !passed }">{{ label }}</p>
    </div>
    <div v-if="showRoute" class="wizzardRoute" :class="{wizzardRoutePassed: passed}"></div>
</template>

<style scoped lang="scss">

    .wizzardPointContainer{
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 84px;
    }
    .wizzardPointLabel{
        font-weight: 400;
        font-size: 10px;
        text-align: center;
        color: $black;
    }
    .circle{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        background: #FFFFFF;
        border: 1px solid $primary;
        border-radius: 25.969px;
    }

    .circle p{
        font-weight: 600;
        font-size: 12px;
        text-align: center;
        color: $primary;
    }
    .circleFilled{
        background-color: $primary;
    }

    .circleFilled p{
        color: $white;
    }

    .circleInnactive{
        border: 1px solid #C4C4C4;
        background-color: unset;

        p{
            color: $grey;
        }
    }

    .labelInnactive{
        color: $grey;
    }
    .wizzardRoute{
        width: 160px;
        height: 0px;
        border: 1px dashed $lightGrey;
        margin-top: 14px;
        position: relative;
    }

    .wizzardRoutePassed{
        border: 0.5px solid $primary;
    }

</style>
