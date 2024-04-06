<script setup lang="ts">
import CategoryItem from '@/components/layout/categories/CategoryItem.vue'
import { computed, ref } from "vue";
import { CATEGORIES_DATA } from '@/components/layout/categories/categories.data'
import type { ICategoriesTitles } from '@/components/layout/categories/categories.data'
import { useSidebarStore } from '@/stores/sidebar.store'

const activeItem = ref<ICategoriesTitles>(CATEGORIES_DATA[0].title)

const sidebarStore = useSidebarStore()



const paddingStyles = computed(() => {
  const defaultStyles = ["fixed", "z-10", "w-full", "bg-white", "bg-opacity-95", "pt-14", 'transition-all']
  if (sidebarStore.mediaQuery === 'desktop') {
    return sidebarStore.isFullSidebarOpen
      ? [...defaultStyles, 'pl-64']
      : [...defaultStyles, 'pl-24']
  }
  if(sidebarStore.mediaQuery === 'tablet'){
    return [...defaultStyles, 'pl-24']
  }
  else return defaultStyles
})

</script>

<template>
  <Transition>

  </Transition>
  <section
    :class="paddingStyles">
    <div class="m-auto border-b border-t px-4">
      <div class="flex space-x-3 overflow-auto whitespace-nowrap py-3 text-sm">
        <CategoryItem
          v-for="item in CATEGORIES_DATA"
          :key="item.title"
          @click="activeItem = item.title"
          :item="item"
          :active-item="activeItem" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
