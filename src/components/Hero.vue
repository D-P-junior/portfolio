<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">

    <!-- Background animé -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
        style="top: -100px; right: -100px;"
      ></div>
      <div
        class="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#6366F1]' : 'bg-[#0EA5E9]'"
        style="bottom: -100px; left: -100px;"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 w-full">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">

        <!-- Contenu gauche -->
        <div class="flex-1 space-y-6">

          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-500"
            :class="store.currentMode === 'analyst'
              ? 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10'
              : 'border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/10'"
          >
            <span
              class="w-2 h-2 rounded-full animate-pulse"
              :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
            ></span>
            {{ store.currentMode === 'analyst' ? 'Disponible pour opportunités' : 'Open to Data Engineering roles' }}
          </div>



          <!-- Nom -->
          <h1 class="font-['Space_Grotesk'] font-bold text-5xl md:text-7xl tracking-tight">
            Dieu Privat Junior
          </h1>

          <!-- Titre typewriter -->
          <h2
            class="font-['Space_Grotesk'] font-semibold text-2xl md:text-3xl transition-all duration-500"
            :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'"
          >
            {{ displayedTitle }}<span class="animate-pulse">|</span>
          </h2>

          <!-- Tagline -->
          <p class="font-['Inter'] text-base md:text-lg opacity-70 max-w-xl leading-relaxed">
            {{ store.currentMode === 'analyst'
              ? "J'extrais, nettoie, analyse et visualise les données pour transformer des informations brutes en décisions éclairées."
              : "Je construis des pipelines de données robustes et des architectures temps réel pour alimenter les systèmes de décision." }}
          </p>

          <!-- Boutons CTA -->
          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              class="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg font-['Inter']"
              :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6] hover:shadow-blue-500/30' : 'bg-[#06B6D4] hover:shadow-cyan-500/30'"
            >
              Voir mes projets
            </a>
            <a
              href="#"
              class="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 border font-['Inter']"
              :class="store.currentMode === 'analyst'
                ? 'border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10'
                : 'border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10'"
            >
              Télécharger CV
            </a>
            <a
              href="#contact"
              class="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 font-['Inter']"
              :class="store.currentTheme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'"
            >
              Contact
            </a>
          </div>

        </div>

        <!-- Contenu droite -->
        <div class="flex-1 flex flex-col items-center gap-8">

          <!-- Photo -->
          <div class="relative">
            <div
              class="absolute inset-0 rounded-full blur-2xl opacity-30 transition-all duration-500"
              :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
            ></div>
            <img
              src="./dpj.jpeg"
              alt="junior"
              class="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 transition-all duration-500"
              :class="store.currentMode === 'analyst' ? 'border-[#3B82F6]/50' : 'border-[#06B6D4]/50'"
            />
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div
              v-for="stat in currentStats"
              :key="stat.label"
              class="rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105"
              :class="store.currentTheme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'"
            >
              <div
                class="font-['Space_Grotesk'] font-bold text-3xl transition-all duration-500"
                :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'"
              >
                {{ stat.value }}
              </div>
              <div class="font-['Inter'] text-xs opacity-60 mt-1">{{ stat.label }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs opacity-40 font-['Inter']">Scroll</span>
      <div
        class="w-px h-8 opacity-40"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
      ></div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const displayedTitle = ref('')

const titles = {
  analyst: 'Data Analyst Junior',
  engineer: 'Data Engineer Junior',
}

let typewriterInterval = null

function startTypewriter(text) {
  displayedTitle.value = ''
  let i = 0
  clearInterval(typewriterInterval)
  typewriterInterval = setInterval(() => {
    if (i < text.length) {
      displayedTitle.value += text[i]
      i++
    } else {
      clearInterval(typewriterInterval)
    }
  }, 80)
}

const currentStats = computed(() => {
  if (store.currentMode === 'analyst') {
    return [
      { value: '7+', label: 'Projets réalisés' },
      { value: '15+', label: 'Technologies' },
      { value: '3+', label: 'Dashboards' },
      { value: '2+', label: 'Bases de données' },
    ]
  } else {
    return [
      { value: '7+', label: 'Projets réalisés' },
      { value: '15+', label: 'Technologies' },
      { value: '2+', label: 'Pipelines ETL' },
      { value: '3+', label: 'Bases de données' },
    ]
  }
})

watch(() => store.currentMode, (newMode) => {
  startTypewriter(titles[newMode])
})

onMounted(() => {
  startTypewriter(titles[store.currentMode])
})
</script>
