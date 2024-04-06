<script setup lang="ts">
import type { IVideo } from '@/types/types'
import VideoItemImage from '@/components/VideoItemImage.vue'
import VideoItemControls from '@/components/VideoItemControls.vue'

const props = defineProps<{
  video: IVideo
}>()
</script>

<template>
  <a
    class="group mb-5"
    href="#">
    <VideoItemImage
      :thumbnails="video.snippet.thumbnails.medium" />
    <VideoItemControls
      :video="video"
      class="mt-3 flex items-start" />
  </a>
</template>

<style scoped></style>
