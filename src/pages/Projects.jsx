import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

const FILTERS = ['All', 'Computer Vision', 'NLP', 'Machine Learning', 'Generative AI']

const projects = [
  {
    id: 1, featured: true,
    num: '01', cat: 'Computer Vision',
    status: 'DEPLOYED', statusColor: '#00ff88',
    title: 'Crop Disease Detection System',
    desc: 'Real-time crop disease detection using YOLOv8 fine-tuned on 12,000+ plant leaf images. Classifies 15 disease types with 91.3% mAP. Edge-deployed on Raspberry Pi for offline field use. Built for Smart India Hackathon — Top 10 Finalist.',
    stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'ONNX', 'Raspberry Pi', 'FastAPI'],
    accent: '#00d4ff',
    metrics: [['91.3%', 'mAP'], ['15', 'Disease Classes'], ['60fps', 'Edge Speed']],
  },
  {
    id: 2, num: '02', cat: 'NLP',
    status: 'LIVE', statusColor: '#00ff88',
    title: 'Research Paper Summariser',
    desc: 'Extractive + abstractive pipeline using T5 and BERT. Condenses ML papers into structured summaries with section identification and key-contribution extraction.',
    stack: ['HuggingFace', 'T5', 'BERT', 'FastAPI', 'React'],
    accent: '#9b2dff',
  },
  {
    id: 3, num: '03', cat: 'Machine Learning',
    status: 'DEPLOYED', statusColor: '#00ff88',
    title: 'Academic Performance Predictor',
    desc: 'Ensemble model (XGBoost + Random Forest) predicting student grades from behavioural and academic features. Streamlit dashboard for faculty insights.',
    stack: ['XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas', 'Plotly'],
    accent: '#ff2d78',
  },
  {
    id: 4, num: '04', cat: 'Generative AI',
    status: 'LIVE', statusColor: '#00ff88',
    title: 'Neural Style Transfer App',
    desc: 'Applies artistic styles of famous paintings to user photos using VGG-19 feature maps and gradient descent. 10 preset artist styles, <30s per transfer.',
    stack: ['TensorFlow', 'VGG-19', 'Flask', 'PIL', 'React'],
    accent: '#ffd700',
  },
  {
    id: 5, num: '05', cat: 'Computer Vision',
    status: 'COMPLETED', statusColor: '#9b2dff',
    title: 'Sign Language Interpreter',
    desc: 'MediaPipe hand landmark detection + LSTM classifier recognising 26 ASL alphabet signs in real-time through webcam. 96.2% accuracy on test set.',
    stack: ['MediaPipe', 'LSTM', 'OpenCV', 'Keras', 'Streamlit'],
    accent: '#00d4ff',
  },
  {
    id: 6, num: '06', cat: 'NLP',
    status: 'COMPLETED', statusColor: '#9b2dff',
    title: 'Tamil Sentiment Analyser',
    desc: 'Fine-tuned mBERT on Tamil social media dataset for 3-class sentiment classification. 84.2% accuracy, presented at university symposium.',
    stack: ['mBERT', 'HuggingFace', 'PyTorch', 'NLTK', 'FastAPI'],
    accent: '#ff2d78',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.cat === filter)

  return (
    <div className="page-enter max-w-7xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="section-label mb-4">Mission Logs</div>
        <h1 className="font-orbitron font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
          Projects &amp; <span className="gradient-text">Research</span>
        </h1>
        <p className="mb-10 max-w-xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          A selection of projects built through coursework, hackathons, and personal curiosity.
        </p>
      </motion.div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 rounded-sm text-xs font-mono border transition-all hover:scale-105"
            style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              borderColor: filter === f ? 'var(--text-accent)' : 'var(--border)',
              color: filter === f ? 'var(--text-accent)' : 'var(--text-secondary)',
              background: filter === f ? 'rgba(0,212,255,0.08)' : 'transparent',
              boxShadow: filter === f ? '0 0 12px rgba(0,212,255,0.2)' : 'none',
            }}
          >
            [ {f}{filter === f ? ` · ${filtered.length}` : ''} ]
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i} variants={cardVariants} initial="hidden" animate="visible" exit="exit"
              layout
              className={`glass-card holo-card rounded-xl p-6 relative overflow-hidden ${p.featured ? 'lg:col-span-2' : ''}`}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />

              <div className={p.featured ? 'lg:grid lg:grid-cols-2 gap-8' : ''}>
                <div>
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.14em', color: 'var(--text-secondary)' }}>
                        MODULE_{p.num}.exe
                      </span>
                      {p.featured && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                          style={{ background: 'rgba(255,215,0,0.1)', color: '#ffd700', fontFamily: "'Space Mono', monospace", fontSize: '0.56rem', letterSpacing: '0.1em' }}>
                          <Star size={9} /> FEATURED
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color: p.statusColor }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.statusColor }} />
                      {p.status}
                    </span>
                  </div>

                  <span className="inline-block mb-3 px-2 py-0.5 rounded text-xs"
                    style={{ background: `${p.accent}15`, color: p.accent, fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.08em', border: `1px solid ${p.accent}30` }}>
                    {p.cat.toUpperCase()}
                  </span>

                  <h3 className="font-orbitron font-bold mb-3 leading-tight" style={{ fontSize: p.featured ? '1.6rem' : '1.2rem', color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded text-xs"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.06em', color: p.accent, background: `${p.accent}10`, border: `1px solid ${p.accent}25` }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-all hover:scale-105"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', fontFamily: "'Space Mono', monospace", fontSize: '0.62rem' }}>
                      <Github size={12} /> GitHub
                    </a>
                    <a href="#" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-all hover:scale-105"
                      style={{ borderColor: p.accent, color: p.accent, fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', background: `${p.accent}08` }}>
                      <ExternalLink size={12} /> Demo
                    </a>
                  </div>
                </div>

                {/* Featured metrics panel */}
                {p.featured && p.metrics && (
                  <div className="hidden lg:flex flex-col justify-center gap-4 pt-6 lg:pt-0 lg:pl-8" style={{ borderLeft: `1px solid rgba(255,255,255,0.06)` }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.14em', color: p.accent }}>// PERFORMANCE METRICS</p>
                    {p.metrics.map(([val, label], mi) => (
                      <div key={mi}>
                        <p className="font-orbitron font-bold" style={{ fontSize: '2.4rem', color: p.accent, lineHeight: 1, textShadow: `0 0 20px ${p.accent}80` }}>{val}</p>
                        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{label}</p>
                      </div>
                    ))}

                    {/* Scanning animation */}
                    <div className="relative mt-4 h-24 rounded overflow-hidden" style={{ background: `${p.accent}06`, border: `1px solid ${p.accent}15` }}>
                      <div className="absolute inset-x-0 h-0.5 animate-scan" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
                      <div className="flex items-center justify-center h-full">
                        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.14em', color: `${p.accent}60` }}>SCANNING_PROJECT_DB...</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Big number bg decoration */}
              <div className="absolute -bottom-2 -right-2 font-orbitron font-black pointer-events-none select-none"
                style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                {p.num}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
