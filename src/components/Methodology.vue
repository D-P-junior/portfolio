<template>
  <section id="methodology" class="py-24 relative overflow-hidden">

    <!-- Background déco -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-96 h-96 rounded-full blur-[100px] opacity-5 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-20">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          MÉTHODOLOGIE
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Ma façon de travailler</h2>
      </div>

      <!-- Steps -->
      <div class="relative flex flex-col md:flex-row items-center justify-center gap-0">

        <div
          v-for="(step, index) in currentSteps"
          :key="step.title"
          class="flex flex-col md:flex-row items-center"
        >
          <!-- Card étape -->
          <div
            class="relative group flex flex-col items-center text-center w-44 cursor-default"
            @mouseenter="activeStep = index"
            @mouseleave="activeStep = null"
          >
            <!-- Numéro -->
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center font-['Space_Grotesk'] font-bold text-xl mb-4 transition-all duration-500 border-2"
              :class="[
                activeStep === index
                  ? store.currentMode === 'analyst'
                    ? 'bg-[#3B82F6] border-[#3B82F6] text-white scale-110 shadow-lg shadow-blue-500/30'
                    : 'bg-[#06B6D4] border-[#06B6D4] text-white scale-110 shadow-lg shadow-cyan-500/30'
                  : store.currentTheme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white/40'
                    : 'bg-black/5 border-black/10 text-black/40'
              ]"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- Titre -->
            <h3
              class="font-['Space_Grotesk'] font-bold text-base mb-2 transition-all duration-300"
              :class="activeStep === index
                ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                : ''"
            >
              {{ step.title }}
            </h3>

            <!-- Description -->
            <p class="font-['Inter'] text-xs leading-relaxed opacity-50 transition-all duration-300 px-2"
              :class="activeStep === index ? 'opacity-80' : ''">
              {{ step.desc }}
            </p>

            <!-- Tag -->
            <div
              class="mt-3 px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] transition-all duration-300"
              :class="activeStep === index
                ? store.currentMode === 'analyst'
                  ? 'bg-[#3B82F6]/20 text-[#3B82F6]'
                  : 'bg-[#06B6D4]/20 text-[#06B6D4]'
                : store.currentTheme === 'dark'
                  ? 'bg-white/5 text-white/30'
                  : 'bg-black/5 text-black/30'"
            >
              {{ step.tag }}
            </div>

          </div>

          <!-- Connecteur animé -->
          <div
            v-if="index < currentSteps.length - 1"
            class="flex items-center justify-center w-12 md:w-16 h-12 md:h-auto my-2 md:my-0 rotate-90 md:rotate-0"
          >
            <div class="relative w-full flex items-center">
              <div
                class="h-px w-full transition-all duration-500"
                :class="store.currentTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'"
              ></div>
              <div
                class="absolute left-0 h-px transition-all duration-700 ease-out"
                :class="[
                  store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]',
                  activeStep !== null && activeStep >= index ? 'w-full' : 'w-0'
                ]"
              ></div>
              <div
                class="absolute right-0 text-xs transition-all duration-300"
                :class="store.currentTheme === 'dark' ? 'text-white/20' : 'text-black/20'"
              >›</div>
            </div>
          </div>

        </div>
      </div>

      <!-- Barre de progression globale -->
      <div class="mt-16 max-w-2xl mx-auto">
        <div
          class="h-1 rounded-full overflow-hidden"
          :class="store.currentTheme === 'dark' ? 'bg-white/5' : 'bg-black/5'"
        >
          <div
            class="h-full rounded-full transition-all duration-700 ease-out"
            :class="store.currentMode === 'analyst' ? 'bg-gradient-to-r from-[#3B82F6] to-[#6366F1]' : 'bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]'"
            :style="{ width: activeStep !== null ? ((activeStep + 1) / currentSteps.length * 100) + '%' : '0%' }"
          ></div>
        </div>
        <div class="flex justify-between mt-2">
          <span class="text-xs opacity-30 font-['Inter']">Début</span>
          <span class="text-xs font-['Inter'] transition-all duration-300"
            :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
            {{ activeStep !== null ? currentSteps[activeStep].title : 'Survole une étape' }}
          </span>
          <span class="text-xs opacity-30 font-['Inter']">Fin</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const activeStep = ref(null)

const currentSteps = computed(() => {
  if (store.currentMode === 'analyst') {
    return [
      { title: 'Collecte', desc: 'Scraping, APIs, bases de données, fichiers CSV', tag: 'Python · SQL' },
      { title: 'Nettoyage', desc: 'Traitement des valeurs manquantes, normalisation', tag: 'Pandas · NumPy' },
      { title: 'Analyse', desc: 'Exploration statistique, patterns, corrélations', tag: 'EDA · Stats' },
      { title: 'Visualisation', desc: 'Dashboards interactifs, graphiques clairs', tag: 'Power BI · Streamlit' },
      { title: 'Décision', desc: 'Insights actionnables, recommandations business', tag: 'Rapport · KPI' },
    ]
  } else {
    return [
      { title: 'Sources', desc: 'APIs, scraping, flux RSS, bases de données', tag: 'Python · APIs' },
      { title: 'ETL', desc: 'Extraction, transformation, chargement des données', tag: 'Pandas · SQL' },
      { title: 'Stockage', desc: 'PostgreSQL, Supabase, Azure Data Lake', tag: 'PostgreSQL · Azure' },
      { title: 'Streaming', desc: 'Traitement temps réel avec Apache Kafka', tag: 'Kafka · WSL' },
      { title: 'Consommation', desc: 'Dashboards, APIs, rapports automatisés', tag: 'Power BI · Streamlit' },
    ]
  }
})
</script>
