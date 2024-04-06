<script setup lang="ts">
import HeaderMenuAppsItem from '@/components/layout/header/menu/HeaderMenuAppsItem.vue'
import { APPS_MENU_ITEMS } from '@/components/layout/header/menu/menuApps.data'
import UiDropdown from '@/components/ui/dropdown/UiDropdown.vue'
import UiTooltip from "@/components/ui/UiTooltip.vue";
</script>

<template>
  <UiTooltip text="Приложения">
    <UiDropdown icon="apps">
      <section class="border-b py-2">
        <ul>
          <HeaderMenuAppsItem
            v-for="item in APPS_MENU_ITEMS.main"
            :item="item"
            :key="item.title" />
        </ul>
      </section>
      <section class="border-b py-2">
        <ul>
          <HeaderMenuAppsItem
            v-for="item in APPS_MENU_ITEMS.secondary"
            :item="item"
            :key="item.title" />
        </ul>
      </section>
      <section class="py-2">
        <ul>
          <HeaderMenuAppsItem
            v-for="item in APPS_MENU_ITEMS.additional"
            :item="item"
            :key="item.title" />
        </ul>
      </section>
    </UiDropdown>
  </UiTooltip>
</template>

<style scoped></style>
