import { createContext, useContext, useState, useRef, useEffect } from 'react'

const MusicContext = createContext()

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.35)
  const [minimized, setMinimized] = useState(false)
  const howlRef = useRef(null)
  const startedRef = useRef(false)

  const tryPlay = () => {
    if (startedRef.current || !howlRef.current) return
    howlRef.current.play()
  }

  useEffect(() => {
    import('howler').then(({ Howl }) => {
      howlRef.current = new Howl({
        src: ['/interstellar.mp3'],
        loop: true,
        volume: 0.35,
        html5: true,
        onplay: () => { setIsPlaying(true); startedRef.current = true },
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onloaderror: () => console.warn('Music file not found. Add interstellar.mp3 to /public folder.'),
        onload: () => {
          // Try autoplay immediately on load
          const playPromise = howlRef.current.play()
          // Howler returns the sound id (number), not a promise
          // If autoplay is blocked, browser will prevent it silently
          // So we also set up a fallback on first user interaction
        },
      })
    })

    // Fallback: start on first user interaction anywhere on the page
    const onFirstInteraction = () => {
      if (!startedRef.current && howlRef.current) {
        howlRef.current.play()
      }
      // Remove after first interaction regardless
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('keydown', onFirstInteraction)
      window.removeEventListener('touchstart', onFirstInteraction)
    }

    window.addEventListener('click', onFirstInteraction)
    window.addEventListener('keydown', onFirstInteraction)
    window.addEventListener('touchstart', onFirstInteraction)

    return () => {
      howlRef.current?.unload()
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('keydown', onFirstInteraction)
      window.removeEventListener('touchstart', onFirstInteraction)
    }
  }, [])

  const togglePlay = () => {
    if (!howlRef.current) return
    if (isPlaying) {
      howlRef.current.pause()
    } else {
      howlRef.current.play()
    }
  }

  const setVolume = (v) => {
    setVolumeState(v)
    howlRef.current?.volume(v)
  }

  return (
    <MusicContext.Provider value={{ isPlaying, volume, togglePlay, setVolume, minimized, setMinimized }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => useContext(MusicContext)
