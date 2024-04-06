<script setup lang="ts">
import UiDropdownTransition from '@/components/ui/dropdown/UiDropdownTransition.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import type { ICONS_TITLES } from '@/components/ui/icons.data'
import { nextTick, ref, watch } from 'vue'
import { setDropdownPosition } from '@/utils/utils'
import { bodyLock, bodyUnlock } from '@/utils/lockScroll'
import { useCurrentElement, useFocus } from '@vueuse/core'

defineProps<{
  icon: ICONS_TITLES
}>()

const emit = defineEmits<{
  (e: 'isDropdownOpen', status: boolean): void
}>()

const isOpen = ref<boolean>(false)
const elArea = useCurrentElement()
const dropdownArea = ref()
// const { focused } = useFocus(dropdownArea)

function toggle(event: MouseEvent): void {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => setDropdownPosition(dropdownArea, event))
  }
}

function outsideClick(e: MouseEvent): void {
  if (!elArea.value.contains(e.target as HTMLElement)) {
    isOpen.value = false
    window.removeEventListener('click', outsideClick)
  }
}

watch(isOpen, () => {
  emit('isDropdownOpen', isOpen.value)

  if (isOpen.value) {
    // focused.value = true
    bodyLock()
    window.addEventListener('click', outsideClick, { capture: true })
  } else {
    bodyUnlock(100)
  }
})
</script>

<template>
  <div
    @keydown.esc="isOpen = false"
    :class="$attrs.class || 'relative z-30'">
    <button
      @click="toggle($event)"
      class="p-2 focus:outline-none">
      <UiIcon
        :name="icon"
        class="w-5" />
    </button>
    <div>
      <UiDropdownTransition>
        <div
          ref="dropdownArea"
          v-show="isOpen"
          class="absolute w-60 border border-t-0 bg-white">
          <slot />
        </div>
      </UiDropdownTransition>
    </div>
  </div>
</template>

<style scoped></style>
