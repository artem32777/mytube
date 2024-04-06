<script setup lang="ts">
import UiIcon from '@/components/ui/UiIcon.vue'
import type { IMenuItem } from '@/types/types'
import UiSubmenu from '@/components/ui/UiSubmenu.vue'
import { ref } from "vue";
const props = defineProps<{
  item: IMenuItem
}>()


const isSubmenuOpen = ref<boolean>(false)

function toggleSubmenu(): void {
  if(props.item.subMenu){
    isSubmenuOpen.value = !isSubmenuOpen.value
  }
}


</script>

<template>
  <li>
    <a
      @click="toggleSubmenu()"
      :href="`${item.url}`"
      class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <UiIcon
        v-if="item.icon"
        :name="item.icon"
        class="mr-3 w-6 text-gray-400" />
      <span>{{ item.title }}</span>
      <UiSubmenu
        v-if="item.subMenu"
        :is-open="isSubmenuOpen"
        title="Settings">
        123
      </UiSubmenu>
    </a>
  </li>
</template>

<style scoped></style>
