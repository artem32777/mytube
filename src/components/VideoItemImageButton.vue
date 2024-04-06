<script setup lang="ts">
import UiIcon from '@/components/ui/UiIcon.vue'
import type { ICONS_TITLES } from '@/components/ui/icons.data'
import { ref } from 'vue'
const props = defineProps<{
  icon: ICONS_TITLES
  label: string
}>()

const isLabelOpen = ref<boolean>(false)
</script>

<template>
  <button
    @mouseenter="isLabelOpen = true"
    @mouseleave="isLabelOpen = false"
    class="relative m-1 rounded-sm bg-black bg-opacity-60 p-1 opacity-0 text-white group-hover:opacity-100">
    <UiIcon
      :name="icon"
      class="w-5" />
    <span
      :class="{ 'opacity-0 -translate-x-1/4': !isLabelOpen }"
      class="absolute transition-all right-full top-0 h-5 text-nowrap bg-black px-2 py-0.5">
      {{label}}
    </span>
  </button>
</template>

<style scoped></style>
