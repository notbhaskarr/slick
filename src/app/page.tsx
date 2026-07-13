'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient background blobs */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(139,123,239,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(224,200,122,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '860px' }}>

        {/* Wordmark */}
        <header style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            est. 2025
          </p>
          <h1 style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            slick<span style={{ color: 'var(--text-muted)' }}>.wtf</span>
          </h1>
          <p style={{
            marginTop: '20px',
            fontFamily: 'var(--sans)',
            fontSize: '15px',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            letterSpacing: '0.01em',
          }}>
            A small suite of tools for people who move with intention.
          </p>
        </header>

        {/* App Cards — CSS hover via stylesheet class */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
        }}>

          {/* GETitDONE Card */}
          <a href="/getitdone" className="app-card app-card--getitdone" style={{ textDecoration: 'none' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent-getitdone), transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div className="app-card__icon app-card__icon--getitdone">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(224,200,122,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle: number) => (
                    <g key={angle} transform={`rotate(${angle} 12 12)`}>
                      <path d="M12 8 C14 5 15 3 13.5 1.5 M12.5 5 C15.5 5 16.5 3 17.5 1.5 M12 8 C10 6 9.5 7 7.5 4.5" />
                    </g>
                  ))}
                </svg>
              </div>
              <span className="app-card__path app-card__path--getitdone">/getitdone →</span>
            </div>
            <h2 className="app-card__title">GETitDONE</h2>
            <p className="app-card__desc">Task management with peer accountability. Delegate, track, and appreciate the people who get things done with you.</p>
            <div className="app-card__tags">
              {['Tasks', 'Peers', 'Whuffies', 'Realtime'].map(tag => (
                <span key={tag} className="app-card__tag">{tag}</span>
              ))}
            </div>
          </a>

          {/* TRACE Card */}
          <a href="/trace" className="app-card app-card--trace" style={{ textDecoration: 'none' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent-trace), transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div className="app-card__icon app-card__icon--trace">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(139,123,239,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16L12 7L18 16" />
                  <circle cx="6" cy="16" r="2" fill="rgba(139,123,239,0.9)" />
                  <circle cx="12" cy="7" r="2" fill="rgba(139,123,239,0.9)" />
                  <circle cx="18" cy="16" r="2" fill="rgba(139,123,239,0.9)" />
                </svg>
              </div>
              <span className="app-card__path app-card__path--trace">/trace →</span>
            </div>
            <h2 className="app-card__title">TRACE</h2>
            <p className="app-card__desc">A brutalist AI journal that remembers everything you think. Leave a trace, ask Doobie anything about your past.</p>
            <div className="app-card__tags">
              {['Journal', 'AI Chat', 'Voice', 'Timeline'].map(tag => (
                <span key={tag} className="app-card__tag">{tag}</span>
              ))}
            </div>
          </a>

        </div>

        {/* Footer */}
        <footer style={{ marginTop: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            slick .
          </p>
        </footer>

      </div>
    </main>
  );
}
