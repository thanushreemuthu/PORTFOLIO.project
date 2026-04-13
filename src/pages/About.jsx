import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Star, Briefcase, Download } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 24 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7 } }) }

const timeline = [
  { year: '2022 — Present', icon: GraduationCap, title: 'B.Tech — AI & ML', sub: 'Anna University, Chennai', desc: 'Pursuing specialisation in Artificial Intelligence & Machine Learning. Dean\'s List, CGPA 8.9. Focus on deep learning, NLP, and computer vision.', color: '#00d4ff' },
  { year: '2024', icon: Star, title: 'Top 10 — Smart India Hackathon', sub: 'National Level', desc: 'Led a 4-member team building a real-time crop disease detection system using YOLOv8. Competed against 200+ teams across India.', color: '#ffd700' },
  { year: '2024', icon: Briefcase, title: 'NLP Research Internship', sub: 'IIT Madras NLP Lab', desc: 'Contributed to low-resource Tamil-English translation research. Fine-tuned multilingual transformer baselines on custom datasets.', color: '#9b2dff' },
  { year: '2025', icon: Star, title: 'Open for Opportunities', sub: 'Freelancing + Internships', desc: 'Actively seeking AI/ML engineering roles, research positions, and freelance projects. Remote, hybrid, or Chennai-based.', color: '#00ff88' },
]

const interests = [
  { icon: '🧬', name: 'AI for Science', sub: 'AlphaFold, Drug Discovery' },
  { icon: '🌌', name: 'Astrophysics', sub: 'Black Holes, Dark Matter' },
  { icon: '📖', name: 'ML Research', sub: 'ArXiv Deep Dives' },
  { icon: '🎵', name: 'Music', sub: 'Carnatic & Indie Folk' },
  { icon: '🧩', name: 'Problem Solving', sub: 'Kaggle & LeetCode' },
  { icon: '🌱', name: 'Open Source', sub: 'OSS Contributions' },
]

