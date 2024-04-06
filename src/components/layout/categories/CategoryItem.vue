<script setup lang="ts">
import { computed } from 'vue'
import type { IMenuItem } from "@/types/types";

const props = defineProps<{
  item: IMenuItem
  activeItem: string
}>()

const isActiveStyles = computed(() => {
  const common = ['rounded-full', 'border', 'px-3', 'py-1', 'transition']
  return props.item.title === props.activeItem ?
    [...common, 'bg-gray-600', 'border-gray-700', 'hover:bg-gray-500', 'text-white']
    : [...common, 'bg-gray-100', 'border-gray-300', 'hover:bg-gray-200']
})
</script>

<template>
  <a
    :href="`${item.url}`"
    :class="isActiveStyles">
    {{ item.title }}
  </a>
</template>

<style scoped></style>
