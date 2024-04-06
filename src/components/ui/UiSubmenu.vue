<script setup lang="ts">
import UiIcon from '@/components/ui/UiIcon.vue'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useCurrentElement, useFocus } from '@vueuse/core'

const props = defineProps<{
  title: string
  isOpen: boolean
}>()

const elArea = ref()

// const toggleFocus = () => useFocus(elArea).focused.value = !useFocus(elArea).focused.value

const isOpen = ref<boolean>(false)

watch(props, () => {
  isOpen.value = props.isOpen
  setTimeout(() => {
    elArea.value.focus()
    console.log(elArea.value);
  }, 100)
  // useFocus(elArea).focused.value = true
})
</script>

<template>
  <div
    class="ml-auto">
    <UiIcon
      @click="isOpen = true"
      name="arrowRight"
      class="w-6 text-gray-400" />
    <div
      ref="elArea"
      @keydown.esc="isOpen = false"
      v-if="isOpen"
      class="absolute left-0 top-0 h-full w-full bg-white focus:border-2 focus:border-blue-500">
      <div class="flex items-center border-b">
        <UiIcon
          name="arrowLeft"
          @click="isOpen = false" />
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
