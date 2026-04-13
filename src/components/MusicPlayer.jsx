import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Music, ChevronDown, ChevronUp } from 'lucide-react'
import { useMusic } from '../context/MusicContext'

const BARS = 14

export default function MusicPlayer() {
  const { isPlaying, volume, togglePlay, setVolume, minimized, setMinimized } = useMusic()
  const [muted, setMuted] = useState(false)
  const [prevVol, setPrevVol] = useState(0.35)

  const handleMute = () => {
    if (muted) { setVolume(prevVol); setMuted(false) }
    else { setPrevVol(volume); setVolume(0); setMuted(true) }
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-500"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center justify-center w-12 h-12 rounded-full border transition-all hover:scale-110"
          style={{
            background: 'var(--bg-card)',
            borderColor: isPlaying ? 'var(--text-accent)' : 'var(--border)',
            backdropFilter: 'blur(20px)',
            boxShadow: isPlaying ? '0 0 20px var(--glow)' : 'none',
            color: 'var(--text-accent)',
          }}
          title="Open music player"
        >
          <Music size={18} className={isPlaying ? 'animate-pulse' : ''} />
        </button>
      ) : (
        <div
          className="glass-card rounded-2xl px-4 py-3 w-72"
          style={{ boxShadow: isPlaying ? '0 0 30px var(--glow), 0 8px 32px rgba(0,0,0,0.4)' : undefined }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Music size={12} style={{ color: 'var(--text-accent)' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-accent)', fontSize: '0.6rem' }}>
                Now Playing
              </span>
            </div>
            <button onClick={() => setMinimized(true)} style={{ color: 'var(--text-secondary)' }}>
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Song info */}
          <div className="mb-3">
            <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)', fontSize: '0.78rem' }}>
              Interstellar — Main Theme
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
              Hans Zimmer · 2014
            </p>
          </div>

          {/* Waveform */}
          <div className="flex items-end gap-0.5 h-8 mb-3 justify-center">
            {Array.from({ length: BARS }).map((_, i) => (
              <div
                key={i}
                className="waveform-bar flex-1 rounded-sm"
                style={{
                  minHeight: '4px',
                  maxHeight: '28px',
                  height: `${Math.floor(Math.random() * 60 + 20)}%`,
                  opacity: isPlaying ? 1 : 0.25,
                  animationDelay: `${i * 0.07}s`,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110"
              style={{
                borderColor: 'var(--text-accent)',
                color: 'var(--text-accent)',
                background: isPlaying ? 'rgba(0,212,255,0.15)' : 'transparent',
                boxShadow: isPlaying ? '0 0 15px var(--glow)' : 'none',
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <button onClick={handleMute} style={{ color: 'var(--text-secondary)' }}>
              {muted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <input
              type="range" min="0" max="1" step="0.01"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-0.5 rounded cursor-pointer accent-current"
              style={{ accentColor: 'var(--text-accent)' }}
            />
          </div>

          <p className="text-center mt-2" style={{ fontSize: '0.5rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
            ADD interstellar.mp3 TO /public FOLDER
          </p>
        </div>
      )}
    </div>
  )
}
