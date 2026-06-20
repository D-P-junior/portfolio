<template>
  <section id="certifications" class="py-24 relative overflow-hidden">

    <!-- Background déco -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-96 h-96 rounded-full blur-[120px] opacity-5 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
        style="top: 0; left: 0;"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-20">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          CERTIFICATIONS
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Mes certifications</h2>
        <p class="font-['Inter'] text-sm opacity-50 mt-3">Des compétences validées par des organismes reconnus</p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          class="relative group cursor-default transition-all duration-500"
          @mouseenter="activeCard = index"
          @mouseleave="activeCard = null"
        >
          <!-- Card -->
          <div
            class="relative p-8 rounded-3xl border overflow-hidden transition-all duration-500"
            :class="[
              store.currentTheme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-black/5 border-black/10',
              activeCard === index
                ? store.currentMode === 'analyst'
                  ? 'border-[#3B82F6]/50 shadow-2xl shadow-blue-500/10 -translate-y-2'
                  : 'border-[#06B6D4]/50 shadow-2xl shadow-cyan-500/10 -translate-y-2'
                : ''
            ]"
          >

            <!-- Fond animé au hover -->
            <div
              class="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
              :class="store.currentMode === 'analyst'
                ? 'bg-gradient-to-br from-[#3B82F6]/5 to-transparent'
                : 'bg-gradient-to-br from-[#06B6D4]/5 to-transparent'"
            ></div>

            <!-- Numéro décoratif -->
            <div
              class="absolute top-6 right-8 font-['Space_Grotesk'] font-bold text-7xl leading-none transition-all duration-500 select-none"
              :class="activeCard === index
                ? store.currentMode === 'analyst' ? 'text-[#3B82F6]/10' : 'text-[#06B6D4]/10'
                : store.currentTheme === 'dark' ? 'text-white/5' : 'text-black/5'"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- Contenu -->
            <div class="relative z-10 space-y-4">

              <!-- Badge organisme -->
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-['Inter'] transition-all duration-500"
                :class="activeCard === index
                  ? store.currentMode === 'analyst'
                    ? 'bg-[#3B82F6]/20 text-[#3B82F6]'
                    : 'bg-[#06B6D4]/20 text-[#06B6D4]'
                  : store.currentTheme === 'dark'
                    ? 'bg-white/10 text-white/50'
                    : 'bg-black/10 text-black/50'"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full animate-pulse"
                  :class="activeCard === index
                    ? store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'
                    : 'bg-current'"
                ></span>
                {{ cert.issuer }}
              </div>

              <!-- Titre -->
              <h3 class="font-['Space_Grotesk'] font-bold text-xl leading-tight transition-all duration-300">
                {{ cert.title }}
              </h3>

              <!-- Date -->
              <p
                class="font-['Inter'] text-sm transition-all duration-300"
                :class="activeCard === index
                  ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                  : 'opacity-40'"
              >
                {{ cert.date }}
              </p>

              <!-- Description -->
              <p class="font-['Inter'] text-xs opacity-60 leading-relaxed">
                {{ cert.description }}
              </p>

              <!-- Séparateur animé -->
              <div
                class="h-px transition-all duration-700 ease-out"
                :class="[
                  activeCard === index
                    ? store.currentMode === 'analyst'
                      ? 'bg-gradient-to-r from-[#3B82F6] to-transparent w-full'
                      : 'bg-gradient-to-r from-[#06B6D4] to-transparent w-full'
                    : store.currentTheme === 'dark'
                      ? 'bg-white/10 w-1/3'
                      : 'bg-black/10 w-1/3'
                ]"
              ></div>

              <!-- Tags compétences -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in cert.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-lg text-xs font-['Inter'] transition-all duration-300"
                  :class="store.currentTheme === 'dark'
                    ? 'bg-white/5 text-white/50'
                    : 'bg-black/5 text-black/50'"
                >
                  {{ tag }}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Message bas -->
      <div class="text-center mt-16">
        <p class="font-['Inter'] text-sm opacity-40">
          D'autres certifications en cours d'obtention...
        </p>
        <div
          class="mt-3 inline-block h-px w-24 transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]/30' : 'bg-[#06B6D4]/30'"
        ></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const activeCard = ref(null)

const certifications = [
  {
    title: 'Google Analytics Certificate',
    issuer: 'Google',
    date: '2025',
    description: 'Certification officielle Google couvrant l\'analyse des données web, les métriques clés, les rapports et la prise de décision basée sur les données.',
    tags: ['Analytics', 'Data', 'Reporting', 'KPI'],
  },
  {
    title: 'Certificat de participation WeCode',
    issuer: 'Epitech Abidjan',
    date: '2026',
    description: 'Attestation de formation intensive en Data & Intelligence Artificielle au sein du programme WeCode by Epitech Abidjan.',
    tags: ['Data & IA', 'Python', 'ML', 'ETL'],
  },
]
</script>
