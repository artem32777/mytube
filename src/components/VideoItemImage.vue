<script setup lang="ts">
import VideoItemImageButton from "@/components/VideoItemImageButton.vue";
import type { IVideoThumbnail } from "@/types/types";

defineProps<{
  thumbnails: IVideoThumbnail
}>()
</script>

<template>
  <div class="relative">
    <img
      class="aspect-video w-full rounded-xl"
      :src="thumbnails.url"
      alt="Изображение видео"/>
    <div class="absolute top-0 right-0 flex flex-col gap-1">
      <VideoItemImageButton icon="clock" label="Смотреть позже"/>
      <VideoItemImageButton icon="lines" label="Смотреть позже"/>
    </div>
    <span
      class="absolute bottom-0 right-0 m-1 rounded-sm bg-black p-1 text-xs font-semibold text-white opacity-100 duration-500 group-hover:opacity-0"
      >00:00</span
    >
  </div>
</template>

<style scoped></style>
