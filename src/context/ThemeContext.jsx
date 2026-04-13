import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const THEMES = { DARK: 'dark', LIGHT: 'light', READING: 'reading' }

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.DARK)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-light', 'theme-reading')
    if (theme === THEMES.LIGHT) root.classList.add('theme-light')
    else if (theme === THEMES.READING) root.classList.add('theme-reading')
  }, [theme])

  const cycleTheme = () => {
    setTheme(prev =>
      prev === THEMES.DARK ? THEMES.LIGHT
      : prev === THEMES.LIGHT ? THEMES.READING
      : THEMES.DARK
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
