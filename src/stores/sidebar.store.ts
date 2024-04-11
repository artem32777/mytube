import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'

export const useSidebarStore = defineStore('sidebar', () => {
  const isFullSidebarOpen = ref(false)
  const mediaQuery = ref('')

  function init() {
    setBreakpoints()
    window.addEventListener('resize', setBreakpoints)

    function setBreakpoints(): void {
      const width = useWindowSize().width.value
      if (width >= 1280) mediaQuery.value = 'desktop'
      if (width < 1280 && width >= 768) mediaQuery.value = 'tablet'
      if (width < 758) mediaQuery.value = 'mobile'
    }
  }

  const closeFullSidebar = () => (isFullSidebarOpen.value = false)
  const openFullSidebar = () => (isFullSidebarOpen.value = true)
  const toggleFullSidebar = () => (isFullSidebarOpen.value = !isFullSidebarOpen.value)

  return {
    mediaQuery,
    isFullSidebarOpen,
    init,
    closeFullSidebar,
    openFullSidebar,
    toggleFullSidebar,
  }
})
