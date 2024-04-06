<script setup lang="ts">
import SidebarItem from '@/components/layout/sidebar/SidebarItem.vue'
import UiButtonSignIn from '@/components/ui/buttons/UiButtonSignIn.vue'
import TheSidebarFooter from '@/components/layout/sidebar/TheSidebarFooter.vue'

import { SIDEBAR_ITEMS } from '@/components/layout/sidebar/sidebar.data'
import type { ISideBarItemTitles } from '@/components/layout/sidebar/sidebar.data'

defineEmits<{
  (e: 'activeItem', title: ISideBarItemTitles ): void
}>()

defineProps<{
   activeItem: ISideBarItemTitles
}>()

const takeItems = (titles: ISideBarItemTitles[]) =>
  SIDEBAR_ITEMS.filter((el) => titles.includes(el.title))

</script>

<template>
  <section class="border-b py-2">
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Home', 'Trending', 'Subscriptions'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        :active-item="activeItem" />
    </ul>
  </section>
  <section class="border-b py-2">
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Library', 'History'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        :active-item="activeItem" />
    </ul>
  </section>
  <section class="border-b px-8 py-4 font-medium leading-5">
    <span class="text-sm"> Sign in to like videos, comment, and subscribe. </span>
    <UiButtonSignIn class="mt-3" />
  </section>
  <section>
    <div class="px-6 py-2 text-sm font-semibold uppercase">Best of YouTube</div>
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Music', 'Sports', 'Gaming', 'Movies', 'News', 'Video'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        class=""
        :active-item="activeItem" />
    </ul>
  </section>
  <section class="border-b py-2">
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Browse channels'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        :active-item="activeItem" />
    </ul>
  </section>
  <section class="border-b py-2">
    <div class="px-6 py-2 text-sm font-semibold uppercase">More from YouTube</div>
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Live', 'YouTube Premium'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        :active-item="activeItem" />
    </ul>
  </section>
  <section class="border-b py-2">
    <ul>
      <SidebarItem
        v-for="item in takeItems(['Settings', 'Report history', 'Help', 'Send feedback'])"
        @click="$emit('activeItem', item.title)"
        :item="item"
        :active-item="activeItem" />
    </ul>
  </section>
  <TheSidebarFooter />
</template>

<style scoped></style>
