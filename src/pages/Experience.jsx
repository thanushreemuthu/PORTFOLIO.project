import { motion } from 'framer-motion'
import { Briefcase, Zap } from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7 } }),
}

const experiences = [
  {
    type: 'internship', icon: Briefcase,
    role: 'NLP Research Intern', org: 'IIT Madras — NLP Lab', period: 'Jun 2024 — Aug 2024', color: '#9b2dff',
    points: [
      'Contributed to low-resource Tamil-English machine translation research.',
      'Fine-tuned mBERT and mBART baselines on a custom 50k-sentence parallel corpus.',
      'Improved BLEU score by 4.2 points using curriculum learning strategies.',
      'Co-authored internal technical report on low-resource NMT approaches.',
    ],
    tags: ['PyTorch', 'HuggingFace', 'mBERT', 'NLTK', 'Python'],
  },
  {
    type: 'freelance', icon: Zap,
    role: 'Freelance AI/ML Developer', org: 'Independent — Remote', period: '2024 — Present', color: '#00ff88',
    points: [
      'Built custom ML models for 3+ clients in e-commerce, healthcare, and EdTech verticals.',
      'Developed end-to-end data pipelines from data collection to model deployment.',
      'Delivered NLP-based sentiment analysis tool for a social media analytics startup.',
      'Created image classification APIs using FastAPI + PyTorch for a product company.',
    ],
    tags: ['FastAPI', 'PyTorch', 'Docker', 'Streamlit', 'Pandas', 'React'],
  },
]

const hackathons = [
  { event: 'Smart India Hackathon 2024', result: 'Top 10 Finalist — National Level', desc: 'Led a 4-member team to build a YOLOv8-based real-time crop disease detection system with edge deployment on Raspberry Pi.', color: '#ffd700', icon: '🏆' },
  { event: 'HackAI — IIT Bombay 2024', result: 'Best ML Innovation Award', desc: 'Developed a multi-modal sentiment analysis system combining text and audio features for customer feedback classification.', color: '#00d4ff', icon: '⚡' },
  { event: 'CodeStorm Hackathon 2023', result: '2nd Place — Anna University', desc: 'Built an AI-powered study assistant using GPT fine-tuning and RAG for personalised learning paths.', color: '#9b2dff', icon: '🥈' },
]

const services = [
  { icon: '🤖', title: 'ML Model Development', desc: 'End-to-end model development — data cleaning to deployment-ready APIs.' },
  { icon: '📊', title: 'Data Analysis & Viz', desc: 'Exploratory data analysis, dashboards, and actionable insight reports.' },
  { icon: '💬', title: 'NLP Solutions', desc: 'Text classification, sentiment analysis, summarisation, chatbots.' },
  { icon: '👁️', title: 'Computer Vision', desc: 'Object detection, image segmentation, and video analytics pipelines.' },
]

export default function Experience() {
  return (
    <div className="page-enter max-w-7xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="section-label mb-4">Experience & Achievements</div>
        <h1 className="font-orbitron font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', color: 'var(--text-primary)' }}>
          Mission <span className="gradient-text">Record</span>
        </h1>
        <p className="mb-16 max-w-xl text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          Internships, freelance work, hackathons, and everything in between.
        </p>
      </motion.div>

      {/* Experience cards */}
      <div className="space-y-6 mb-24">
        {experiences.map((exp, i) => (
          <motion.div key={i} custom={i} variants={fade} initial="hidden" animate="visible"
            className="glass-card holo-card rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l" style={{ background: exp.color }} />
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{ borderColor: `${exp.color}40`, background: `${exp.color}10` }}>
                  <exp.icon size={20} style={{ color: exp.color }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.15rem' }}>{exp.role}</h3>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em', color: exp.color }}>{exp.org}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="px-3 py-1 rounded-full text-xs"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                  {exp.period}
                </span>
                {exp.type === 'freelance' && (
                  <span className="flex items-center gap-1.5 text-xs"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#00ff88' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88' }} />
                    AVAILABLE NOW
                  </span>
                )}
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {exp.points.map((pt, pi) => (
                <li key={pi} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <span style={{ color: exp.color, marginTop: '0.35rem', fontSize: '0.5rem' }}>◆</span>{pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(t => (
                <span key={t} className="px-2.5 py-1 rounded text-xs"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.06em', color: exp.color, background: `${exp.color}10`, border: `1px solid ${exp.color}25` }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hackathons */}
      <div className="mb-24">
        <div className="section-label mb-8">Hackathons &amp; Competitions</div>
        <div className="grid md:grid-cols-3 gap-5">
          {hackathons.map((h, i) => (
            <motion.div key={i} custom={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-card holo-card rounded-xl p-6 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 50% 0%, ${h.color}, transparent 70%)` }} />
              <div className="text-4xl mb-3">{h.icon}</div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', color: h.color, marginBottom: '0.5rem' }}>{h.result}</p>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1rem' }}>{h.event}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.85rem' }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Freelance Services */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="section-label">Freelance Services</div>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', borderColor: 'rgba(0,255,136,0.35)', color: '#00ff88', background: 'rgba(0,255,136,0.06)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88' }} />
            OPEN FOR PROJECTS
          </span>
        </div>
        <p className="mb-8 max-w-lg text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
          I take on freelance AI/ML projects. Fast delivery, clean code, detailed documentation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} custom={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-card holo-card rounded-xl p-5 text-center"
            >
              <span className="text-3xl block mb-3">{s.icon}</span>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>{s.title}</h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
