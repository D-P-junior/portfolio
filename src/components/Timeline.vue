<template>
  <section id="timeline" class="py-24 relative overflow-hidden">

    <!-- Background déco -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-80 h-80 rounded-full blur-[120px] opacity-5 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
        style="bottom: 0; right: 0;"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-20">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          PARCOURS
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Mon chemin</h2>
        <p class="font-['Inter'] text-sm opacity-50 mt-3">Chaque étape a construit ce que je suis aujourd'hui</p>
      </div>

      <!-- Timeline -->
      <div class="relative">

        <!-- Ligne verticale centrale -->
        <div
          class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          :class="store.currentTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'"
        ></div>

        <!-- Ligne animée qui se remplit -->
        <div
          class="absolute left-8 md:left-1/2 top-0 w-px -translate-x-1/2 transition-all duration-1000 ease-out"
          :class="store.currentMode === 'analyst' ? 'bg-gradient-to-b from-[#3B82F6] to-[#6366F1]' : 'bg-gradient-to-b from-[#06B6D4] to-[#0EA5E9]'"
          :style="{ height: activeItem !== null ? ((activeItem + 1) / timelineItems.length * 100) + '%' : '8px' }"
        ></div>

        <div class="space-y-16">
          <div
            v-for="(item, index) in timelineItems"
            :key="item.year"
            class="relative flex items-start gap-8"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            @mouseenter="activeItem = index"
            @mouseleave="activeItem = null"
          >

            <!-- Point central -->
            <div
              class="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 transition-all duration-500"
              :class="activeItem === index ? 'scale-125' : 'scale-100'"
            >
              <div
                class="w-5 h-5 rounded-full border-4 transition-all duration-500"
                :class="[
                  activeItem === index
                    ? store.currentMode === 'analyst'
                      ? 'border-[#3B82F6] bg-[#3B82F6] shadow-lg shadow-blue-500/50'
                      : 'border-[#06B6D4] bg-[#06B6D4] shadow-lg shadow-cyan-500/50'
                    : store.currentTheme === 'dark'
                      ? 'border-white/30 bg-[#0B1120]'
                      : 'border-black/30 bg-white'
                ]"
              ></div>
            </div>

            <!-- Contenu gauche (index pair) -->
            <div
              class="ml-16 md:ml-0 flex-1 transition-all duration-500"
              :class="[
                index % 2 !== 0 ? 'md:text-right' : '',
                index % 2 !== 0 ? 'md:order-first' : '',
                activeItem === index ? 'opacity-100' : 'opacity-60'
              ]"
            >
              <div
                class="inline-block p-6 rounded-2xl border transition-all duration-500"
                :class="[
                  store.currentTheme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-black/5 border-black/10',
                  activeItem === index
                    ? store.currentMode === 'analyst'
                      ? 'border-[#3B82F6]/40 shadow-lg shadow-blue-500/10'
                      : 'border-[#06B6D4]/40 shadow-lg shadow-cyan-500/10'
                    : ''
                ]"
              >
                <!-- Année badge -->
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-['Inter'] mb-3 transition-all duration-500"
                  :class="activeItem === index
                    ? store.currentMode === 'analyst'
                      ? 'bg-[#3B82F6]/20 text-[#3B82F6]'
                      : 'bg-[#06B6D4]/20 text-[#06B6D4]'
                    : store.currentTheme === 'dark'
                      ? 'bg-white/10 text-white/50'
                      : 'bg-black/10 text-black/50'"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    :class="activeItem === index
                      ? store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'
                      : 'bg-current'"
                  ></span>
                  {{ item.year }}
                </div>

                <!-- Titre -->
                <h3 class="font-['Space_Grotesk'] font-bold text-lg mb-1 transition-all duration-300">
                  {{ item.title }}
                </h3>

                <!-- Sous-titre -->
                <p
                  class="font-['Inter'] text-sm font-medium mb-2 transition-all duration-500"
                  :class="activeItem === index
                    ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                    : 'opacity-50'"
                >
                  {{ item.subtitle }}
                </p>

                <!-- Description -->
                <p class="font-['Inter'] text-xs opacity-60 leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Tag -->
                <div class="mt-3">
                  <span
                    class="px-3 py-1 rounded-lg text-xs font-semibold font-['Inter'] transition-all duration-300"
                    :class="store.currentTheme === 'dark' ? 'bg-white/5 text-white/40' : 'bg-black/5 text-black/40'"
                  >
                    {{ item.tag }}
                  </span>
                </div>

              </div>
            </div>

            <!-- Espace vide côté opposé sur desktop -->
            <div class="hidden md:block flex-1"></div>

          </div>
        </div>

      </div>

      <!-- Indicateur bas -->
      <div class="text-center mt-16">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 rounded-full border font-['Inter'] text-sm font-semibold transition-all duration-500"
          :class="store.currentMode === 'analyst'
            ? 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10'
            : 'border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/10'"
        >
          <span class="w-2 h-2 rounded-full animate-pulse"
            :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'">
          </span>
          Aujourd'hui — Data Analyst & Engineer Junior
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const activeItem = ref(null)

const timelineItems = [
  {
    year: '2023',
    title: 'Obtention du Baccalauréat serie D',
    subtitle: 'Diplôme international',
    description: 'Obtention du baccalauréat, première étape clé qui ouvre la voie vers les études supérieures et le monde professionnel.',
    tag: 'Diplôme',
  },
  {
    year: 'en cours',
    title: 'Licence Sciences & Technologies Géospatiales',
    subtitle: 'UVCI — Abidjan',
    description: 'Formation universitaire en sciences et technologies géospatiales, combinant rigueur académique et compétences techniques en analyse spatiale.',
    tag: 'Université',
  },
  {
    year: '2025',
    title: 'Gérant de Cyber Café',
    subtitle: 'Entrepreneuriat — Abidjan',
    description: 'Gestion complète d\'un cyber café : administration, relation client, gestion financière et maintenance technique. Une expérience qui forge l\'autonomie et le sens des responsabilités.',
    tag: 'Expérience pro',
  },
  {
    year: '2026',
    title: 'Formation Data & IA',
    subtitle: 'WeCode / Epitech Abidjan',
    description: 'Programme intensif Data & Intelligence Artificielle : Python, SQL, Machine Learning, pipelines ETL, Deep Learning, NLP et projets réels en entreprise.',
    tag: 'Formation tech',
  },
]
</script>
