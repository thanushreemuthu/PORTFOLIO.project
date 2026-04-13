import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Code2, Brain, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const ROLES = [
  'AI & ML Engineer',
  'Deep Learning Enthusiast',
  'Data Scientist',
  'Open Source Contributor',
  'Freelance Developer',
]

function Typewriter() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timer
    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    } else {
      timer = setTimeout(() => {
        setText(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
      }, deleting ? 40 : 70)
    }
    return () => clearTimeout(timer)
  }, [text, deleting, roleIdx])

  return (
    <span className="font-mono text-sm sm:text-base" style={{ color: 'var(--text-accent)', fontFamily: "'Space Mono', monospace", letterSpacing: '0.06em' }}>
      {text}
      <span className="animate-pulse">_</span>
    </span>
  )
}

const floatV = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } }) }

export default function Home() {
  return (
    <div className="page-enter min-h-screen relative overflow-hidden">
      {/* Nebula accent bg */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(155,45,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 70%, rgba(0,212,255,0.06) 0%, transparent 60%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* Left — text content */}
          <div>
            {/* Availability badge */}
            <motion.div
              custom={0} variants={floatV} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border text-xs"
              style={{ borderColor: 'rgba(0,255,136,0.35)', background: 'rgba(0,255,136,0.06)', color: '#00ff88', fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              Available for Freelancing &amp; Internships
            </motion.div>

            <motion.div custom={1} variants={floatV} initial="hidden" animate="visible">
              <div className="section-label mb-4">B.Tech AI &amp; ML · Batch 2022–2026</div>
            </motion.div>

            <motion.h1
              custom={2} variants={floatV} initial="hidden" animate="visible"
              className="font-orbitron font-black leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 7rem)' }}
            >
              <span style={{ color: 'var(--text-primary)' }}>THANU</span>
              <br />
              <span className="gradient-text glow-text">SHREE</span>
            </motion.h1>

            <motion.div custom={3} variants={floatV} initial="hidden" animate="visible" className="mb-8 h-8">
              <Typewriter />
            </motion.div>

            <motion.p
              custom={4} variants={floatV} initial="hidden" animate="visible"
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)', fontFamily: 'Rajdhani, sans-serif', fontSize: '1.05rem', fontWeight: 400 }}
            >
              Engineering intelligent systems at the frontier of <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>machine learning</span> and <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>data science</span> — from Chennai to the cosmos.
            </motion.p>

            <motion.div custom={5} variants={floatV} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-mono border transition-all hover:scale-105"
                style={{ borderColor: 'var(--text-accent)', color: 'var(--text-accent)', background: 'rgba(0,212,255,0.08)', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', boxShadow: '0 0 20px rgba(0,212,255,0.15)' }}
              >
                View Projects <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-mono border transition-all hover:scale-105"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'transparent', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em' }}
              >
                Hire Me
              </Link>
              <a
                href="/resume.pdf"
                download="Thanushree_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-mono border transition-all hover:scale-105 resume-btn"
                style={{ borderColor: 'rgba(155,45,255,0.6)', color: '#9b2dff', background: 'rgba(155,45,255,0.08)', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', position: 'relative', zIndex: 1 }}
              >
                Resume ↓
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              custom={6} variants={floatV} initial="hidden" animate="visible"
              className="flex gap-8 mt-14 pt-8 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {[['15+', 'Projects'], ['8.9', 'CGPA'], ['3rd', 'Year'], ['∞', 'Curiosity']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-orbitron font-bold text-2xl gradient-text">{n}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>{l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Solar System deco */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
            style={{ height: '580px' }}
          >
            {/* Outer glow */}
            <div className="absolute w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(155,45,255,0.12) 0%, rgba(0,212,255,0.06) 50%, transparent 70%)' }} />

            {/* Orbit rings */}
            {[160, 220, 290, 360].map((size, i) => (
              <div key={i} className="orbit-el" style={{ width: size, height: size, animationDuration: `${20 + i * 15}s`, animationName: i % 2 === 0 ? 'rotateSlow' : undefined, borderColor: i % 2 === 0 ? 'rgba(0,212,255,0.08)' : 'rgba(155,45,255,0.06)' }} />
            ))}

            {/* Sun */}
            <div className="absolute w-20 h-20 rounded-full z-10 animate-pulse-glow"
              style={{ background: 'radial-gradient(circle, #fee440 0%, #f5a623 45%, #e8520a 75%, transparent 100%)', boxShadow: '0 0 50px rgba(255,200,0,0.8), 0 0 100px rgba(255,140,0,0.4)' }} />

            {/* Orbiting planets */}
            {[
              { size: 80, planet: 12, color: '#00d4ff', shadow: '#00d4ff', delay: 0 },
              { size: 115, planet: 9, color: '#9b2dff', shadow: '#9b2dff', delay: '5s' },
              { size: 148, planet: 14, color: '#ff2d78', shadow: '#ff2d78', delay: '2s' },
              { size: 180, planet: 7, color: '#ffd700', shadow: '#ffd700', delay: '8s' },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: p.size, height: p.size,
                  animation: `orbit ${12 + i * 8}s linear ${p.delay} infinite`,
                  transformOrigin: 'center',
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                  style={{ width: p.planet, height: p.planet, background: p.color, boxShadow: `0 0 ${p.planet * 1.5}px ${p.shadow}88` }} />
              </div>
            ))}

            {/* Corner labels */}
            {[
              { text: 'DEEP LEARNING', pos: { top: '10%', left: '-5%' }, color: '#00d4ff' },
              { text: 'COMPUTER VISION', pos: { top: '10%', right: '-5%' }, color: '#9b2dff' },
              { text: 'NLP', pos: { bottom: '10%', left: '-5%' }, color: '#ff2d78' },
              { text: 'DATA SCIENCE', pos: { bottom: '10%', right: '-5%' }, color: '#ffd700' },
            ].map((l, i) => (
              <div key={i} className="absolute text-xs font-mono" style={{ ...l.pos, color: l.color, fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.12em', opacity: 0.7 }}>
                {l.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" style={{ opacity: 0.4 }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Scroll</p>
        <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, var(--text-accent), transparent)' }} />
      </div>
    </div>
  )
}
