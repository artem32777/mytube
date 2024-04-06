<script setup lang="ts">
import UiIcon from '@/components/ui/UiIcon.vue'
import UiTooltip from '@/components/ui/UiTooltip.vue'
import TheHeaderSearchInput from '@/components/layout/header/TheHeaderSearchInput.vue'
import { ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize()

const isMobileSearchActive = ref<boolean>(false)

function toggleMobileInput(): void {
  isMobileSearchActive.value = !isMobileSearchActive.value
}


watch(width, () => {
  if (width.value > 768) {
    isMobileSearchActive.value = false
  }
})

</script>

<template>
  <div
    class="flex h-[50px] max-w-screen-md flex-1 items-center justify-end p-2.5 pl-8 md:px-8 md:pl-12 lg:w-1/2 lg:px-0">
    <TheHeaderSearchInput
      @close-search="isMobileSearchActive = false"
      :is-mobile-search-active="isMobileSearchActive" />
    <UiTooltip
      @click="toggleMobileInput"
      text="Поиск">
      <button class="p-2 focus:outline-none sm:hidden">
        <UiIcon
          name="search"
          class="w-5" />
      </button>
    </UiTooltip>

    <UiTooltip
      text="Голосовой поиск"
      class="ml-4">
      <button class="focus:outline-none">
        <UiIcon
          name="microphone"
          class="w-5 pt-1" />
      </button>
    </UiTooltip>
  </div>
</template>

<style scoped></style>
