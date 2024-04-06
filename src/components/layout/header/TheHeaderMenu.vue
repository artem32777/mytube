<script setup lang="ts">
import TheHeaderMenuApps from '@/components/layout/header/menu/TheHeaderMenuApps.vue'
import TheHeaderMenuSettings from '@/components/layout/header/menu/TheHeaderMenuSettings.vue'
import UiButtonSignIn from '@/components/ui/buttons/UiButtonSignIn.vue'

</script>

<template>
  <div class="flex items-center justify-end p-2 sm:space-x-3 sm:px-4 lg:w-1/4">
    <TheHeaderMenuApps />
    <TheHeaderMenuSettings />
    <UiButtonSignIn />
  </div>
</template>

<style scoped></style>
