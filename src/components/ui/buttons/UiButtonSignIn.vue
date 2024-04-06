<script setup lang="ts">
import UiIcon from "@/components/ui/UiIcon.vue";
</script>

<template>
  <button
    class="flex items-center whitespace-nowrap rounded-sm border border-blue-700 px-2 py-1 text-sm uppercase text-blue-700 focus:outline-none">
    <UiIcon name="signIn"
            class="sm:mr-2 h-7 w-7"
    />
    <span class="max-lg:hidden">Sign In</span>
  </button>
</template>

<style scoped></style>
