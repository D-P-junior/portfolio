<template>
  <section id="contact" class="py-24 relative overflow-hidden">

    <!-- Background déco -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-96 h-96 rounded-full blur-[120px] opacity-5 transition-all duration-1000"
        :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'"
        style="bottom: 0; right: 0;"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-16">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          CONTACT
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl leading-tight">
          Travaillons<br/>ensemble
        </h2>
        <p class="font-['Inter'] text-base opacity-50 mt-4 max-w-md mx-auto leading-relaxed">
          Ouvert aux opportunités Data, projets freelance et collaborations en Côte d'Ivoire et à l'international.
        </p>
      </div>

      <!-- Card principale -->
      <div
        class="relative p-10 rounded-3xl border overflow-hidden transition-all duration-500"
        :class="store.currentTheme === 'dark'
          ? 'bg-white/5 border-white/10'
          : 'bg-black/5 border-black/10'"
      >

        <!-- Fond animé -->
        <div
          class="absolute inset-0 opacity-30 transition-all duration-1000"
          :class="store.currentMode === 'analyst'
            ? 'bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-transparent'
            : 'bg-gradient-to-br from-[#06B6D4]/10 via-transparent to-transparent'"
        ></div>

        <div class="relative z-10 text-center space-y-8">

          <!-- Disponibilité -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-['Inter'] border transition-all duration-500"
            :class="store.currentMode === 'analyst'
              ? 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10'
              : 'border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/10'"
          >
            <span class="w-2 h-2 rounded-full animate-pulse"
              :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'">
            </span>
            Disponible — Ouvert aux opportunités Data
          </div>

          <!-- Texte -->
          <div class="space-y-2">
            <p class="font-['Space_Grotesk'] font-bold text-xl">Prêt à démarrer un projet ?</p>
            <p class="font-['Inter'] text-sm opacity-50 max-w-sm mx-auto leading-relaxed">
              Que ce soit pour de l'analyse de données, du machine learning ou de l'ingénierie de données, n'hésitez pas à me contacter.
            </p>
          </div>

          <!-- Boutons contact -->
          <div class="flex flex-wrap items-center justify-center gap-4">

            <!-- Email -->
            <a
              href="mailto:juniorprivatdieu@gmail.com"
              class="group flex items-center gap-3 px-6 py-3 rounded-full border font-['Inter'] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              :class="[
                store.currentTheme === 'dark'
                  ? 'border-white/20 text-white hover:border-white/40'
                  : 'border-black/20 text-black hover:border-black/40',
                activeContact === 'email'
                  ? store.currentMode === 'analyst'
                    ? 'border-[#3B82F6] shadow-lg shadow-blue-500/20'
                    : 'border-[#06B6D4] shadow-lg shadow-cyan-500/20'
                  : ''
              ]"
              @mouseenter="activeContact = 'email'"
              @mouseleave="activeContact = null"
            >
              <!-- Mail SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-all duration-300"
                :class="activeContact === 'email'
                  ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                  : ''"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/privat-junior-dieu-47598a402"
              target="_blank"
              class="group flex items-center gap-3 px-6 py-3 rounded-full border font-['Inter'] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              :class="[
                store.currentTheme === 'dark'
                  ? 'border-white/20 text-white hover:border-white/40'
                  : 'border-black/20 text-black hover:border-black/40',
                activeContact === 'linkedin'
                  ? store.currentMode === 'analyst'
                    ? 'border-[#3B82F6] shadow-lg shadow-blue-500/20'
                    : 'border-[#06B6D4] shadow-lg shadow-cyan-500/20'
                  : ''
              ]"
              @mouseenter="activeContact = 'linkedin'"
              @mouseleave="activeContact = null"
            >
              <!-- LinkedIn SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-all duration-300"
                :class="activeContact === 'linkedin'
                  ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                  : ''"
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/D-P-junior"
              target="_blank"
              class="group flex items-center gap-3 px-6 py-3 rounded-full border font-['Inter'] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              :class="[
                store.currentTheme === 'dark'
                  ? 'border-white/20 text-white hover:border-white/40'
                  : 'border-black/20 text-black hover:border-black/40',
                activeContact === 'github'
                  ? store.currentMode === 'analyst'
                    ? 'border-[#3B82F6] shadow-lg shadow-blue-500/20'
                    : 'border-[#06B6D4] shadow-lg shadow-cyan-500/20'
                  : ''
              ]"
              @mouseenter="activeContact = 'github'"
              @mouseleave="activeContact = null"
            >
              <!-- GitHub SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-all duration-300"
                :class="activeContact === 'github'
                  ? store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'
                  : ''"
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="max-w-7xl mx-auto px-6 mt-24">
      <div
        class="border-t pt-12 transition-all duration-500"
        :class="store.currentTheme === 'dark' ? 'border-white/10' : 'border-black/10'"
      >
        <div class="flex flex-col md:flex-row items-start justify-between gap-8">

          <!-- Logo + description -->
          <div class="space-y-4 max-w-xs">
            <div class="font-['Space_Grotesk'] font-bold text-2xl">
              <span :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">N</span>nova
            </div>
            <p class="font-['Inter'] text-xs opacity-40 leading-relaxed">
              Data Analyst Junior · Data Engineer Junior<br/>
              Basé à Abidjan, Côte d'Ivoire
            </p>
            <!-- Icônes sociales footer -->
            <div class="flex items-center gap-3">
              <a href="https://github.com/D-P-junior" target="_blank"
                class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                :class="store.currentTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/privat-junior-dieu-47598a402" target="_blank"
                class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                :class="store.currentTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:juniorprivatdieu@gmail.com"
                class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                :class="store.currentTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="space-y-4">
            <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">NAVIGATION</p>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.label">
                <a :href="link.href"
                  class="font-['Inter'] text-sm opacity-50 hover:opacity-100 transition-all duration-300"
                  :class="store.currentTheme === 'dark' ? 'text-white' : 'text-black'">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Disponibilité -->
          <div class="space-y-4">
            <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">DISPONIBILITÉ</p>
            <div
              class="p-4 rounded-2xl border transition-all duration-500"
              :class="store.currentTheme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'"
            >
              <div class="flex items-center gap-2 mb-1">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span class="font-['Inter'] text-sm font-semibold text-green-400">Disponible</span>
              </div>
              <p class="font-['Inter'] text-xs opacity-50">
                Ouvert aux opportunités<br/>Data & Engineering
              </p>
            </div>
          </div>

        </div>

        <!-- Copyright -->
        <div
          class="mt-12 pt-6 border-t text-center transition-all duration-500"
          :class="store.currentTheme === 'dark' ? 'border-white/5' : 'border-black/5'"
        >
          <p class="font-['Inter'] text-xs opacity-30">
            © 2026 <span class="font-semibold">Nnova</span> — Tous droits réservés · Abidjan, Côte d'Ivoire
          </p>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()
const activeContact = ref(null)

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]
</script>
