import Navbar from './Navbar'
import MusicPlayer from './MusicPlayer'
import Starfield from './Starfield'
import Cursor from './Cursor'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen noise">
      <Starfield />
      <Cursor />
      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  )
}
