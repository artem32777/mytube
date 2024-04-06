<script setup lang="ts">
import VideoItem from '@/components/VideoItem.vue'
import { useSidebarStore } from '@/stores/sidebar.store'
import { computed, onMounted, ref, watch } from "vue";
import type { IVideo } from '@/types/types'
import { useVideoStore, VIDEO_QUERY } from "@/stores/video.store";

const sidebarStore = useSidebarStore()
const videoStore = useVideoStore()

const videoItems = ref<IVideo[]>()


onMounted(async () => {
  await videoStore.getDefaultData()
})

watch(videoStore, () => {
  if(videoStore.video.length){
    videoItems.value = videoStore.video
  }
})

const marginStyles = computed<string[]>(() => {
  const defaultStyles = ['px-5', 'pb-5', 'pt-32', 'transition-all']
  if (sidebarStore.mediaQuery === 'desktop') {
    return sidebarStore.isFullSidebarOpen
      ? [...defaultStyles, 'ml-64']
      : [...defaultStyles, 'ml-24']
  }
  if (sidebarStore.mediaQuery === 'tablet') {
    return [...defaultStyles, 'ml-24']
  }
  return defaultStyles
})
</script>

<template>
  <main :class="marginStyles">
    <div class="m-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      <VideoItem
        v-if="videoItems?.length"
        v-for="video in videoItems"
        :key="video.id"
        :video="video" />
    </div>
  </main>
</template>

<style scoped></style>