export default function About() {
  return (
    <div className="page-enter max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        {/* Left */}
        <div>
          <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
            <div className="section-label mb-4">About Me</div>
            <h1 className="font-orbitron font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
              Exploring the <span className="gradient-text">cosmos</span> of intelligence
            </h1>
          </motion.div>

          <motion.div custom={1} variants={fade} initial="hidden" animate="visible" className="space-y-4 mb-8 text-base leading-relaxed" style={{ color: 'var(--text-secondary)', fontWeight: 400, lineHeight: 1.95 }}>
            <p>I'm <strong style={{ color: 'var(--text-primary)' }}>Thanushree</strong>, a third-year B.Tech student specialising in Artificial Intelligence & Machine Learning at a leading engineering college in Chennai, Tamil Nadu.</p>
            <p>Just as galaxies are born from clouds of gas pulled together by gravity, I believe <strong style={{ color: 'var(--text-primary)' }}>intelligence emerges from data</strong>, architecture, and the right questions. I build systems that see, understand language, and reason.</p>
            <p>Beyond academics, I freelance on AI/ML projects, read ML research papers obsessively, and contribute to open-source datasets. I'm actively looking for <strong style={{ color: 'var(--text-accent)' }}>internship opportunities</strong> and exciting <strong style={{ color: '#00ff88' }}>freelance projects</strong>.</p>
          </motion.div>

          <motion.div custom={2} variants={fade} initial="hidden" animate="visible" className="flex items-center gap-2 mb-8 text-sm" style={{ color: 'var(--text-secondary)', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            <MapPin size={14} style={{ color: 'var(--text-accent)' }} />
            Chennai, Tamil Nadu · 13.08°N, 80.27°E
          </motion.div>

          {/* Freelancing callout */}
          <motion.div custom={3} variants={fade} initial="hidden" animate="visible"
            className="glass-card holo-card rounded-xl p-5 mb-8 border-l-2"
            style={{ borderLeftColor: '#00ff88' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.14em', color: '#00ff88' }}>AVAILABLE FOR FREELANCE</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Open to freelance projects in <span style={{ color: 'var(--text-primary)' }}>ML model development</span>, <span style={{ color: 'var(--text-primary)' }}>data pipelines</span>, <span style={{ color: 'var(--text-primary)' }}>NLP solutions</span>, and <span style={{ color: 'var(--text-primary)' }}>computer vision systems</span>.
            </p>
          </motion.div>

          <motion.div custom={4} variants={fade} initial="hidden" animate="visible" className="flex gap-3">
            <a
              href="/resume.pdf" download="Thanushree_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border text-sm resume-btn"
              style={{ borderColor: 'var(--text-accent)', color: 'var(--text-accent)', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.12em', position: 'relative', zIndex: 1 }}
            >
              <Download size={13} /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Photo frame */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-rotate-slow" style={{ border: '1px dashed rgba(0,212,255,0.25)', transform: 'scale(1.15)' }} />
            <div className="absolute inset-0 rounded-full animate-rotate-slow" style={{ border: '1px dashed rgba(155,45,255,0.2)', transform: 'scale(1.28)', animationDirection: 'reverse', animationDuration: '20s' }} />

            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 scan-effect"
              style={{ borderColor: 'rgba(0,212,255,0.4)', boxShadow: '0 0 40px rgba(0,212,255,0.25), 0 0 80px rgba(155,45,255,0.15)' }}
            >
              {/* Replace this div with an <img src="/photo.jpg" ... /> */}
              <div className="w-full h-full flex flex-col items-center justify-center"
                style={{ background: 'radial-gradient(circle at 40% 35%, rgba(0,212,255,0.15) 0%, rgba(155,45,255,0.1) 50%, rgba(8,5,26,0.95) 100%)' }}
              >
                <div className="text-6xl mb-2">👤</div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  ADD YOUR PHOTO<br />AS /public/photo.jpg
                </p>
              </div>
            </div>

            {/* Corner decorations */}
            {[['top-0 left-4', '6px 0 0 6px'], ['top-0 right-4', '6px 6px 0 0'], ['bottom-0 left-4', '0 0 6px 6px'], ['bottom-0 right-4', '0 6px 6px 0']].map(([pos, rad], i) => (
              <div key={i} className={`absolute ${pos} w-5 h-5`}
                style={{ border: '2px solid rgba(0,212,255,0.6)', borderRadius: rad, zIndex: 2 }} />
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {[['15+', 'Projects Built'], ['8.9', 'CGPA'], ['3rd', 'Year'], ['∞', 'Curiosity']].map(([n, l]) => (
              <div key={l} className="glass-card holo-card rounded-xl p-4 text-center">
                <p className="font-orbitron font-bold text-2xl gradient-text">{n}</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <div className="section-label mb-8">Academic Trajectory</div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px timeline-line" />
          <div className="space-y-8 pl-14">
            {timeline.map((item, i) => (
              <motion.div key={i} custom={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="glass-card holo-card rounded-xl p-6 relative">
                  <div className="absolute -left-[2.875rem] top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center"
                    style={{ background: 'var(--bg-secondary)', borderColor: item.color, boxShadow: `0 0 12px ${item.color}50` }}>
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.14em', color: item.color, marginBottom: '0.5rem' }}>{item.year}</div>
                  <h3 className="font-semibold text-base mb-0.5" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '1.05rem' }}>{item.title}</h3>
                  <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)', fontFamily: "'Space Mono', monospace", fontSize: '0.62rem' }}>{item.sub}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <div className="mt-24">
        <div className="section-label mb-8">What Fascinates Me</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {interests.map((item, i) => (
            <motion.div key={i} custom={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-card holo-card rounded-xl p-4 text-center transition-all cursor-hover"
            >
              <span className="text-3xl block mb-2">{item.icon}</span>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{item.name}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
