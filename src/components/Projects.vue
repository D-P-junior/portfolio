<template>
  <section id="projects" class="py-24 relative overflow-hidden">

    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-20">
        <p class="text-sm font-semibold mb-2 font-['Inter'] transition-all duration-500"
          :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'">
          PROJETS
        </p>
        <h2 class="font-['Space_Grotesk'] font-bold text-4xl">Mes réalisations</h2>
        <p class="font-['Inter'] text-sm opacity-50 mt-3">
          {{ store.currentMode === 'analyst'
            ? 'Analyse, visualisation et insights data'
            : 'Pipelines, ML et infrastructure de données' }}
        </p>
      </div>

      <!-- Projet vedette -->
      <div
        class="mb-16 rounded-3xl border overflow-hidden transition-all duration-500 group"
        :class="store.currentTheme === 'dark'
          ? 'bg-white/5 border-white/10 hover:border-white/20'
          : 'bg-black/5 border-black/10 hover:border-black/20'"
      >
        <div class="flex flex-col lg:flex-row">

          <!-- Visuel abstrait vedette -->
          <div class="lg:w-1/2 relative overflow-hidden" style="min-height: 300px;">
            <div
              class="absolute inset-0 transition-all duration-1000"
              :style="featuredProject.bg"
            ></div>

            <!-- Grille animée -->
            <div class="absolute inset-0 opacity-20"
              style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;">
            </div>

            <!-- Cercles décoratifs -->
            <div
              class="absolute w-48 h-48 rounded-full blur-3xl opacity-40 transition-all duration-1000 group-hover:scale-125"
              :style="{ backgroundColor: featuredProject.color1, top: '-20px', right: '-20px' }"
            ></div>
            <div
              class="absolute w-32 h-32 rounded-full blur-2xl opacity-30 transition-all duration-1000 group-hover:scale-110"
              :style="{ backgroundColor: featuredProject.color2, bottom: '20px', left: '20px' }"
            ></div>

            <!-- Badge vedette -->
            <div class="absolute top-4 left-4 z-10">
              <span
                class="px-3 py-1.5 rounded-full text-xs font-bold text-white font-['Inter'] backdrop-blur-sm"
                :class="store.currentMode === 'analyst' ? 'bg-[#3B82F6]/80' : 'bg-[#06B6D4]/80'"
              >
                🔥 Projet Vedette
              </span>
            </div>

            <!-- Texte flottant décoratif -->
            <div class="absolute bottom-6 left-6 z-10 space-y-1">
              <div
                v-for="line in featuredProject.codeLines" :key="line"
                class="font-mono text-xs text-white/40 transition-all duration-300"
              >
                {{ line }}
              </div>
            </div>

          </div>

          <!-- Contenu -->
          <div class="lg:w-1/2 p-8 space-y-5">

            <h3 class="font-['Space_Grotesk'] font-bold text-2xl">
              {{ featuredProject.title }}
            </h3>

            <p class="font-['Inter'] text-sm opacity-70 leading-relaxed">
              {{ featuredProject.description }}
            </p>

            <!-- Méthodologie -->
            <div class="space-y-2">
              <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">MÉTHODOLOGIE</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="step in featuredProject.steps" :key="step"
                  class="px-3 py-1 rounded-full text-xs font-['Inter'] border"
                  :class="store.currentTheme === 'dark'
                    ? 'border-white/20 text-white/60'
                    : 'border-black/20 text-black/60'"
                >
                  {{ step }}
                </span>
              </div>
            </div>

            <!-- Stack colorée -->
            <div class="space-y-2">
              <p class="text-xs font-bold opacity-40 font-['Inter'] tracking-widest">STACK</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in featuredProject.tech" :key="tech.name"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white font-['Inter'] transition-all duration-300 hover:scale-105"
                  :style="{ backgroundColor: tech.color }"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>

            <!-- Résultats -->
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="result in featuredProject.results" :key="result.label"
                class="text-center p-3 rounded-xl"
                :class="store.currentTheme === 'dark' ? 'bg-white/5' : 'bg-black/5'"
              >
                <p
                  class="font-['Space_Grotesk'] font-bold text-xl transition-all duration-500"
                  :class="store.currentMode === 'analyst' ? 'text-[#3B82F6]' : 'text-[#06B6D4]'"
                >
                  {{ result.value }}
                </p>
                <p class="text-xs opacity-50 font-['Inter']">{{ result.label }}</p>
              </div>
            </div>

            <a
              :href="featuredProject.github"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg font-['Inter']"
              :class="store.currentMode === 'analyst'
                ? 'bg-[#3B82F6] hover:shadow-blue-500/30'
                : 'bg-[#06B6D4] hover:shadow-cyan-500/30'"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir sur GitHub
            </a>

          </div>
        </div>
      </div>

      <!-- Autres projets -->
      <h3 class="font-['Space_Grotesk'] font-semibold text-xl mb-8 opacity-60">Autres projets</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in otherProjects"
          :key="project.title"
          class="group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          :class="store.currentTheme === 'dark'
            ? 'bg-white/5 border-white/10 hover:border-white/20'
            : 'bg-black/5 border-black/10 hover:border-black/20'"
        >

          <!-- Visuel abstrait -->
          <div class="relative overflow-hidden" style="height: 160px;">

            <!-- Fond gradient -->
            <div
              class="absolute inset-0 transition-all duration-700 group-hover:scale-110"
              :style="project.bg"
            ></div>

            <!-- Grille -->
            <div class="absolute inset-0 opacity-10"
              style="background-image: linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 30px 30px;">
            </div>

            <!-- Cercle décoratif -->
            <div
              class="absolute w-24 h-24 rounded-full blur-2xl opacity-50 transition-all duration-700 group-hover:scale-150"
              :style="{ backgroundColor: project.color1, top: '-10px', right: '-10px' }"
            ></div>
            <div
              class="absolute w-16 h-16 rounded-full blur-xl opacity-30 transition-all duration-700"
              :style="{ backgroundColor: project.color2, bottom: '10px', left: '10px' }"
            ></div>

            <!-- Catégorie badge -->
            <div class="absolute top-3 left-3 z-10">
              <span
                class="px-2.5 py-1 rounded-lg text-xs font-semibold font-['Inter'] backdrop-blur-sm text-white"
                :style="{ backgroundColor: project.categoryColor + 'CC' }"
              >
                {{ project.category }}
              </span>
            </div>

            <!-- Lignes code déco -->
            <div class="absolute bottom-3 left-3 z-10 space-y-0.5">
              <div
                v-for="line in project.codeLines" :key="line"
                class="font-mono text-xs text-white/30"
              >
                {{ line }}
              </div>
            </div>

          </div>

          <!-- Contenu -->
          <div class="p-5 flex flex-col flex-1 space-y-3">

            <h4 class="font-['Space_Grotesk'] font-bold text-base">{{ project.title }}</h4>

            <p class="font-['Inter'] text-xs opacity-60 leading-relaxed flex-1">
              {{ project.description }}
            </p>

            <!-- Défi -->
            <div
              class="p-3 rounded-xl text-xs font-['Inter'] leading-relaxed"
              :class="store.currentTheme === 'dark' ? 'bg-white/5' : 'bg-black/5'"
            >
              <span class="font-semibold opacity-40">DÉFI — </span>
              <span class="opacity-60">{{ project.challenge }}</span>
            </div>

            <!-- Stack colorée -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.tech" :key="tech.name"
                class="px-2 py-0.5 rounded text-xs font-semibold text-white font-['Inter'] transition-all duration-300 hover:scale-105"
                :style="{ backgroundColor: tech.color }"
              >
                {{ tech.name }}
              </span>
            </div>

            <!-- Lien GitHub -->
            <a
              :href="project.github"
              target="_blank"
              class="inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 font-['Inter'] pt-1"
              :class="store.currentMode === 'analyst' ? 'text-[#3B82F6] hover:text-[#60A5FA]' : 'text-[#06B6D4] hover:text-[#22D3EE]'"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir sur GitHub →
            </a>

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

