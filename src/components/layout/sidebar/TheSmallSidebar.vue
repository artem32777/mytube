<script setup lang="ts">
import SidebarItem from '@/components/layout/sidebar/SidebarItem.vue'
import { SIDEBAR_ITEMS } from "@/components/layout/sidebar/sidebar.data";
import type {  ISideBarItemTitles } from "@/components/layout/sidebar/sidebar.data";


defineProps<{
   activeItem : ISideBarItemTitles
}>()

defineEmits<{
  (e: 'activeItem', title: ISideBarItemTitles): void
}>()

</script>

<template>
  <aside class="fixed top-0 z-20 hidden min-h-screen overflow-auto bg-white pt-14 md:block">
    <section>
      <ul>
        <SidebarItem
          v-for="item in SIDEBAR_ITEMS.filter((el) => ['Home', 'Trending', 'Subscriptions', 'Library', 'History'].includes(el.title))"
          :key="item.title"
          :item="item"
          :small-type="true"
          :active-item="activeItem"
          @click="$emit('activeItem', item.title)"
        />
      </ul>
    </section>
  </aside>
</template>

<style scoped></style>
