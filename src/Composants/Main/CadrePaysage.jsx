import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  @keyframes flickerL {
    0%, 97%, 100% { opacity: 1; }
    98% { opacity: 0.4; }
    99% { opacity: 0.9; }
  }
  @keyframes scanL {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }
  @keyframes pulseGlowL {
    0%, 100% { filter: drop-shadow(0 0 6px #a855f7) drop-shadow(0 0 14px #7c3aed); }
    50%       { filter: drop-shadow(0 0 14px #c084fc) drop-shadow(0 0 30px #a855f7); }
  }
  @keyframes twinkleLA {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }
  @keyframes twinkleLB {
    0%, 100% { opacity: 0.4; }
    60%       { opacity: 1; }
  }
  @keyframes twinkleLC {
    0%   { opacity: 0.8; }
    35%  { opacity: 0.3; }
    70%  { opacity: 1; }
    100% { opacity: 0.6; }
  }
  @keyframes twinkleLD {
    0%, 100% { opacity: 0.6; }
    45%       { opacity: 1; }
    80%       { opacity: 0.2; }
  }
  @keyframes blinkDotL {
    0%, 49%, 100% { opacity: 1; }
    50%, 99%       { opacity: 0; }
  }

  .frame-landscape { animation: flickerL 8s infinite; filter: drop-shadow(0 0 8px #9333ea) drop-shadow(0 0 20px #6d28d9); }
  .corner-l1       { animation: pulseGlowL 2s ease-in-out infinite; }
  .corner-l2       { animation: pulseGlowL 2s ease-in-out infinite 0.5s; }
  .corner-l3       { animation: pulseGlowL 2s ease-in-out infinite 1s; }
  .corner-l4       { animation: pulseGlowL 2s ease-in-out infinite 1.5s; }
  .stars-la        { animation: twinkleLA 4.8s ease-in-out infinite; }
  .stars-lb        { animation: twinkleLB 3.9s ease-in-out infinite; }
  .stars-lc        { animation: twinkleLC 5.5s ease-in-out infinite; }
  .stars-ld        { animation: twinkleLD 7s ease-in-out infinite; }
  .scan-l          { animation: scanL 4s linear infinite; }
  .dot-l1          { animation: blinkDotL 1.5s infinite; }
  .dot-l2          { animation: blinkDotL 1.5s infinite 0.5s; }
  .dot-l3          { animation: blinkDotL 1.5s infinite 1s; }
`;

export default function HologramLandscape() {
  return (
    <>
      <style>{styles}</style>
      <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="frame-landscape"
      >
        <defs>
          <linearGradient id="lG1a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c084fc" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="lGScan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a855f7" stopOpacity="0"/>
            <stop offset="25%"  stopColor="#c084fc" stopOpacity="0.7"/>
            <stop offset="50%"  stopColor="#e879f9" stopOpacity="1"/>
            <stop offset="75%"  stopColor="#c084fc" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="lGNeb1" cx="50%" cy="50%" r="60%">
            <stop offset="0%"   stopColor="#3b0764" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="lGNeb2" cx="20%" cy="70%" r="40%">
            <stop offset="0%"   stopColor="#4c1d95" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="lGNeb3" cx="80%" cy="30%" r="35%">
            <stop offset="0%"   stopColor="#6d28d9" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#0a0010" stopOpacity="0"/>
          </radialGradient>
          <clipPath id="lClip1">
            <rect x="1" y="1" width="298" height="198"/>
          </clipPath>
        </defs>

        {/* Fond */}
        <rect x="1" y="1" width="298" height="198" fill="#120020" fillOpacity="0.85" rx="18"/>
        <rect x="1" y="1" width="298" height="198" fill="url(#lGNeb1)" clipPath="url(#lClip1)"/>
        <rect x="1" y="1" width="298" height="198" fill="url(#lGNeb2)" clipPath="url(#lClip1)"/>
        <rect x="1" y="1" width="298" height="198" fill="url(#lGNeb3)" clipPath="url(#lClip1)"/>

        {/* Scan laser */}
        <rect x="1" y="0" width="298" height="3"
              fill="url(#lGScan)" fillOpacity="0.25"
              clipPath="url(#lClip1)" className="scan-l"/>

        {/* Bordure fine — 4 côtés */}
        <line x1="42"  y1="1"   x2="258" y2="1"   stroke="url(#lG1a)" strokeWidth="1.5"/>
        <line x1="299" y1="42"  x2="299" y2="158" stroke="url(#lG1a)" strokeWidth="1.5"/>
        <line x1="258" y1="199" x2="42"  y2="199" stroke="url(#lG1a)" strokeWidth="1.5"/>
        <line x1="1"   y1="158" x2="1"   y2="42"  stroke="url(#lG1a)" strokeWidth="1.5"/>

        {/* Coin TL */}
        <path d="M 1,42 L 1,19 A 18,18 0 0 1 19,1 L 42,1"
              fill="none" stroke="#c084fc" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-l1"/>
        <path d="M 1,42 L 1,19 A 18,18 0 0 1 19,1 L 42,1"
              fill="none" stroke="#e9d5ff" strokeWidth="0.8"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"/>

        {/* Coin TR */}
        <path d="M 258,1 L 281,1 A 18,18 0 0 1 299,19 L 299,42"
              fill="none" stroke="#c084fc" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-l2"/>
        <path d="M 258,1 L 281,1 A 18,18 0 0 1 299,19 L 299,42"
              fill="none" stroke="#e9d5ff" strokeWidth="0.8"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"/>

        {/* Coin BR */}
        <path d="M 299,158 L 299,181 A 18,18 0 0 1 281,199 L 258,199"
              fill="none" stroke="#c084fc" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-l3"/>
        <path d="M 299,158 L 299,181 A 18,18 0 0 1 281,199 L 258,199"
              fill="none" stroke="#e9d5ff" strokeWidth="0.8"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"/>

        {/* Coin BL */}
        <path d="M 42,199 L 19,199 A 18,18 0 0 1 1,181 L 1,158"
              fill="none" stroke="#c084fc" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
              className="corner-l4"/>
        <path d="M 42,199 L 19,199 A 18,18 0 0 1 1,181 L 1,158"
              fill="none" stroke="#e9d5ff" strokeWidth="0.8"
              strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"/>

        {/* 3 Dots */}
        <circle cx="12" cy="12" r="2.5" fill="#c084fc" className="dot-l1"/>
        <circle cx="22" cy="12" r="2.5" fill="#7c3aed" className="dot-l2"/>
        <circle cx="32" cy="12" r="2.5" fill="#4c1d95" className="dot-l3"/>

        {/* Textes */}
        <text x="12" y="190"
              fontFamily="'Orbitron',monospace" fontSize="7"
              fill="#c084fc" fillOpacity="0.5" letterSpacing="2">
          SYS::ACTIVE
        </text>
        <text x="228" y="190"
              fontFamily="'Orbitron',monospace" fontSize="7"
              fill="#a855f7" fillOpacity="0.4" letterSpacing="1">
          BUILD::2025
        </text>
      </svg>
    </>
  );
}
