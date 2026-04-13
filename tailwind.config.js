/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        space: {
          black: '#03020a',
          deep: '#08051a',
          mid: '#12093a',
        },
        quantum: {
          cyan: '#00d4ff',
          'cyan-dim': '#0099bb',
          violet: '#9b2dff',
          'violet-dim': '#6b1db3',
          pink: '#ff2d78',
          gold: '#ffd700',
          green: '#00ff88',
        },
        reading: {
          bg: '#1c1510',
          surface: '#251e16',
          text: '#f0e6d0',
          accent: '#d4a56a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scan': 'scan 4s linear infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'waveform': 'waveform 1s ease-in-out infinite alternate',
        'typewriter': 'typewriter 0.05s steps(1) forwards',
        'nebula': 'nebula 8s ease-in-out infinite alternate',
        'beam': 'beam 3s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 100px rgba(0,212,255,0.2)' },
        },
        orbit: { '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' } },
        twinkle: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.2 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '-500px 0' }, '100%': { backgroundPosition: '500px 0' } },
        scan: { '0%': { top: '-10%' }, '100%': { top: '110%' } },
        rotateSlow: { to: { transform: 'rotate(360deg)' } },
        waveform: { '0%': { transform: 'scaleY(0.3)' }, '100%': { transform: 'scaleY(1)' } },
        nebula: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: 0.4 },
          '100%': { transform: 'scale(1.2) rotate(15deg)', opacity: 0.6 },
        },
        beam: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
      },
      backgroundImage: {
        'holographic': 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(155,45,255,0.1) 33%, rgba(255,45,120,0.1) 66%, rgba(0,212,255,0.1) 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at 50% 50%, rgba(155,45,255,0.15) 0%, rgba(0,212,255,0.05) 50%, transparent 70%)',
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.1)',
        'glow-violet': '0 0 20px rgba(155,45,255,0.4), 0 0 60px rgba(155,45,255,0.1)',
        'glow-pink': '0 0 20px rgba(255,45,120,0.4)',
        'glow-gold': '0 0 20px rgba(255,215,0,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
