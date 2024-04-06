<script setup lang="ts">

</script>

<template>
  <Transition
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-none"
    enter-active-class="transition-all duration-333 ease-in-out"
    leave-active-class="transition-all duration-50 ease-in-out"
    leave-to-class="opacity-0 translate-y-2"
    leave-from-class="opacity-100 translate-none"
  >
    <slot/>
  </Transition>
</template>

<style scoped>

</style>