import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Download, CheckCircle, MapPin, Clock } from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7 } }),
}

const socials = [
  { Icon: Mail, label: 'Email', value: 'thanushree@email.com', href: 'mailto:thanushree@email.com', color: '#00d4ff' },
  { Icon: Github, label: 'GitHub', value: 'github.com/thanushree', href: 'https://github.com/thanushree', color: '#9b2dff' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/thanushree', href: 'https://linkedin.com/in/thanushree', color: '#00d4ff' },
]

const topics = ['Internship Opportunity', 'Freelance Project', 'Research Collaboration', 'General Enquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', org: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '0.95rem',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
  }
  const labelStyle = {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    display: 'block',
    marginBottom: '0.4rem',
  }

  return (
    <div className="page-enter max-w-7xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="section-label mb-4">Contact</div>
        <h1 className="font-orbitron font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', color: 'var(--text-primary)' }}>
          {"Let's build something "}<span className="gradient-text">stellar</span>
        </h1>
        <p className="mb-16 max-w-xl text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          Open to internships, freelance projects, and research collaborations. I reply within 24 hours.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.div custom={0} variants={fade} initial="hidden" animate="visible"
            className="glass-card holo-card rounded-xl p-6 mb-8 border-l-2" style={{ borderLeftColor: '#00ff88' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.14em', color: '#00ff88' }}>CURRENTLY AVAILABLE</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Open to <span style={{ color: 'var(--text-primary)' }}>internships</span> (Summer 2025+) and <span style={{ color: 'var(--text-primary)' }}>freelance AI/ML projects</span>. Remote, hybrid, or Chennai-based roles.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'var(--text-secondary)' }}>
                <MapPin size={11} style={{ color: 'var(--text-accent)' }} /> Chennai, Tamil Nadu
              </div>
              <div className="flex items-center gap-1.5" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'var(--text-secondary)' }}>
                <Clock size={11} style={{ color: 'var(--text-accent)' }} /> IST (UTC+5:30)
              </div>
            </div>
          </motion.div>

          <motion.div custom={1} variants={fade} initial="hidden" animate="visible" className="space-y-3 mb-8">
            {socials.map(({ Icon, label, value, href, color }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="glass-card holo-card rounded-xl p-4 flex items-center gap-4"
                style={{ textDecoration: 'none', display: 'flex', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '50'; e.currentTarget.style.transform = 'translateX(6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border"
                  style={{ borderColor: color + '30', background: color + '10', flexShrink: 0 }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{label.toUpperCase()}</p>
                  <p style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}>{value}</p>
                </div>
                <span className="ml-auto" style={{ color: 'var(--text-secondary)' }}>{"→"}</span>
              </a>
            ))}
          </motion.div>

          <motion.div custom={2} variants={fade} initial="hidden" animate="visible">
            <a href="/resume.pdf" download="Thanushree_Resume.pdf"
              className="glass-card holo-card rounded-xl p-5 flex items-center gap-4"
              style={{ textDecoration: 'none', display: 'flex', border: '2px dashed rgba(155,45,255,0.4)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#9b2dff'; e.currentTarget.style.background = 'rgba(155,45,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(155,45,255,0.4)'; e.currentTarget.style.background = '' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(155,45,255,0.15)', border: '1px solid rgba(155,45,255,0.35)', flexShrink: 0 }}>
                <Download size={20} style={{ color: '#9b2dff' }} />
              </div>
              <div>
                <p style={{ color: 'var(--text-primary)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1rem' }}>Download Resume</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#9b2dff' }}>Thanushree_Resume.pdf</p>
              </div>
              <span className="ml-auto text-xl" style={{ color: '#9b2dff' }}>{"↓"}</span>
            </a>
          </motion.div>
        </div>

        <motion.div custom={3} variants={fade} initial="hidden" animate="visible">
          {sent ? (
            <div className="glass-card holo-card rounded-xl p-12 flex flex-col items-center justify-center text-center" style={{ minHeight: '384px' }}>
              <CheckCircle size={56} style={{ color: '#00ff88', marginBottom: '1.5rem' }} />
              <h3 className="font-orbitron font-bold mb-3" style={{ color: 'var(--text-primary)', fontSize: '1.4rem' }}>Signal Received</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: '320px' }}>
                Thanks for reaching out! I will get back to you within 24 hours.
              </p>
              <button onClick={() => { setSent(false); setForm({ name:'',email:'',topic:'',org:'',message:'' }) }}
                className="px-5 py-2 rounded border transition-all"
                style={{ borderColor:'var(--text-accent)', color:'var(--text-accent)', fontFamily:"'Space Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.1em', background:'transparent', cursor:'pointer' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card holo-card rounded-xl p-8 space-y-5">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input type="text" value={form.name} required placeholder="Full name"
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor='var(--text-accent)'; e.target.style.boxShadow='0 0 0 3px rgba(0,212,255,0.1)' }}
                    onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none' }} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" value={form.email} required placeholder="you@email.com"
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor='var(--text-accent)'; e.target.style.boxShadow='0 0 0 3px rgba(0,212,255,0.1)' }}
                    onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none' }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Topic</label>
                <select value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor='var(--text-accent)'}
                  onBlur={e => e.target.style.borderColor='var(--border)'}>
                  <option value="" style={{ background: '#08051a' }}>Select a topic</option>
                  {topics.map(t => <option key={t} value={t} style={{ background: '#08051a' }}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Organisation (Optional)</label>
                <input type="text" value={form.org} placeholder="Company / College"
                  onChange={e => setForm(f => ({ ...f, org: e.target.value }))} style={inputStyle}
                  onFocus={e => e.target.style.borderColor='var(--text-accent)'}
                  onBlur={e => e.target.style.borderColor='var(--border)'} />
              </div>
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea value={form.message} required placeholder="Tell me what you have in mind..." rows={5}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={e => { e.target.style.borderColor='var(--text-accent)'; e.target.style.boxShadow='0 0 0 3px rgba(0,212,255,0.1)' }}
                  onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none' }} />
              </div>
              <button type="submit" disabled={loading}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.75rem', borderRadius: '4px',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(155,45,255,0.2))',
                  border: '1px solid rgba(0,212,255,0.5)', color: 'var(--text-accent)',
                  fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  boxShadow: '0 0 20px rgba(0,212,255,0.15)', opacity: loading ? 0.7 : 1, cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}>
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '16px', height: '16px', border: '2px solid var(--text-accent)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                    Transmitting...
                  </span>
                ) : (
                  <><Send size={14} /> Transmit Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
