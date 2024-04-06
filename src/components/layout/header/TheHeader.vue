<script setup lang="ts">
import TheHeaderSearch from '@/components/layout/header/TheHeaderSearch.vue'
import TheHeaderMenu from '@/components/layout/header/TheHeaderMenu.vue'
import UiLogo from '@/components/ui/UiLogo.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import { useSidebarStore } from '@/stores/sidebar.store'
import UiTooltip from '@/components/ui/UiTooltip.vue'

const sidebarStore = useSidebarStore()
</script>

<template>
  <header
    data-lp
    class="fixed z-30 flex w-full items-center sm:justify-between">
    <div class="flex lg:w-1/4">
      <div class="flex items-center pl-4 xl:w-64 xl:bg-white">
        <UiTooltip
          text="Меню"
          class="relative mr-3 sm:ml-2 sm:mr-6 pt-1">
          <button
            @click="sidebarStore.toggleFullSidebar()"
            class="focus:outline-none">
            <UiIcon name="burger" />
          </button>
        </UiTooltip>
        <UiLogo class="hidden sm:block" />
      </div>
    </div>
    <TheHeaderSearch />
    <TheHeaderMenu />
  </header>
</template>

<style scoped></style>
