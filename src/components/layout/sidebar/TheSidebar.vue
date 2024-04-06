<script setup lang="ts">
import TheFullSidebar from '@/components/layout/sidebar/TheFullSidebar.vue'
import TheSmallSidebar from '@/components/layout/sidebar/TheSmallSidebar.vue'
import { useSidebarStore } from '@/stores/sidebar.store'
import { onMounted, ref } from 'vue'
import type { ISideBarItemTitles } from '@/components/layout/sidebar/sidebar.data'
import { SIDEBAR_ITEMS } from '@/components/layout/sidebar/sidebar.data'

const sidebarStore = useSidebarStore()

onMounted(() => {
  sidebarStore.init()
})

const activeItem = ref<ISideBarItemTitles>(SIDEBAR_ITEMS[0].title)
</script>

<template>
  <Transition
  enter-active-class="duration-[0.2s] translate-all"
  enter-from-class="opacity-0 -translate-x-full"
  enter-to-class="opacity-100 translate-none"
  >
    <TheSmallSidebar
      :active-item="activeItem"
      @active-item="activeItem = $event"
      v-if="sidebarStore.mediaQuery != 'mobile'"
      v-show="!sidebarStore.isFullSidebarOpen" />
  </Transition>

  <TheFullSidebar
    :active-item="activeItem"
    @active-item="activeItem = $event" />
</template>

<style scoped></style>
