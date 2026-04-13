import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Machine Learning', color: '#00d4ff', icon: '🤖',
    skills: [
      { name: 'Scikit-learn', pct: 90 }, { name: 'XGBoost / LightGBM', pct: 84 },
      { name: 'Feature Engineering', pct: 87 }, { name: 'Model Evaluation', pct: 89 },
      { name: 'Time Series Analysis', pct: 72 },
    ],
  },
  {
    label: 'Deep Learning', color: '#9b2dff', icon: '🧠',
    skills: [
      { name: 'PyTorch', pct: 88 }, { name: 'TensorFlow / Keras', pct: 84 },
      { name: 'CNNs & ResNets', pct: 90 }, { name: 'Transformers', pct: 80 },
      { name: 'GANs & Diffusion', pct: 65 },
    ],
  },
  {
    label: 'Computer Vision', color: '#ff2d78', icon: '👁️',
    skills: [
      { name: 'OpenCV', pct: 88 }, { name: 'YOLOv8 Detection', pct: 82 },
      { name: 'Image Segmentation', pct: 76 }, { name: 'Data Augmentation', pct: 87 },
    ],
  },
  {
    label: 'NLP', color: '#ffd700', icon: '💬',
    skills: [
      { name: 'HuggingFace', pct: 82 }, { name: 'BERT / RoBERTa', pct: 78 },
      { name: 'NLTK / SpaCy', pct: 83 }, { name: 'Text Classification', pct: 86 },
    ],
  },
  {
    label: 'Data Science', color: '#00ff88', icon: '📊',
    skills: [
      { name: 'Python', pct: 93 }, { name: 'Pandas / NumPy', pct: 91 },
      { name: 'SQL', pct: 79 }, { name: 'Matplotlib / Seaborn', pct: 86 },
    ],
  },
]

const tools = ['Git & GitHub', 'Docker', 'Jupyter', 'Google Colab', 'VS Code', 'Linux / Bash', 'FastAPI', 'Streamlit', 'Flask', 'W&B', 'MLflow', 'AWS', 'Kaggle', 'LaTeX']

const certs = [
  { issuer: 'DeepLearning.AI · Coursera', name: 'Deep Learning Specialisation', year: '2024', color: '#00d4ff' },
  { issuer: 'Stanford · Coursera', name: 'Machine Learning — Andrew Ng', year: '2023', color: '#9b2dff' },
  { issuer: 'Google', name: 'ML Crash Course', year: '2023', color: '#ff2d78' },
  { issuer: 'NPTEL · IIT Madras', name: 'Introduction to NLP', year: '2024', color: '#ffd700' },
  { issuer: 'HuggingFace', name: 'NLP with Transformers', year: '2025', color: '#00ff88' },
  { issuer: 'Kaggle', name: 'Intermediate ML', year: '2024', color: '#9b2dff' },
]

function SkillBar({ name, pct, color }) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setFilled(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: color }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="skill-bar-fill rounded-full"
          style={{ width: filled ? `${pct}%` : '0%', background: `linear-gradient(90deg, ${color}88, ${color})`, color }}
        />
      </div>
    </div>
  )
}

const fade = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }) }

export default function Skills() {
  return (
    <div className="page-enter max-w-7xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="section-label mb-4">Skill Constellation</div>
        <h1 className="font-orbitron font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
          What I <span className="gradient-text">orbit</span> around
        </h1>
        <p className="mb-16 max-w-xl text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          Technologies and frameworks developed through coursework, hackathons, and relentless curiosity.
        </p>
      </motion.div>

      {/* Skill groups */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {skillGroups.map((group, gi) => (
          <motion.div key={gi} custom={gi} variants={fade} initial="hidden" animate="visible"
            className="glass-card holo-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
              <span className="text-2xl">{group.icon}</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{group.label}</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color: group.color }}>{group.skills.length} skills</p>
              </div>
              <div className="ml-auto w-3 h-3 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
            </div>
            <div className="space-y-4">
              {group.skills.map((s, si) => (
                <SkillBar key={si} {...s} color={group.color} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Tools card */}
        <motion.div custom={skillGroups.length} variants={fade} initial="hidden" animate="visible"
          className="glass-card holo-card rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-2xl">☁️</span>
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>Tools & Environment</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color: '#00d4ff' }}>dev stack</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => (
              <span key={t} className="px-2.5 py-1 rounded text-xs border transition-all hover:scale-105"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.06em', background: 'rgba(255,255,255,0.03)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4ff'; e.currentTarget.style.color = '#00d4ff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <div>
        <div className="section-label mb-8">Certifications & Courses</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div key={i} custom={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-card holo-card rounded-xl p-5 border-l-2 transition-all"
              style={{ borderLeftColor: c.color }}
            >
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.14em', color: c.color, marginBottom: '0.5rem' }}>{c.issuer}</p>
              <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>{c.name}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'var(--text-secondary)' }}>{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
