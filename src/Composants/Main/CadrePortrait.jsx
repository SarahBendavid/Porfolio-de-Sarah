const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  @keyframes flickerP {
    0%, 97%, 100% { opacity: 1; }
    98% { opacity: 0.4; }
    99% { opacity: 0.9; }
  }
  @keyframes scanP {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(600%); }
  }
  @keyframes pulseGlowP {
    0%, 100% { filter: drop-shadow(0 0 3px #a855f7) drop-shadow(0 0 7px #7c3aed); }
    50%       { filter: drop-shadow(0 0 6px #c084fc) drop-shadow(0 0 14px #a855f7); }
  }
  @keyframes twinklePA {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }
  @keyframes twinklePB {
    0%, 100% { opacity: 0.4; }
    60%       { opacity: 1; }
  }
  @keyframes twinklePC {
    0%   { opacity: 0.8; }
    35%  { opacity: 0.3; }
    70%  { opacity: 1; }
    100% { opacity: 0.6; }
  }
  @keyframes twinklePD {
    0%, 100% { opacity: 0.6; }
    45%       { opacity: 1; }
    80%       { opacity: 0.2; }
  }
  @keyframes blinkDotP {
    0%, 49%, 100% { opacity: 1; }
    50%, 99%       { opacity: 0; }
  }

  .frame-portrait     { filter: drop-shadow(0 0 8px #9333ea) drop-shadow(0 0 20px #6d28d9); }
  .corner-p1          { animation: pulseGlowP 2s ease-in-out infinite; }
  .corner-p2          { animation: pulseGlowP 2s ease-in-out infinite 0.5s; }
  .corner-p3          { animation: pulseGlowP 2s ease-in-out infinite 1s; }
  .corner-p4          { animation: pulseGlowP 2s ease-in-out infinite 1.5s; }
  .stars-pa           { animation: twinklePA 4.8s ease-in-out infinite; }
  .stars-pb           { animation: twinklePB 3.9s ease-in-out infinite; }
  .stars-pc           { animation: twinklePC 5.5s ease-in-out infinite; }
  .stars-pd           { animation: twinklePD 7s ease-in-out infinite; }
  .scan-p             { animation: scanP 4s linear infinite; }
  .dot-p1             { animation: blinkDotP 1.5s infinite; }
  .dot-p2             { animation: blinkDotP 1.5s infinite 0.5s; }
  .dot-p3             { animation: blinkDotP 1.5s infinite 1s; }
`;

export default function HologramPortrait() {
  return (
    <>
      <style>{styles}</style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="frame-portrait"
      >
        <defs>
          <linearGradient id="pG1a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c084fc" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="pGScan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a855f7" stopOpacity="0"/>
            <stop offset="25%"  stopColor="#c084fc" stopOpacity="0.7"/>
            <stop offset="50%"  stopColor="#e879f9" stopOpacity="1"/>
            <stop offset="75%"  stopColor="#c084fc" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="pGNeb1" cx="50%" cy="50%" r="60%">
            <stop offset="0%"   stopColor="#3b0764" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="pGNeb2" cx="20%" cy="70%" r="40%">
            <stop offset="0%"   stopColor="#4c1d95" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="pGNeb3" cx="80%" cy="30%" r="35%">
            <stop offset="0%"   stopColor="#6d28d9" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <clipPath id="pClip1">
            <rect x="1" y="1" width="198" height="298"/>
          </clipPath>
        </defs>

        {/* Fond */}
        <rect x="1" y="1" width="198" height="298" fill="#120020" fillOpacity="0.85" rx="18"/>
        <rect x="1" y="1" width="198" height="298" fill="url(#pGNeb1)" clipPath="url(#pClip1)"/>
        <rect x="1" y="1" width="198" height="298" fill="url(#pGNeb2)" clipPath="url(#pClip1)"/>
        <rect x="1" y="1" width="198" height="298" fill="url(#pGNeb3)" clipPath="url(#pClip1)"/>


        {/* Bordure fine — 4 côtés */}
        <line x1="42"  y1="1"   x2="158" y2="1"   stroke="url(#pG1a)" strokeWidth="1.5"/>
        <line x1="199" y1="42"  x2="199" y2="258" stroke="url(#pG1a)" strokeWidth="1.5"/>
        <line x1="158" y1="299" x2="42"  y2="299" stroke="url(#pG1a)" strokeWidth="1.5"/>
        <line x1="1"   y1="258" x2="1"   y2="42"  stroke="url(#pG1a)" strokeWidth="1.5"/>

        {/* Coin TL */}
        <path d="M 1,42 L 1,19 A 18,18 0 0 1 19,1 L 42,1"
              fill="none" stroke="#c084fc" strokeWidth="2" strokeOpacity="0.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-p1"/>
        <path d="M 1,42 L 1,19 A 18,18 0 0 1 19,1 L 42,1"
              fill="none" stroke="#e9d5ff" strokeWidth="0.5"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25"/>

        {/* Coin TR */}
        <path d="M 158,1 L 181,1 A 18,18 0 0 1 199,19 L 199,42"
              fill="none" stroke="#c084fc" strokeWidth="2" strokeOpacity="0.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-p2"/>
        <path d="M 158,1 L 181,1 A 18,18 0 0 1 199,19 L 199,42"
              fill="none" stroke="#e9d5ff" strokeWidth="0.5"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25"/>

        {/* Coin BR */}
        <path d="M 199,258 L 199,281 A 18,18 0 0 1 181,299 L 158,299"
              fill="none" stroke="#c084fc" strokeWidth="2" strokeOpacity="0.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-p3"/>
        <path d="M 199,258 L 199,281 A 18,18 0 0 1 181,299 L 158,299"
              fill="none" stroke="#e9d5ff" strokeWidth="0.5"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25"/>

        {/* Coin BL */}
        <path d="M 42,299 L 19,299 A 18,18 0 0 1 1,281 L 1,258"
              fill="none" stroke="#c084fc" strokeWidth="2" strokeOpacity="0.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-p4"/>
        <path d="M 42,299 L 19,299 A 18,18 0 0 1 1,281 L 1,258"
              fill="none" stroke="#e9d5ff" strokeWidth="0.5"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25"/>

        {/* 3 Dots */}
        <circle cx="12" cy="12" r="2.5" fill="#c084fc" className="dot-p1"/>
        <circle cx="22" cy="12" r="2.5" fill="#7c3aed" className="dot-p2"/>
        <circle cx="32" cy="12" r="2.5" fill="#4c1d95" className="dot-p3"/>

        {/* Textes */}
        <text x="12" y="289"
              fontFamily="'Orbitron',monospace" fontSize="4"
              fill="#c084fc" fillOpacity="0.4" letterSpacing="1.5">
          SYS::ACTIVE
        </text>
        <text x="130" y="289"
              fontFamily="'Orbitron',monospace" fontSize="4"
              fill="#a855f7" fillOpacity="0.3" letterSpacing="0.8">
          BUILD::2025
        </text>
      </svg>
    </>
  );
}
