import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-20 border-t py-10 px-6"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-card)', backdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-orbitron font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
            THANU<span style={{ color: 'var(--text-accent)' }}>.</span>SYS
          </p>
          <p className="text-xs mt-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            B.Tech AI &amp; ML · Chennai, Tamil Nadu
          </p>
        </div>

        <div className="flex gap-4">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-accent)'; e.currentTarget.style.color = 'var(--text-accent)'; e.currentTarget.style.boxShadow = '0 0 12px var(--glow)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className="text-xs flex items-center gap-1" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
          Crafted with <Heart size={10} style={{ color: 'var(--text-accent)' }} /> from the Milky Way · 2025
        </p>
      </div>
    </footer>
  )
}
