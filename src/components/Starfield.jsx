import { useEffect, useRef } from 'react'
import { useTheme, THEMES } from '../context/ThemeContext'

export default function Starfield() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, stars = [], nebulas = [], shootingStars = [], constellationNodes = []
    let animId, scrollY = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      // Stars in 3 layers (depth)
      stars = Array.from({ length: 380 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.8 + 0.1,
        alpha: Math.random() * 0.9 + 0.1,
        speed: Math.random() * 0.3 + 0.02,
        tw: Math.random() * Math.PI * 2,
        tws: Math.random() * 0.015 + 0.003,
        layer: Math.floor(Math.random() * 3),
        color: ['#eef0ff', '#c0d8ff', '#ffd9aa', '#ff9999'][Math.floor(Math.random() * 4)],
      }))

      // Nebula clouds
      const nebulaColors = [
        'rgba(155,45,255,', 'rgba(0,212,255,', 'rgba(255,45,120,',
        'rgba(0,255,136,', 'rgba(255,140,0,',
      ]
      nebulas = Array.from({ length: 6 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 320 + 100,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        alpha: Math.random() * 0.05 + 0.015,
        ang: Math.random() * Math.PI,
        scaleY: Math.random() * 0.5 + 0.3,
      }))

      // Constellation points
      constellationNodes = Array.from({ length: 12 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.15,
      }))

      // Shooting star pool
      shootingStars = []
    }

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * W * 0.6 + W * 0.2,
        y: Math.random() * H * 0.4,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 10 + 6,
        alpha: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.5 ? '#00d4ff' : '#ffffff',
      })
    }

    let shootingTimer = 0
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H)

      // Nebulas
      nebulas.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r)
        g.addColorStop(0, n.color + n.alpha * 2.5 + ')')
        g.addColorStop(1, n.color + '0)')
        ctx.save()
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.ellipse(n.x, n.y, n.r, n.r * n.scaleY, n.ang, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Constellation lines
      ctx.strokeStyle = 'rgba(0,212,255,0.04)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < constellationNodes.length - 1; i += 2) {
        ctx.beginPath()
        ctx.moveTo(constellationNodes[i].x, constellationNodes[i].y)
        ctx.lineTo(constellationNodes[i + 1].x, constellationNodes[i + 1].y)
        ctx.stroke()
      }
      constellationNodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${n.alpha})`
        ctx.fill()
      })

      // Stars
      stars.forEach(s => {
        s.tw += s.tws
        const a = s.alpha * (0.5 + 0.5 * Math.sin(s.tw))
        const parallax = scrollY * s.speed * 0.06
        let y = (s.y - parallax) % H
        if (y < 0) y += H

        ctx.beginPath()
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color.replace(')', `,${a})`).replace('#', 'rgba(').replace('eef0ff', '238,240,255').replace('c0d8ff', '192,216,255').replace('ffd9aa', '255,217,170').replace('ff9999', '255,153,153')
        // Simpler approach:
        ctx.globalAlpha = a
        ctx.fillStyle = s.color
        ctx.fill()
        ctx.globalAlpha = 1

        // Glow for bright stars
        if (s.r > 1.3) {
          const gg = ctx.createRadialGradient(s.x, y, 0, s.x, y, s.r * 4)
          gg.addColorStop(0, `rgba(238,240,255,${a * 0.3})`)
          gg.addColorStop(1, 'rgba(238,240,255,0)')
          ctx.fillStyle = gg
          ctx.beginPath()
          ctx.arc(s.x, y, s.r * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Shooting stars
      shootingTimer++
      if (shootingTimer > 160 + Math.random() * 200) {
        spawnShootingStar(); shootingTimer = 0
      }
      shootingStars = shootingStars.filter(s => s.alpha > 0.01)
      shootingStars.forEach(s => {
        ctx.save()
        ctx.globalAlpha = s.alpha
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len)
        grad.addColorStop(0, s.color)
        grad.addColorStop(1, 'transparent')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len)
        ctx.stroke()
        ctx.restore()
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.alpha -= 0.018
      })

      animId = requestAnimationFrame(draw)
    }

    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize)
    resize()
    requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700"
      style={{ opacity: theme === THEMES.READING ? 0.12 : 1 }}
    />
  )
}
