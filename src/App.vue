<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/layout/header/TheHeader.vue'
import TheCategories from '@/components/layout/categories/TheCategories.vue'
import TheVideos from '@/components/TheVideos.vue'
import TheSidebar from '@/components/layout/sidebar/TheSidebar.vue'


</script>

<template>
  <TheHeader />

  <TheSidebar />

  <TheCategories />
  <TheVideos />
  <RouterView />
</template>

<style scoped></style>
