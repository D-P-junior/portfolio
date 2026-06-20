<template>
  <nav
    ref="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      scrolled ? 'py-3 shadow-lg backdrop-blur-md' : 'py-5',
      store.currentTheme === 'dark'
        ? scrolled ? 'bg-[#0B1120]/90 border-b border-white/10' : 'bg-transparent'
        : scrolled ? 'bg-white/90 border-b border-black/10' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <div class="font-['Space_Grotesk'] font-bold text-2xl tracking-tight">
        <span :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">D.P</span> Junior
      </div>

      <!-- Navigation liens - Desktop -->
      <ul class="hidden md:flex items-center gap-8 font-['Inter'] text-sm font-medium">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="relative transition-colors duration-200 hover:opacity-100 opacity-70"
            :class="store.currentTheme === 'dark' ? 'text-[#F8FAFC]' : 'text-[#111827]'"
            @click="activeLink = link.id"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 rounded-full"
              :class="[
                activeLink === link.id ? 'w-full' : 'w-0',
                store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'
              ]"
            ></span>
          </a>
        </li>
      </ul>

      <!-- Contrôles droite -->
      <div class="flex items-center gap-3">

        <!-- Switch Mode DA / DE -->
        <div
          class="hidden md:flex items-center rounded-full p-1 gap-1"
          :class="store.currentTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'"
        >
          <button
            @click="store.setMode('analyst')"
            class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 font-['Inter']"
            :class="store.currentMode === 'analyst'
              ? 'bg-[#3B82F6] text-white shadow-md shadow-blue-500/30'
              : store.currentTheme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'"
          >
            Data Analyst
          </button>
          <button
            @click="store.setMode('engineer')"
            class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 font-['Inter']"
            :class="store.currentMode === 'engineer'
              ? 'bg-[#06B6D4] text-white shadow-md shadow-cyan-500/30'
              : store.currentTheme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'"
          >
            Data Engineer
          </button>
        </div>

        <!-- Toggle Dark/Light -->
        <button
          @click="store.toggleTheme()"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          :class="store.currentTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'"
        >
          <span class="text-lg">{{ store.currentTheme === 'dark' ? '☀️' : '🌙' }}</span>
        </button>

        <!-- Hamburger Mobile -->
        <button
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="block w-6 h-0.5 transition-all duration-300"
            :class="[
              menuOpen ? 'rotate-45 translate-y-2' : '',
              store.currentTheme === 'dark' ? 'bg-white' : 'bg-black'
            ]"
          ></span>
          <span
            class="block w-6 h-0.5 transition-all duration-300"
            :class="[
              menuOpen ? 'opacity-0' : '',
              store.currentTheme === 'dark' ? 'bg-white' : 'bg-black'
            ]"
          ></span>
          <span
            class="block w-6 h-0.5 transition-all duration-300"
            :class="[
              menuOpen ? '-rotate-45 -translate-y-2' : '',
              store.currentTheme === 'dark' ? 'bg-white' : 'bg-black'
            ]"
          ></span>
        </button>

      </div>
    </div>

    <!-- Menu Mobile -->
    <div
      class="md:hidden transition-all duration-300 overflow-hidden"
      :class="menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div
        class="px-6 py-4 flex flex-col gap-4"
        :class="store.currentTheme === 'dark' ? 'bg-[#0B1120]/95' : 'bg-white/95'"
      >
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          class="text-sm font-medium py-2 border-b transition-colors duration-200"
          :class="store.currentTheme === 'dark' ? 'border-white/10 text-white/70' : 'border-black/10 text-black/70'"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>

        <!-- Switch Mode Mobile -->
        <div class="flex gap-2 pt-2">
          <button
            @click="store.setMode('analyst')"
            class="flex-1 py-2 rounded-full text-xs font-semibold transition-all duration-300"
            :class="store.currentMode === 'analyst'
              ? 'bg-[#3B82F6] text-white'
              : store.currentTheme === 'dark' ? 'bg-white/10 text-white/60' : 'bg-black/10 text-black/60'"
          >
            Data Analyst
          </button>
          <button
            @click="store.setMode('engineer')"
            class="flex-1 py-2 rounded-full text-xs font-semibold transition-all duration-300"
            :class="store.currentMode === 'engineer'
              ? 'bg-[#06B6D4] text-white'
              : store.currentTheme === 'dark' ? 'bg-white/10 text-white/60' : 'bg-black/10 text-black/60'"
          >
            Data Engineer
          </button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const scrolled = ref(false)
const menuOpen = ref(false)
const activeLink = ref('hero')

const navLinks = [
  { id: 'hero', label: 'Accueil', href: '#hero' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'timeline', label: 'Parcours', href: '#timeline' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
