<template>
  <section id="skills" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-16">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          COMPÉTENCES
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Mon expertise technique</h2>
      </div>

      <!-- Graphe radial -->
      <div class="relative flex items-center justify-center" style="height: 600px;">
        <svg class="absolute inset-0 w-full h-full pointer-events-none">
          <line
            v-for="(skill, index) in currentSkills"
            :key="'line-' + index"
            :x1="centerX"
            :y1="centerY"
            :x2="getX(index, currentSkills.length)"
            :y2="getY(index, currentSkills.length)"
            stroke-dasharray="6 4"
            stroke-width="1.5"
            class="transition-all duration-500"
            :stroke="store.currentMode === 'analyst' ? '#3B82F6' : '#06B6D4'"
            opacity="0.3"
          />
        </svg>

        <!-- Centre : Photo -->
        <div class="absolute z-10 flex flex-col items-center justify-center"
          :style="{ left: centerX + 'px', top: centerY + 'px', transform: 'translate(-50%, -50%)' }">
          <div
            class="w-28 h-28 rounded-full border-4 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500"
            :class="store.currentMode === 'analyst'
              ? 'border-[#3B82F6] shadow-blue-500/40'
              : 'border-[#06B6D4] shadow-cyan-500/40'"
          >
            <img
              src="./dpj.jpeg"
              alt="D.P Junior"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-center mt-2">
            <p class="font-['Space_Grotesk'] font-bold text-sm">D.P Junior</p>
            <p class="font-['Inter'] text-xs transition-all duration-500"
              :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
              {{ store.currentMode === 'analyst' ? 'Data Analyst' : 'Data Engineer' }}
            </p>
          </div>
        </div>

        <!-- Nœuds compétences -->
        <div
          v-for="(skill, index) in currentSkills"
          :key="skill.name"
          class="absolute z-20 transition-all duration-300 hover:scale-110 cursor-default"
          :style="{
            left: getX(index, currentSkills.length) + 'px',
            top: getY(index, currentSkills.length) + 'px',
            transform: 'translate(-50%, -50%)'
          }"
        >
          <div
            class="px-4 py-2 rounded-xl border text-xs font-semibold font-['Inter'] whitespace-nowrap transition-all duration-300 hover:shadow-lg"
            :class="[
              getCategoryStyle(skill.category),
              store.currentTheme === 'dark' ? 'bg-[#0B1120]' : 'bg-white'
            ]"
          >
            {{ skill.icon }} {{ skill.name }}
          </div>
        </div>

      </div>

      <!-- Légende -->
      <div class="flex flex-wrap justify-center gap-6 mt-8">
        <div v-for="cat in currentCategories" :key="cat.id" class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: cat.color }"></div>
          <span class="text-xs font-['Inter'] opacity-60">{{ cat.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()

const containerRef = ref(null)
const centerX = ref(400)
const centerY = ref(300)
const radius = ref(220)

function updateCenter() {
  const w = window.innerWidth
  if (w < 768) {
    centerX.value = w / 2 - 24
    radius.value = 140
  } else {
    const container = document.querySelector('#skills .relative')
    if (container) {
      centerX.value = container.offsetWidth / 2
    } else {
      centerX.value = (w > 1280 ? 1280 : w) / 2 - 48
    }
    radius.value = 220
  }
  centerY.value = 300
}

function getX(index, total) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  return centerX.value + radius.value * Math.cos(angle)
}

function getY(index, total) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  return centerY.value + radius.value * Math.sin(angle)
}

const analystCategories = [
  { id: 'analyse', label: 'Analyse', color: '#3B82F6' },
  { id: 'viz', label: 'Visualisation', color: '#8B5CF6' },
  { id: 'db', label: 'Base de données', color: '#10B981' },
  { id: 'ml', label: 'Machine Learning', color: '#F59E0B' },
]

const engineerCategories = [
  { id: 'etl', label: 'ETL / Streaming', color: '#06B6D4' },
  { id: 'cloud', label: 'Cloud', color: '#8B5CF6' },
  { id: 'ml', label: 'ML / DL', color: '#F59E0B' },
  { id: 'tools', label: 'Outils', color: '#10B981' },
]

const currentCategories = computed(() =>
  store.currentMode === 'analyst' ? analystCategories : engineerCategories
)

const categoryColors = {
  analyse: 'border-[#3B82F6] text-[#3B82F6]',
  viz: 'border-[#8B5CF6] text-[#8B5CF6]',
  db: 'border-[#10B981] text-[#10B981]',
  ml: 'border-[#F59E0B] text-[#F59E0B]',
  etl: 'border-[#06B6D4] text-[#06B6D4]',
  cloud: 'border-[#8B5CF6] text-[#8B5CF6]',
  tools: 'border-[#10B981] text-[#10B981]',
}

function getCategoryStyle(category) {
  return categoryColors[category] || 'border-white/20 text-white/70'
}

const analystSkills = [
  { name: 'Python', category: 'analyse' },
  { name: 'Pandas', category: 'analyse' },
  { name: 'SQL', category: 'db' },
  { name: 'Power BI', category: 'viz' },
  { name: 'Streamlit', category: 'viz' },
  { name: 'PostgreSQL', category: 'db' },
  { name: 'Php', category: 'db' },
  { name: 'Laravel', category: 'db' },
  { name: 'Scikit-learn', category: 'ml' },
  { name: 'NLTK', category: 'ml' },
  { name: 'Matplotlib', category: 'viz' },
  { name: 'BeautifulSoup', category: 'analyse' },
  { name: 'Git', category: 'tools' },
  { name: 'Github', category: 'tools' },
  { name: 'SQLAlchemy', category: 'db' },
]

const engineerSkills = [
  { name: 'Apache Kafka', category: 'etl' },
  { name: 'PostgreSQL', category: 'etl' },
  { name: 'Supabase', category: 'etl' },
  { name: 'Azure', category: 'cloud' },
  { name: 'JupyterHub', category: 'cloud' },
  { name: 'APIs REST', category: 'etl' },
  { name: 'Keras', category: 'ml' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'Scikit-learn', category: 'ml' },
  { name: 'Git', category: 'tools' },
  { name: 'Github', category: 'tools' },
  { name: 'Linux / WSL', category: 'tools' },
  { name: 'FastAPI', category: 'tools' },
  { name: 'Php', category: 'db' },
  { name: 'Laravel', category: 'db' },
]

const currentSkills = computed(() =>
  store.currentMode === 'analyst' ? analystSkills : engineerSkills
)

onMounted(() => {
  updateCenter()
  window.addEventListener('resize', updateCenter)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCenter)
})
</script>
