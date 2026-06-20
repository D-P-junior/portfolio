<template>
  <div class="min-h-screen transition-all duration-500 overflow-x-hidden"
  :class="store.currentTheme === 'dark' ? 'bg-[#0B1120] text-[#F8FAFC]' : 'bg-[#FFFFFF] text-[#111827]'">
    <div class="min-h-screen transition-all duration-500"
      :class="store.currentTheme === 'dark' ? 'bg-[#0B1120] text-[#F8FAFC]' : 'bg-[#FFFFFF] text-[#111827]'">

      <NavBar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Methodology />
        <Timeline />
        <Certifications />
        <Contact />
      </main>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from './stores/index.js'

import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Methodology from './components/Methodology.vue'
import Timeline from './components/Timeline.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'

const store = usePortfolioStore()

onMounted(() => {
  store.initTheme()
})
</script>
