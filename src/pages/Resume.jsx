import { motion } from 'framer-motion'
import { Download, ExternalLink, Printer } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }) }

const resumeSections = [
  {
    title: 'Education', color: '#00d4ff', icon: '🎓',
    items: [{ title: 'B.Tech — Artificial Intelligence & Machine Learning', sub: 'Anna University · Chennai, Tamil Nadu', period: '2022 — 2026', detail: 'CGPA: 8.9 / 10 · Dean\'s List' }],
  },
  {
    title: 'Experience', color: '#9b2dff', icon: '💼',
    items: [
      { title: 'NLP Research Intern', sub: 'IIT Madras NLP Lab', period: 'Jun — Aug 2024', detail: 'Tamil-English translation research · BLEU +3.2 · 50K corpus' },
      { title: 'AI/ML Freelance Developer', sub: 'Independent', period: '2023 — Present', detail: '8+ projects · Agriculture, EdTech, E-commerce' },
    ],
  },
  {
    title: 'Key Projects', color: '#ff2d78', icon: '🚀',
    items: [
      { title: 'Crop Disease Detection — YOLOv8', sub: 'Smart India Hackathon Top 10', period: '2024', detail: '91.3% mAP · Edge deployed · 12K dataset' },
      { title: 'Research Paper Summariser', sub: 'T5 + BERT Pipeline', period: '2024', detail: 'Live deployment · FastAPI + React' },
      { title: 'Tamil Sentiment Analyser', sub: 'mBERT Fine-tuning', period: '2024', detail: '84.2% accuracy · University symposium' },
    ],
  },
  {
    title: 'Skills', color: '#ffd700', icon: '⚡',
    items: [
      { title: 'ML & Deep Learning', sub: 'PyTorch · TensorFlow · Scikit-learn · XGBoost', period: '', detail: '' },
      { title: 'Computer Vision & NLP', sub: 'OpenCV · YOLOv8 · HuggingFace · BERT · T5', period: '', detail: '' },
      { title: 'Languages & Tools', sub: 'Python · SQL · FastAPI · Docker · Git · AWS', period: '', detail: '' },
    ],
  },
  {
    title: 'Certifications', color: '#00ff88', icon: '🏅',
    items: [
      { title: 'Deep Learning Specialisation', sub: 'DeepLearning.AI · Coursera', period: '2024', detail: '' },
      { title: 'Machine Learning — Andrew Ng', sub: 'Stanford · Coursera', period: '2023', detail: '' },
      { title: 'NLP with Transformers', sub: 'HuggingFace', period: '2025', detail: '' },
      { title: 'NPTEL Introduction to NLP', sub: 'IIT Madras', period: '2024', detail: '' },
    ],
  },
]

export default function Resume() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-start justify-between gap-6 mb-14">
        <div>
          <div className="section-label mb-4">Curriculum Vitae</div>
          <h1 className="font-orbitron font-bold leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
            My <span className="gradient-text">Resume</span>
          </h1>
        </div>
        <div className="flex gap-3 flex-wrap mt-4">
          <a href="/resume.pdf" download="Thanushree_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm border text-sm font-mono transition-all hover:scale-105 resume-btn"
            style={{ borderColor: 'var(--text-accent)', color: 'var(--text-accent)', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.12em', position: 'relative', zIndex: 1 }}>
            <Download size={14} /> Download PDF
          </a>
          <button onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm border text-sm font-mono transition-all hover:scale-105"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.12em' }}>
            <Printer size={14} /> Print
          </button>
        </div>
      </motion.div>

      {/* Resume card */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="glass-card rounded-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%)', borderBottom: '1px solid var(--border)' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, var(--text-accent), var(--nebula-violet, #9b2dff), transparent)' }} />
          <h2 className="font-orbitron font-bold mb-1" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Thanushree</h2>
          <p className="font-semibold mb-3" style={{ color: 'var(--text-accent)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>B.Tech AI & ML Student · Freelance AI/ML Developer</p>
          <div className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            <span>📍 Chennai, Tamil Nadu</span>
            <span>✉ thanushree@email.com</span>
            <span>🔗 github.com/thanushree</span>
            <span>💼 linkedin.com/in/thanushree</span>
          </div>
        </div>

        {/* Sections */}
        <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
          {resumeSections.map((section, si) => (
            <motion.div key={si} custom={si} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{section.icon}</span>
                <h3 className="font-orbitron font-semibold" style={{ color: section.color, fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{section.title}</h3>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${section.color}50, transparent)` }} />
              </div>
              <div className="space-y-4">
                {section.items.map((item, ii) => (
                  <div key={ii} className="grid sm:grid-cols-4 gap-2 group">
                    <div className="sm:col-span-3">
                      <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '1rem' }}>{item.title}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'Rajdhani, sans-serif' }}>{item.sub}</p>
                      {item.detail && <p style={{ fontSize: '0.78rem', color: section.color, fontFamily: "'Space Mono', monospace", letterSpacing: '0.06em', marginTop: '0.3rem' }}>{item.detail}</p>}
                    </div>
                    {item.period && (
                      <div className="sm:text-right">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>{item.period}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="px-8 py-4 text-center" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
            Place your actual resume as <span style={{ color: 'var(--text-accent)' }}>resume.pdf</span> in the <span style={{ color: 'var(--text-accent)' }}>/public</span> folder to enable PDF download
          </p>
        </div>
      </motion.div>
    </div>
  )
}
