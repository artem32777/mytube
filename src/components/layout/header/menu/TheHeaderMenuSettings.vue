<script setup lang="ts">
import HeaderMenuSettingsItem from '@/components/layout/header/menu/HeaderMenuSettingItem.vue'
import { MENU_SETTINGS_ITEMS } from '@/components/layout/header/menu/menuSettings.data'
import UiDropdown from '@/components/ui/dropdown/UiDropdown.vue'
import UiTooltip from "@/components/ui/UiTooltip.vue";

const mainSection = MENU_SETTINGS_ITEMS.filter((el) => el.title !== 'Restricted Mode: Off')
const secondarySection = MENU_SETTINGS_ITEMS.filter((el) => el.title === 'Restricted Mode: Off')
</script>

<template>
  <UiTooltip text="Настройки">
    <UiDropdown icon="settings">
      <section class="border-b py-2">
        <ul>
          <HeaderMenuSettingsItem
            v-for="item in mainSection"
            :key="item.title"
            :item="item" />
        </ul>
      </section>
      <section class="py-2">
        <ul>
          <HeaderMenuSettingsItem
            v-for="item in secondarySection"
            :key="item.title"
            :item="item" />
        </ul>
      </section>
    </UiDropdown>
  </UiTooltip>
</template>

<style scoped></style>
