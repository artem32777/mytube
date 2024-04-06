<script setup lang="ts">
import UiIcon from '@/components/ui/UiIcon.vue'
import type { IMenuItem } from '@/types/types'
import type { ISideBarItemTitles } from '@/components/layout/sidebar/sidebar.data'
import { computed } from 'vue'

const props = defineProps<{
  item: IMenuItem
  activeItem: ISideBarItemTitles
  smallType?: boolean
}>()

const iconStyles = computed(() => {
  const isActive = props.activeItem === props.item.title
  if (props.smallType) {
    const smallType = ['mb-1.5', 'h-6', 'w-6']
    return isActive ? [...smallType, 'text-red-500'] : [...smallType]
  } else {
    const defaultType = ['mr-6', 'w-6']
    return isActive ? [...defaultType, 'text-red-500'] : [...defaultType]
  }
})

const linkStyles = computed<string[]>(() => {
  const common = ['flex', 'items-center', 'text-sm', 'hover:bg-gray-100']
  const active = ['bg-gray-200', 'text-gray-900', 'hover:bg-gray-300']
  const defaultType = ['px-6', 'py-2']
  const smallType = ['flex-col', 'px-2', 'py-5']
  const isActive = props.activeItem === props.item.title
  if (props.smallType) {
    return isActive ? [...common, ...smallType, ...active] : [...common, ...smallType]
  } else {
    return isActive ? [...common, ...defaultType, ...active] : [...common, ...defaultType]
  }
})
</script>

<template>
  <li>
    <div>
      <a
        :href="`${item.url}`"
        :class="linkStyles">
        <UiIcon
          v-if="item.icon"
          :name="item.icon"
          :class="iconStyles" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </li>
</template>

<style scoped></style>
