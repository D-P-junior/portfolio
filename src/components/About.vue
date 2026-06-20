<template>
  <section id="about" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">

      <div class="flex flex-col md:flex-row gap-16 items-center">

        <!-- Gauche : Card style photo -->
        <div class="flex-1 flex flex-col items-center">
          <div
            class="w-full max-w-sm rounded-3xl p-8 flex flex-col items-center gap-6 border transition-all duration-500"
            :class="store.currentTheme === 'dark'
              ? 'bg-gradient-to-b from-[#1a2744] to-[#0B1120] border-white/10'
              : 'bg-gradient-to-b from-blue-50 to-white border-black/10'"
          >
            <!-- Photo -->
            <div class="relative">
              <div
                class="absolute inset-0 rounded-full blur-xl opacity-40 transition-all duration-500"
                :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
              ></div>
              <img
                src="./dpj.jpeg"
                alt="D.P Junior"
                class="relative w-32 h-32 rounded-full object-cover border-4 transition-all duration-500"
                :class="store.currentMode === 'analyst' ? 'border-[#3B82F6]/60' : 'border-[#06B6D4]/60'"
              />
            </div>

            <!-- Nom + titre -->
            <div class="text-center">
              <h3 class="font-['Space_Grotesk'] font-bold text-xl">Dieu Privat Junior</h3>
              <p class="font-['Inter'] text-sm opacity-60 mt-1">
                {{ store.currentMode === 'analyst' ? 'Data Analyst Junior' : 'Data Engineer Junior' }}
              </p>
              <p class="font-['Inter'] text-xs opacity-40 mt-0.5">WeCode / Epitech · Abidjan, CI</p>
            </div>

            <!-- Langues -->
            <div class="w-full space-y-3">
              <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">LANGUES</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span>🇫🇷</span>
                    <span class="text-sm font-['Inter']">Français</span>
                  </div>
                  <span
                    class="text-xs font-semibold px-2 py-0.5 rounded-full text-white font-['Inter']"
                    :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
                  >Excellent</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span>🇬🇧</span>
                    <span class="text-sm font-['Inter']">Anglais</span>
                  </div>
                  <span
                    class="text-xs font-semibold px-2 py-0.5 rounded-full font-['Inter']"
                    :class="store.currentTheme === 'dark' ? 'bg-white/10 text-white/70' : 'bg-black/10 text-black/70'"
                  >Intermédiaire</span>
                </div>
              </div>
            </div>

            <!-- Atouts -->
            <div class="w-full space-y-3">
              <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">ATOUTS</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="atout in atouts" :key="atout"
                  class="px-3 py-1 rounded-full text-xs font-['Inter'] border transition-all duration-300"
                  :class="store.currentTheme === 'dark'
                    ? 'border-white/20 text-white/70 bg-white/5'
                    : 'border-black/20 text-black/70 bg-black/5'"
                >
                  {{ atout }}
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Droite : Texte -->
        <div class="flex-1 space-y-6">

          <div>
            <p
              class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
              :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'"
            >
              À PROPOS
            </p>
            <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Qui suis-je ?</h2>
          </div>

          <p class="font-['Inter'] text-base leading-relaxed opacity-75 transition-all duration-500">
            {{ store.currentMode === 'analyst'
              ? "Je suis Nnova, Data Analyst Junior formé au programme Data & IA de WeCode / Epitech Abidjan. J'utilise Python, SQL, Excel et Power BI pour collecter, nettoyer, analyser et visualiser les données afin de produire des insights exploitables et des décisions business éclairées."
              : "Je suis Nnova, Data Engineer Junior formé au programme Data & IA de WeCode / Epitech Abidjan. Je conçois et déploie des pipelines de données robustes, des architectures ETL temps réel et des infrastructures cloud pour alimenter les systèmes de décision." }}
          </p>

          <p class="font-['Inter'] text-base leading-relaxed opacity-75">
            Actuellement en Licence 2 Sciences et Technologies Géospatiales à l'UVCI, je combine ma formation académique avec une pratique intensive de projets data réels, du scraping à la visualisation en passant par le streaming temps réel.
          </p>

          <!-- Ce que je fais -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div
              v-for="item in whatIDo" :key="item.title"
              class="p-4 rounded-xl border transition-all duration-300 hover:scale-105"
              :class="store.currentTheme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-black/5 border-black/10'"
            >
              <span class="text-2xl">{{ item.icon }}</span>
              <h3 class="font-['Space_Grotesk'] font-semibold text-sm mt-2">{{ item.title }}</h3>
              <p class="font-['Inter'] text-xs opacity-60 mt-1">{{ item.desc }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()

const atouts = [
  'Curiosité',
  'Rigueur',
  'Autonomie',
  'Travail en équipe',
  'Résolution de problèmes',
  'Apprentissage rapide',
]


</script>
