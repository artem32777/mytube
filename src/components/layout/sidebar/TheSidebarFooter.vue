<script setup lang="ts">
import { SIDEBAR_FOOTER_LINKS } from '@/components/layout/sidebar/sidebar.data'
</script>

<template>
  <section class="space-y-4 px-6 py-4 text-xs font-semibold">
    <div>
      <a
        v-for="link in SIDEBAR_FOOTER_LINKS.slice(0, 7)"
        :key="link.title"
        :href="`${link.url}`"
        class="mr-2">
        {{ link.title }}
      </a>
    </div>
    <div>
      <a
        v-for="link in SIDEBAR_FOOTER_LINKS.slice(7)"
        :key="link.title"
        :href="`${link.url}`"
        class="mr-2">
        {{ link.title }}
      </a>
    </div>
    <div class="font-normal text-gray-500">&copy; 2021 Google LLC</div>
  </section>
</template>

<style scoped></style>
