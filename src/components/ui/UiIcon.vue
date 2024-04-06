<script setup lang="ts">
import { ICONS} from "@/components/ui/icons.data";
import type { ICONS_TITLES } from "@/components/ui/icons.data";

defineProps<{
  name: ICONS_TITLES
}>()

</script>

<template>
  <svg
    :class='$attrs.class || "w-6 h-6"'
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="ICONS[name]"></svg>
</template>

<style scoped></style>
