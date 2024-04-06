<script setup lang="ts">
import UiTooltip from '@/components/ui/UiTooltip.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import { computed, nextTick, ref, watch } from 'vue'
import { bodyLock, bodyUnlock } from '@/utils/lockScroll'
import { useCurrentElement } from '@vueuse/core'
import { useVideoStore } from "@/stores/video.store";

const props = defineProps<{
  isMobileSearchActive: boolean
}>()

const emit = defineEmits<{
  (e: 'closeSearch'): void
  (e: 'input', value: string): void
}>()

const videoStore = useVideoStore();

const elArea = useCurrentElement()
const input = ref<HTMLInputElement>()

const searchValue = ref<string>('')

function closeSearch(): void {
  emit('closeSearch')
  window.removeEventListener('click', outsideClick)
}

function outsideClick(e: MouseEvent) {
  if (!elArea.value.contains(e.target as HTMLElement)) {
    closeSearch()
  }
}

function submit() {
  if (!searchValue.value) return
  videoStore.getSearchData(searchValue.value)
  closeSearch()
  searchValue.value = ''
}

watch(props, () => {
  if (props.isMobileSearchActive) {
    bodyLock()
    nextTick(() => input.value && input.value.focus())
    window.addEventListener('click', outsideClick, {
      capture: true,
    })
  } else {
    bodyUnlock(100)
  }
})
</script>

<template>
  <form
    @submit.prevent="submit()"
    :class="isMobileSearchActive ? 'absolute inset-0 z-50 flex bg-white p-1' : 'hidden sm:flex'"
    class="h-full w-full items-center">
    <UiTooltip text="Назад" v-if="isMobileSearchActive">
      <button @click="closeSearch()">
        <UiIcon
          class="mr-3 w-5"
          name="arrowLeft" />
      </button>
    </UiTooltip>
    <input
      ref="input"
      v-model.trim="searchValue"
      @keydown.esc="closeSearch()"
      type="text"
      placeholder="Введите запрос"
      class="h-full w-full rounded-l-2xl border border-gray-300 px-3 shadow-inner focus:border-blue-700 focus:outline-none" />
    <UiTooltip
      text="Введите запрос"
      class="h-full">
      <button
        class="flex h-full items-center rounded-r-2xl border border-l-0 border-gray-300 bg-gray-100 px-6 py-1 text-gray-600 hover:bg-gray-200 focus:outline-none">
        <UiIcon
          name="search"
          class="w-5" />
      </button>
    </UiTooltip>
  </form>
</template>

<style scoped></style>
