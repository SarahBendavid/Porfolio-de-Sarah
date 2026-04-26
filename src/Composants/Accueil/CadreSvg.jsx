const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  @keyframes pulseGlowP {
    0%, 100% { filter: drop-shadow(0 0 3px #a855f7) drop-shadow(0 0 7px #7c3aed); }
    50%       { filter: drop-shadow(0 0 6px #c084fc) drop-shadow(0 0 14px #a855f7); }
  }
  @keyframes pulseOpacity {
    0%, 100% { opacity: 0.75; }
    50%       { opacity: 1; }
  }
  @keyframes blinkDotP {
    0%, 49%, 100% { opacity: 1; }
    50%, 99%       { opacity: 0; }
  }
  @keyframes headerGlow {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 0.9; }
  }
  .frame-portrait { filter: drop-shadow(0 0 8px #9333ea) drop-shadow(0 0 20px #6d28d9); }
  .corner-p1      { animation: pulseGlowP 2s ease-in-out infinite; will-change: filter; }
  .corner-p2      { animation: pulseGlowP 2s ease-in-out infinite 0.5s; will-change: filter; }
  .corner-p3      { animation: pulseGlowP 2s ease-in-out infinite 1s; will-change: filter; }
  .corner-p4      { animation: pulseGlowP 2s ease-in-out infinite 1.5s; will-change: filter; }
  .dot-p1         { animation: blinkDotP 1.5s infinite; will-change: opacity; }
  .dot-p2         { animation: blinkDotP 1.5s infinite 0.5s; will-change: opacity; }
  .dot-p3         { animation: blinkDotP 1.5s infinite 1s; will-change: opacity; }
  .header-glow    { animation: headerGlow 3s ease-in-out infinite; will-change: opacity; }

  @media (max-width: 768px) {
    .frame-portrait { filter: drop-shadow(0 0 6px #9333ea); }
    .corner-p1      { animation: pulseOpacity 2s ease-in-out infinite; filter: drop-shadow(0 0 3px #a855f7); will-change: opacity; }
    .corner-p2      { animation: pulseOpacity 2s ease-in-out infinite 0.5s; filter: drop-shadow(0 0 3px #a855f7); will-change: opacity; }
    .corner-p3      { animation: pulseOpacity 2s ease-in-out infinite 1s; filter: drop-shadow(0 0 3px #a855f7); will-change: opacity; }
    .corner-p4      { animation: pulseOpacity 2s ease-in-out infinite 1.5s; filter: drop-shadow(0 0 3px #a855f7); will-change: opacity; }
  }

  .frame-svg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

// H_HEADER = hauteur de la barre en unités viewBox
const H_HEADER = 28;
const VB_W = 200;
const VB_H = 300;

export default function HologramPortrait() {
  const totalH = VB_H + H_HEADER;

  return (
    <>
      <style>{styles}</style>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VB_W} ${totalH}`}
        preserveAspectRatio="none"
        className="frame-portrait frame-svg-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pG1a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c084fc" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="pGHeader" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#1a0030" stopOpacity="0.95"/>
            <stop offset="50%"  stopColor="#2d0050" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#1a0030" stopOpacity="0.95"/>
          </linearGradient>
          <filter id="glowFilter" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feFlood floodColor="#a855f7" floodOpacity="0.55" result="color"/>
            <feComposite in="color" in2="blur" operator="in" result="glow"/>
            <feComposite in="glow" in2="SourceGraphic" operator="out" result="outerGlow"/>
            <feMerge>
              <feMergeNode in="outerGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <clipPath id="headerClip">
            <rect x="0" y="0" width={VB_W} height={H_HEADER} />
          </clipPath>
        </defs>

        {/* ── EN-TÊTE ── */}
        {/* Fond de la barre — clipPath coupe le fond exactement à H_HEADER */}
        <rect x="1" y="1" width={VB_W - 2} height={H_HEADER + 6}
              fill="url(#pGHeader)" rx="7" clipPath="url(#headerClip)"/>
        {/* Ligne de séparation basse de l'en-tête */}
        <line x1="1" y1={H_HEADER} x2={VB_W - 1} y2={H_HEADER}
              stroke="#c084fc" strokeWidth="0.8" strokeOpacity="0.4" className="header-glow"/>
        {/* 3 Dots dans l'en-tête */}
        <circle cx="14" cy={H_HEADER / 2} r="3" fill="#7c3aed" className="dot-p1"/>
        <circle cx="24" cy={H_HEADER / 2} r="3" fill="#f7a8e0" className="dot-p2"/>
        <circle cx="34" cy={H_HEADER / 2} r="3" fill="#c084fc" className="dot-p3"/>

        {/* ── CADRE PRINCIPAL (décalé de H_HEADER) ── */}

        {/* Bordures latérales du header (démarrent après l'arc rx=7) */}
        <line x1="1"       y1="8" x2="1"       y2={H_HEADER + 1} stroke="#c084fc" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1={VB_W-1}  y1="8" x2={VB_W-1}  y2={H_HEADER + 1} stroke="#c084fc" strokeWidth="0.8" strokeOpacity="0.5"/>

        {/* Contour uniforme — rect unique */}
        {/* Halo glow derrière le contour */}
        <rect x="1" y="1" width={VB_W - 2} height={totalH - 2}
              fill="none" stroke="#c084fc" strokeWidth="2" strokeOpacity="0.5"
              rx="7" vectorEffect="non-scaling-stroke" filter="url(#glowFilter)"/>
        {/* Contour net par-dessus */}
        <rect x="1" y="1" width={VB_W - 2} height={totalH - 2}
              fill="none" stroke="#c084fc" strokeWidth="1.2" strokeOpacity="0.5"
              rx="7" vectorEffect="non-scaling-stroke"/>

        {/* Bordure haute du cadre (entre en-tête et image) */}
        <line x1="1" y1={H_HEADER + 1} x2={VB_W - 1} y2={H_HEADER + 1}
              stroke="#c084fc" strokeWidth="1.2" strokeOpacity="0.5"/>

      </svg>
    </>
  );
}
