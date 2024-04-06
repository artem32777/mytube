<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  text: string
  position?: 'top'
}>()

const isShow = ref<boolean>(false)

</script>

<template>
  <div class="relative">
    <div
      @click.self="isShow = !isShow"
      class="h-full w-full z-10"
      @mouseenter.self="isShow = true"
      @mouseleave.self="isShow = false">
      <slot />
    </div>
    <Transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="transition-opacity duration-200 delay-700"
      leave-active-class="transition-opacity duration-100 delay-0"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="isShow"
        :class="{ 'bottom-4': position, 'top-12': !position }"
        class="absolute left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-700 bg-opacity-80 p-2 text-xs text-white">
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
