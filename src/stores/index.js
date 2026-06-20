import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  // Mode : analyst ou engineer
  const currentMode = ref('analyst')

  // Thème : dark ou light
  const currentTheme = ref('dark')

  // Changer de mode
  function setMode(mode) {
    currentMode.value = mode
  }

  // Changer de thème
  function toggleTheme() {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    // Applique la classe dark sur le html
    if (currentTheme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Init le thème dark au démarrage
  function initTheme() {
    document.documentElement.classList.add('dark')
  }

  return {
    currentMode,
    currentTheme,
    setMode,
    toggleTheme,
    initTheme,
  }
})
