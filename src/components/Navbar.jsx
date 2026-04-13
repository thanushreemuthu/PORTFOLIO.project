import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun, BookOpen, Menu, X, Download } from 'lucide-react'
import { useTheme, THEMES } from '../context/ThemeContext'
import clsx from 'clsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

const ThemeIcon = ({ theme }) => {
  if (theme === THEMES.DARK) return <Moon size={16} />
  if (theme === THEMES.LIGHT) return <Sun size={16} />
  return <BookOpen size={16} />
}

const themeLabel = { dark: 'Dark', light: 'Light', reading: 'Reading' }

export default function Navbar() {
  const { theme, cycleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'py-3 backdrop-blur-xl border-b'
          : 'py-5'
      )}
      style={{
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full border animate-pulse-glow"
              style={{ borderColor: 'var(--text-accent)' }} />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20" />
            <span className="absolute inset-0 flex items-center justify-center font-orbitron font-bold text-xs"
              style={{ color: 'var(--text-accent)' }}>T</span>
          </div>
          <span className="font-orbitron font-semibold text-sm tracking-widest"
            style={{ color: 'var(--text-primary)' }}>
            THANU<span style={{ color: 'var(--text-accent)' }}>.</span>SYS
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => clsx(
                  'nav-link relative px-4 py-2 text-sm font-mono tracking-widest uppercase transition-colors duration-300',
                  isActive ? 'active' : ''
                )}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                })}
              >
                {label}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px origin-left transition-transform duration-300 scale-x-0"
                  style={{ background: 'var(--text-accent)', boxShadow: '0 0 6px var(--glow)' }}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme cycler */}
          <button
            onClick={cycleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-mono transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-accent)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
            }}
            title={`Switch to ${theme === 'dark' ? 'light' : theme === 'light' ? 'reading' : 'dark'} mode`}
          >
            <ThemeIcon theme={theme} />
            <span className="hidden sm:inline" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em' }}>
              {themeLabel[theme]}
            </span>
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Thanushree_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-sm border text-xs font-mono transition-all duration-300 hover:scale-105 resume-btn"
            style={{
              borderColor: 'var(--text-accent)',
              color: 'var(--text-accent)',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Download size={12} />
            Resume
          </a>

          {/* Coordinates */}
          <div className="hidden xl:block text-right"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <div>13.08°N 80.27°E</div>
            <div style={{ color: 'var(--text-accent)' }}>Chennai · TN</div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'lg:hidden transition-all duration-400 overflow-hidden',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{ background: 'var(--bg-card)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => clsx(
                'py-2 px-3 text-sm border-l-2 transition-all duration-300',
                isActive ? 'border-l-2' : 'border-transparent'
              )}
              style={({ isActive }) => ({
                fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.14em',
                color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                borderColor: isActive ? 'var(--text-accent)' : 'transparent',
              })}
            >
              {label.toUpperCase()}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download="Thanushree_Resume.pdf"
            className="flex items-center gap-2 py-2 px-3 mt-2"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-accent)' }}
          >
            <Download size={12} /> Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
