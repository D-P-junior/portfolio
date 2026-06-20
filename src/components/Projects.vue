<template>
  <section id="projects" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-16">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          PROJETS
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Mes réalisations</h2>
      </div>

      <!-- Projet vedette -->
      <div class="mb-12 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden"
        :class="store.currentTheme === 'dark'
          ? 'bg-white/5 border-white/10'
          : 'bg-black/5 border-black/10'">

        <!-- Badge vedette -->
        <div class="absolute top-6 right-6">
          <span class="px-3 py-1 rounded-full text-xs font-bold text-white"
            :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'">
            
          </span>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="flex-1 space-y-4">
            <h3 class="font-['Space_Grotesk'] font-bold text-2xl">
              Real-time Sentiment Analysis Pipeline
            </h3>
            <p class="font-['Inter'] text-sm opacity-70 leading-relaxed">
              {{ store.currentMode === 'analyst'
                ? "Analyse des sentiments en temps réel sur Reddit. Visualisation de l'évolution des opinions via un dashboard Power BI DirectQuery connecté en live à une base PostgreSQL."
                : "Architecture de streaming distribuée avec Apache Kafka. Pipeline complet : scraping Reddit → Kafka → consumers → PostgreSQL/Supabase → Power BI DirectQuery." }}
            </p>

            <!-- Méthodologie -->
            <div class="space-y-2">
              <p class="text-xs font-semibold opacity-50 font-['Inter']">MÉTHODOLOGIE</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="step in featuredSteps" :key="step"
                  class="px-3 py-1 rounded-full text-xs font-['Inter'] border"
                  :class="store.currentTheme === 'dark' ? 'border-white/20 text-white/70' : 'border-black/20 text-black/70'">
                  {{ step }}
                </span>
              </div>
            </div>

            <!-- Stack -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in featuredTech" :key="tech"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white font-['Inter']"
                :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]/80' : 'bg-[#06B6D4]/80'">
                {{ tech }}
              </span>
            </div>

            <!-- Résultats -->
            <div class="grid grid-cols-3 gap-4 pt-2">
              <div v-for="result in featuredResults" :key="result.label"
                class="text-center p-3 rounded-xl"
                :class="store.currentTheme === 'dark' ? 'bg-white/5' : 'bg-black/5'">
                <p class="font-['Space_Grotesk'] font-bold text-xl"
                  :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
                  {{ result.value }}
                </p>
                <p class="text-xs opacity-50 font-['Inter']">{{ result.label }}</p>
              </div>
            </div>

            <div class="flex gap-3 pt-2">
              <a href="#" class="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 font-['Inter']"
                :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]' : 'bg-[#06B6D4]'">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Autres projets -->
      <h3 class="font-['Space_Grotesk'] font-semibold text-xl mb-6 opacity-70">Autres projets</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in otherProjects" :key="project.title"
          class="p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          :class="store.currentTheme === 'dark'
            ? 'bg-white/5 border-white/10 hover:border-white/20'
            : 'bg-black/5 border-black/10 hover:border-black/20'"
        >
          <div class="flex items-start justify-between mb-4">
            <span class="text-3xl">{{ project.icon }}</span>
            <span class="px-2 py-1 rounded-lg text-xs font-semibold"
              :class="store.currentTheme === 'dark' ? 'bg-white/10 text-white/60' : 'bg-black/10 text-black/60'">
              {{ project.category }}
            </span>
          </div>
          <h4 class="font-['Space_Grotesk'] font-semibold text-base mb-2">{{ project.title }}</h4>
          <p class="font-['Inter'] text-xs opacity-60 mb-4 leading-relaxed">{{ project.description }}</p>

          <!-- Difficultés -->
          <div class="mb-4">
            <p class="text-xs font-semibold opacity-40 mb-1 font-['Inter']">DÉFI</p>
            <p class="text-xs opacity-60 font-['Inter']">{{ project.challenge }}</p>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="tech in project.tech" :key="tech"
              class="px-2 py-0.5 rounded text-xs font-['Inter']"
              :class="store.currentTheme === 'dark' ? 'bg-white/10 text-white/60' : 'bg-black/10 text-black/60'">
              {{ tech }}
            </span>
          </div>
          <a href="#"
            class="text-xs font-semibold transition-all duration-300 font-['Inter']"
            :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
            Voir le projet →
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../stores/index.js'

const store = usePortfolioStore()

const featuredSteps = computed(() =>
  store.currentMode === 'analyst'
    ? ['Collecte Reddit', 'Modèle NLP', 'Analyse sentiments', 'Dashboard live']
    : ['Kafka Producer', 'Streaming', 'Consumers', 'PostgreSQL', 'Power BI']
)

const featuredTech = ['Python', 'Kafka', 'Scikit-learn', 'PostgreSQL', 'Supabase', 'Power BI', 'Reddit API']

const featuredResults = [
  { value: '89%', label: 'Accuracy' },
  { value: 'Live', label: 'Dashboard' },
  { value: '2', label: 'Consumers' },
]

const analystProjects = [
  {
    icon: '🛒',
    title: 'Instacart Grocery Analysis',
    category: 'Data Analysis',
    description: 'Analyse complète des commandes d\'une épicerie en ligne. Heatmaps, taux de réachat, top produits et recommandations business.',
    challenge: 'Fusion de 5 CSVs avec relations complexes et création d\'insights actionnables.',
    tech: ['Python', 'Pandas', 'SQLAlchemy', 'SQLite', 'Power BI'],
  },
  {
    icon: '📱',
    title: 'CoinAfrique PS5 Scraping',
    category: 'Web Scraping',
    description: 'Scraping des annonces PS5 sur CoinAfrique.com. Extraction, nettoyage et structuration des données du marché ivoirien.',
    challenge: 'Gestion des pages dynamiques et nettoyage des prix en formats variés.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
  },
  {
    icon: '📚',
    title: 'NLP Book Recommender',
    category: 'NLP / ML',
    description: 'Système de recommandation de livres basé sur la similarité sémantique via LSA sur 52 textes Project Gutenberg.',
    challenge: 'Réduction dimensionnelle et calcul de similarité sur une grande matrice TF-IDF.',
    tech: ['Python', 'Scikit-learn', 'TruncatedSVD', 'NumPy'],
  },
  {
    icon: '☁️',
    title: 'C-DAT-700 Live Corp',
    category: 'Data Analysis',
    description: 'Analyse des données d\'entreprises collectées via scraper RSS. Dashboard Streamlit avec visualisations et insights.',
    challenge: 'Traitement de flux RSS en continu et intégration de modèles ML dans le pipeline.',
    tech: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Azure'],
  },
  {
    icon: '📝',
    title: 'NLP Bag of Words',
    category: 'NLP',
    description: 'Pipeline NLP complet sur 52 textes Gutenberg. Tokenisation, stopwords, lemmatisation et génération de word clouds.',
    challenge: 'Traitement homogène de textes de genres et époques très variés.',
    tech: ['Python', 'NLTK', 'Matplotlib', 'WordCloud'],
  },
]

const engineerProjects = [
  {
    icon: '☁️',
    title: 'C-DAT-700 Live Corp',
    category: 'Data Engineering',
    description: 'Infrastructure complète sur Azure avec JupyterHub multi-utilisateurs, scraper RSS automatisé et déploiement de modèles ML.',
    challenge: 'Configuration d\'une infrastructure Azure partagée avec gestion des accès et déploiement de services.',
    tech: ['Azure', 'JupyterHub', 'Python', 'Scikit-learn', 'Streamlit'],
  },
  {
    icon: '🧠',
    title: 'Fashion MNIST Deep Learning',
    category: 'Deep Learning',
    description: 'Réseau de neurones dense pour la classification de vêtements. Architecture Sequential avec optimisation des hyperparamètres.',
    challenge: 'Optimisation du modèle via une boucle build_and_train() pour trouver la meilleure combinaison batch/epochs.',
    tech: ['Keras', 'TensorFlow', 'NumPy', 'Python'],
  },
  {
    icon: '🤖',
    title: 'SVM Classification & Régression',
    category: 'Machine Learning',
    description: 'Implémentation complète de SVC et SVR avec évaluation approfondie des métriques de classification et régression.',
    challenge: 'Maîtrise des métriques F1, precision, recall pour la classification et MAE, RMSE, R² pour la régression.',
    tech: ['Scikit-learn', 'Python', 'Pandas', 'NumPy'],
  },
]

const otherProjects = computed(() =>
  store.currentMode === 'analyst' ? analystProjects : engineerProjects
)
</script>
