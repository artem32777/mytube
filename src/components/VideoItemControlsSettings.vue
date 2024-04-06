<script setup lang="ts">
import UiDropdown from '@/components/ui/dropdown/UiDropdown.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import { ref } from 'vue'

const isOpenDropdown = ref<boolean>(false)
</script>

<template>
  <div class="-mt-1 ml-auto">
    <div
      :class="{ 'opacity-100': isOpenDropdown }"
      class="p-1 text-gray-500 opacity-0 hover:text-gray-700 focus:outline-none group-hover:opacity-100">
      <UiDropdown
        @is-dropdown-open="isOpenDropdown = $event"
        icon="settings">
        <section class="border-b py-2">
          <ul>
            <li class="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100">
              <span class="text-base">Add to queue</span>
              <UiIcon name="plus" />
            </li>
          </ul>
        </section>
      </UiDropdown>
    </div>

    <aside></aside>
  </div>
</template>

<style scoped></style>
