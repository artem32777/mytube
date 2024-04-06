<script setup lang="ts">
import type { IVideo } from '@/types/types'
import UiIcon from '@/components/ui/UiIcon.vue'
import { computed } from "vue";
import VideoItemControlsSettings from "@/components/VideoItemControlsSettings.vue";
import UiTooltip from "@/components/ui/UiTooltip.vue";
import { formatDateDifference, formatViews } from "@/utils/utils";
import { truncateTitle } from "@/utils/lockScroll";

const props = defineProps<{
  video: IVideo
}>()

</script>

<template>
  <div>
    <img
      :src="video.snippet.thumbnails.default.url"
      class="mr-3 h-9 w-9 rounded-full"
      />
    <div class="text-sm">
      <span class="font-semibold text-base text-gray-800">{{ truncateTitle(video.snippet.title) }}</span>
      <div class="mt-1 flex items-center">
        <UiTooltip :text="video.snippet.channelTitle" position="top">
          <span>{{ video.snippet.channelTitle }}</span>
        </UiTooltip>
<!--        <UiTooltip v-if="video.contentDetails.licensedContent" text="Подтверждено" position="top">-->
<!--          <UiIcon name="check"  class="w-4 ml-1 "/>-->
<!--        </UiTooltip>-->
      </div>
      <div>
<!--        <span class="block">{{formatViews(video.statistics.viewCount) }}</span>-->
        <span>{{ formatDateDifference(video.snippet.publishedAt) }} </span>
      </div>
    </div>
    <VideoItemControlsSettings/>

  </div>
</template>

<style scoped></style>