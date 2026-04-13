import { createContext, useContext, useState, useRef, useEffect } from 'react'

const MusicContext = createContext()

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.35)
  const [minimized, setMinimized] = useState(false)
  const howlRef = useRef(null)

  useEffect(() => {
    // Dynamically import Howler to avoid SSR issues
    import('howler').then(({ Howl }) => {
      howlRef.current = new Howl({
        src: ['/interstellar.mp3'],
        loop: true,
        volume: 0.35,
        html5: true,
        onloaderror: () => console.warn('Music file not found. Add interstellar.mp3 to /public folder.'),
      })
    })
    return () => { howlRef.current?.unload() }
  }, [])

  const togglePlay = () => {
    if (!howlRef.current) return
    if (isPlaying) {
      howlRef.current.pause()
      setIsPlaying(false)
    } else {
      howlRef.current.play()
      setIsPlaying(true)
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
