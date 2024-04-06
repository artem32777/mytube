<script setup lang="ts">
import TheFullSidebarContent from '@/components/layout/sidebar/TheFullSidebarContent.vue'
import UiLogo from '@/components/ui/UiLogo.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import { nextTick, ref, watch } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.store'
import type { ISideBarItemTitles } from '@/components/layout/sidebar/sidebar.data'

const sidebarStore = useSidebarStore()

const fullSidebar = ref<HTMLElement>()

defineEmits<{
  (e: 'activeItem', title: ISideBarItemTitles): void
}>()

defineProps<{
  activeItem: ISideBarItemTitles
}>()

watch(
  sidebarStore,
  () =>
    sidebarStore.isFullSidebarOpen &&
    nextTick(() => fullSidebar.value && fullSidebar.value.focus()),
)
</script>

<template>
  <Transition
    enter-active-class="transition-opacity ease-linear duration-333"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-333"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <i
      v-if="sidebarStore.mediaQuery !== 'desktop' && sidebarStore.isFullSidebarOpen"
      @click="sidebarStore.closeFullSidebar()"
      role="presentation"
      class="fixed inset-0 z-30 block bg-black bg-opacity-50" />
  </Transition>
  <Transition
    v-show="sidebarStore.isFullSidebarOpen"
    enter-active-class="transition ease-in-out duration-333 transform"
    enter-from-class="-translate-x-full opacity-0"
    enter-to-class="opacity-x-0"
    leave-active-class="transition ease-in-out duration-333 transform"
    leave-from-class="opacity-x-0"
    leave-to-class="-translate-x-full">
    <aside
      tabindex="-1"
      ref="fullSidebar"
      @keydown.esc="sidebarStore.closeFullSidebar()"
      class="fixed z-40 h-screen w-64 overflow-auto bg-white outline-none"
      :class="{ 'mt-12': sidebarStore.mediaQuery === 'desktop' }">
      <section
        v-if="sidebarStore.mediaQuery != 'desktop'"
        class="sticky top-0 flex items-center border-b bg-white p-4">
        <button
          @click="sidebarStore.closeFullSidebar()"
          class="mr-3 focus:outline-none sm:ml-2 sm:mr-6">
          <UiIcon name="burger" />
        </button>
        <UiLogo />
      </section>
      <TheFullSidebarContent
        :active-item="activeItem"
        @active-item="$emit('activeItem', $event)" />
    </aside>
  </Transition>
</template>

<style scoped></style>