const techColors = {
  Python: '#3776AB',
  Pandas: '#150458',
  SQL: '#F29111',
  SQLAlchemy: '#D71F00',
  SQLite: '#003B57',
  'Power BI': '#F2C811',
  Streamlit: '#FF4B4B',
  Matplotlib: '#11557C',
  Seaborn: '#4C72B0',
  BeautifulSoup: '#3CB371',
  Requests: '#2B2D42',
  'Scikit-learn': '#F7931E',
  NLTK: '#154360',
  NumPy: '#013243',
  Kafka: '#231F20',
  PostgreSQL: '#336791',
  Supabase: '#3ECF8E',
  Azure: '#0078D4',
  JupyterHub: '#F37626',
  Keras: '#D00000',
  TensorFlow: '#FF6F00',
  WSL: '#4D4D4D',
  'Power BI DirectQuery': '#F2C811',
}

function getTech(names) {
  return names.map(name => ({
    name,
    color: techColors[name] || '#6B7280',
  }))
}

const analystFeatured = {
  title: 'Real-time Sentiment Analysis',
  description: 'Analyse des sentiments Reddit en temps réel. Visualisation de l\'évolution des opinions via un dashboard Power BI DirectQuery connecté en live à une base PostgreSQL.',
  github: 'https://github.com/D-P-junior/SentimentAnalyse',
  steps: ['Collecte Reddit', 'Modèle NLP', 'Analyse sentiments', 'Dashboard live'],
  tech: getTech(['Python', 'Scikit-learn', 'Kafka', 'PostgreSQL', 'Power BI']),
  results: [
    { value: '89%', label: 'Accuracy' },
    { value: 'Live', label: 'Dashboard' },
    { value: '2', label: 'Consumers' },
  ],
  color1: '#3B82F6',
  color2: '#6366F1',
  bg: 'background: linear-gradient(135deg, #0f1f3d 0%, #1a1040 50%, #0d1b2a 100%)',
  codeLines: ['> sentiment_pipeline.run()', '> kafka.consume(topic="reddit")', '> model.predict(data)'],
}

