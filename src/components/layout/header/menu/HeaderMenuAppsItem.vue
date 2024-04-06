<script setup lang="ts">
import UiIcon from "@/components/ui/UiIcon.vue";
import type { IMenuItem } from "@/types/types";

defineProps<{
  item: IMenuItem
}>()
</script>

<template>
  <li>
    <a
      :href="`${item.url}`"
      class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <UiIcon
        name="youtube"
        class="mr-3 text-red-500 w-6" />
      <span>{{item.title}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>