const engineerFeatured = {
  title: 'Real-time Sentiment Pipeline',
  description: 'Architecture de streaming distribuée avec Apache Kafka. Pipeline complet : scraping Reddit → Kafka Producer → Consumers → PostgreSQL/Supabase → Power BI DirectQuery.',
  github: 'https://github.com/D-P-junior/SentimentAnalyse',
  steps: ['Kafka Producer', 'Streaming', 'Consumers', 'PostgreSQL', 'Power BI'],
  tech: getTech(['Kafka', 'Python', 'PostgreSQL', 'Supabase', 'WSL']),
  results: [
    { value: '2', label: 'Consumers' },
    { value: 'RT', label: 'Streaming' },
    { value: '89%', label: 'Accuracy' },
  ],
  color1: '#06B6D4',
  color2: '#0EA5E9',
  bg: 'background: linear-gradient(135deg, #0d2137 0%, #0a1929 50%, #061520 100%)',
  codeLines: ['> kafka.producer.send(msg)', '> consumer.poll(timeout=1.0)', '> db.insert(processed_data)'],
}

const analystProjects = [
  {
    title: 'Instacart Grocery Analysis',
    category: 'Data Analysis',
    categoryColor: '#3B82F6',
    description: 'Analyse complète des commandes d\'une épicerie. Heatmaps, taux de réachat, top produits et recommandations business sur 5 CSVs.',
    challenge: 'Fusion de 5 CSVs avec relations complexes et insights actionnables.',
    github: 'https://github.com/D-P-junior/dataviz',
    tech: getTech(['Python', 'Pandas', 'SQLAlchemy', 'SQLite', 'Power BI']),
    color1: '#3B82F6',
    color2: '#F2C811',
    bg: 'background: linear-gradient(135deg, #0f1b3d 0%, #1a1500 100%)',
    codeLines: ['> df.groupby("product").agg()', '> heatmap(corr_matrix)'],
  },
  {
    title: 'CoinAfrique PS5 Scraping',
    category: 'Web Scraping',
    categoryColor: '#10B981',
    description: 'Scraping des annonces PS5 sur CoinAfrique.com. Extraction, nettoyage et structuration des données du marché ivoirien.',
    challenge: 'Gestion des pages dynamiques et nettoyage des prix variés.',
    github: 'https://github.com/D-P-junior/CoinAfrique',
    tech: getTech(['Python', 'BeautifulSoup', 'Requests', 'Pandas']),
    color1: '#10B981',
    color2: '#3B82F6',
    bg: 'background: linear-gradient(135deg, #0a2a1f 0%, #0d1b2a 100%)',
    codeLines: ['> soup.find_all("div.ad")', '> df.to_csv("ps5_data.csv")'],
  },
  {
    title: 'NLP Book Recommender',
    category: 'NLP / ML',
    categoryColor: '#8B5CF6',
    description: 'Recommandation de livres par similarité sémantique LSA sur 52 textes Project Gutenberg.',
    challenge: 'Réduction dimensionnelle et cosine similarity sur grande matrice TF-IDF.',
    github: 'https://github.com/D-P-junior/NLP',
    tech: getTech(['Python', 'Scikit-learn', 'NumPy', 'NLTK']),
    color1: '#8B5CF6',
    color2: '#EC4899',
    bg: 'background: linear-gradient(135deg, #1a0a2e 0%, #2d0a1f 100%)',
    codeLines: ['> svd.fit_transform(tfidf)', '> cosine_similarity(matrix)'],
  },
  {
    title: 'NLP Bag of Words',
    category: 'NLP',
    categoryColor: '#F59E0B',
    description: 'Pipeline NLP complet sur 52 textes Gutenberg. Tokenisation, stopwords, lemmatisation et word clouds.',
    challenge: 'Traitement homogène de textes de genres et époques très variés.',
    github: 'https://github.com/D-P-junior/NLP',
    tech: getTech(['Python', 'NLTK', 'NumPy', 'Matplotlib']),
    color1: '#F59E0B',
    color2: '#EF4444',
    bg: 'background: linear-gradient(135deg, #2a1a00 0%, #1a0a0a 100%)',
    codeLines: ['> nltk.tokenize(text)', '> WordCloud().generate(freq)'],
  },
  {
    title: 'C-DAT-700 Live Corp',
    category: 'Data Analysis',
    categoryColor: '#3B82F6',
    description: 'Analyse des données RSS d\'entreprises avec dashboard Streamlit et modèles ML intégrés.',
    challenge: 'Traitement de flux RSS continus avec intégration ML en temps réel.',
    github: 'https://github.com/D-P-junior/FluxRss',
    tech: getTech(['Python', 'Pandas', 'Streamlit', 'Matplotlib']),
    color1: '#3B82F6',
    color2: '#10B981',
    bg: 'background: linear-gradient(135deg, #0f1b3d 0%, #0a2a1f 100%)',
    codeLines: ['> feedparser.parse(rss_url)', '> st.plotly_chart(fig)'],
  },
]

const engineerProjects = [
  {
    title: 'C-DAT-700 Live Corp',
    category: 'Data Engineering',
    categoryColor: '#06B6D4',
    description: 'Infrastructure Azure complète avec JupyterHub multi-utilisateurs, scraper RSS automatisé et déploiement ML.',
    challenge: 'Configuration d\'une infrastructure Azure partagée avec gestion des accès.',
    github: 'https://github.com/D-P-junior/FluxRss',
    tech: getTech(['Azure', 'JupyterHub', 'Python', 'Streamlit']),
    color1: '#0078D4',
    color2: '#06B6D4',
    bg: 'background: linear-gradient(135deg, #001429 0%, #002a40 100%)',
    codeLines: ['> azure.deploy(service)', '> jupyterhub.start()'],
  },
  {
    title: 'Fashion MNIST Deep Learning',
    category: 'Deep Learning',
    categoryColor: '#D00000',
    description: 'Réseau dense Sequential pour classification de vêtements avec optimisation des hyperparamètres.',
    challenge: 'Optimisation via build_and_train() pour trouver la meilleure combinaison batch/epochs.',
    github: 'https://github.com/D-P-junior/FashionMnist',
    tech: getTech(['Python', 'Keras', 'TensorFlow', 'NumPy']),
    color1: '#D00000',
    color2: '#FF6F00',
    bg: 'background: linear-gradient(135deg, #2a0000 0%, #1a0d00 100%)',
    codeLines: ['> model.fit(X_train, epochs=20)', '> np.argmax(predictions)'],
  },
  {
    title: 'SVM Classification & Régression',
    category: 'Machine Learning',
    categoryColor: '#F59E0B',
    description: 'SVC et SVR complets avec métriques approfondies de classification et régression.',
    challenge: 'Maîtrise F1, precision, recall pour SVC et MAE, RMSE, R² pour SVR.',
    github: 'https://github.com/D-P-junior/regression',
    tech: getTech(['Python', 'Scikit-learn', 'Pandas', 'NumPy']),
    color1: '#F59E0B',
    color2: '#10B981',
    bg: 'background: linear-gradient(135deg, #2a1500 0%, #002a15 100%)',
    codeLines: ['> svc.fit(X_train, y_train)', '> confusion_matrix(y, pred)'],
  },
  {
    title: 'NLP — Natural Language Processing',
    category: 'NLP',
    categoryColor: '#8B5CF6',
    description: 'Pipeline NLP complet : Bag of Words, TF-IDF, LSA et recommandation par cosine similarity sur 52 documents.',
    challenge: 'Pipeline unifié couvrant plusieurs techniques NLP sur corpus varié.',
    github: 'https://github.com/D-P-junior/NLP',
    tech: getTech(['Python', 'NLTK', 'Scikit-learn', 'NumPy']),
    color1: '#8B5CF6',
    color2: '#06B6D4',
    bg: 'background: linear-gradient(135deg, #1a0a2e 0%, #002a35 100%)',
    codeLines: ['> tfidf.fit_transform(corpus)', '> svd.components_[topic]'],
  },
]

const featuredProject = computed(() =>
  store.currentMode === 'analyst' ? analystFeatured : engineerFeatured
)

const otherProjects = computed(() =>
  store.currentMode === 'analyst' ? analystProjects : engineerProjects
)
</script>
