import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import Header from "../Composants/Accueil/Header.jsx";
import FooterBand from "../Composants/FooterBand.jsx";
import "../Assets/styles/Main/Projets/ProjetMain.css";

import logoDigitalMarket from "../Assets/images/logo-digital market.png";
import carteVisite from "../Assets/images/carte visite.jpg";
import animationVideo from "../Assets/images/animation.mp4";

const SECTIONS = ["web", "video"];

const CARD_IMAGES = {
  video: {
    0: logoDigitalMarket,
    1: carteVisite,
  },
};

const CARD_VIDEOS = {
  video: {
    2: animationVideo,
  },
};

const CARD_COUNT = 5;

function ChromaCanvas({ src, className }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const draw = () => {
      if (video.readyState >= 2 && video.videoWidth > 0) {
        if (canvas.width !== video.videoWidth)   canvas.width  = video.videoWidth;
        if (canvas.height !== video.videoHeight) canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = frame.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          if (g > 80 && g > r * 1.4 && g > b * 1.4) d[i + 3] = 0;
        }
        ctx.putImageData(frame, 0, 0);
        ctx.clearRect(0, 0, Math.round(canvas.width * 0.22), Math.round(canvas.height * 0.16));
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className="chroma-wrapper" style={{ position: "relative" }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay loop muted playsInline
        style={{ position: "absolute", top: 0, left: 0, width: "100%", opacity: 0, pointerEvents: "none" }}
      />
      <canvas ref={canvasRef} className={className} />
    </div>
  );
}

function ChromaKeyVideo({ src, className }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <div className="chroma-outer" style={{ cursor: "zoom-in" }} onClick={() => setIsOpen(true)}>
        <ChromaCanvas src={src} className={className} />
      </div>

      {isOpen && createPortal(
        <div className="video-lightbox" onClick={() => setIsOpen(false)}>
          <button className="video-lightbox-close" onClick={() => setIsOpen(false)} aria-label="Fermer">✕</button>
          <ChromaCanvas src={src} className="video-lightbox-canvas" />
        </div>,
        document.body
      )}
    </>
  );
}

export default function Projets() {
  const { t } = useTranslation();
  const carouselRefs = useRef({});
  const [scrollPos, setScrollPos] = useState({});

  const isAtStart = (section) => scrollPos[section]?.atStart ?? true;
  const isAtEnd   = (section) => scrollPos[section]?.atEnd   ?? false;

  const handleScroll = (section) => {
    const el = carouselRefs.current[section];
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollPos(prev => ({
      ...prev,
      [section]: {
        atStart: el.scrollLeft <= 4,
        atEnd:   el.scrollLeft >= maxScroll - 4,
      },
    }));
  };

  const getStep = (section) => {
    const el = carouselRefs.current[section];
    if (!el) return 280;
    const card = el.querySelector(".projet-card");
    const gap  = parseFloat(getComputedStyle(el).gap) || 20;
    return card ? card.offsetWidth + gap : 280;
  };

  const scrollRight = (section) => {
    const el = carouselRefs.current[section];
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + getStep(section), behavior: "smooth" });
  };

  const scrollLeft = (section) => {
    const el = carouselRefs.current[section];
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft - getStep(section), behavior: "smooth" });
  };

  return (
    <div className="projets-page">
      <Header showTitles={false} />
      <main className="projets-main">

        <div className="projets-page-header">
          <h1 className="projets-page-title">{t("projets.pageTitle")}</h1>
          <div className="projets-glow-line" aria-hidden="true" />
        </div>

        {SECTIONS.map((section) => (
          <section key={section} className="projets-section">
            <h2 className="projets-section-title">
              {t(`projets.sections.${section}.title`)}
            </h2>

            <div className="projets-carousel-wrapper">

              <button
                className={`projets-carousel-arrow projets-carousel-arrow--left${isAtStart(section) ? " arrow-hidden" : ""}`}
                onClick={() => scrollLeft(section)}
                aria-label="Reculer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className="projets-carousel"
                ref={(el) => { carouselRefs.current[section] = el; }}
                onScroll={() => handleScroll(section)}
              >
                {Array.from({ length: CARD_COUNT }, (_, i) => (
                  <div key={i} className="projet-card">
                    <h3 className="projet-card-title">
                      {t(`projets.sections.${section}.cards.${i}.title`)}
                    </h3>
                    <div className="projet-card-photo">
                      {CARD_VIDEOS[section]?.[i] ? (
                        <ChromaKeyVideo
                          src={CARD_VIDEOS[section][i]}
                          className="projet-card-video"
                        />
                      ) : CARD_IMAGES[section]?.[i] && (
                        <a
                          href={CARD_IMAGES[section][i]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={CARD_IMAGES[section][i]}
                            alt={t(`projets.sections.${section}.cards.${i}.title`)}
                          />
                        </a>
                      )}
                    </div>
                    <div className="projet-card-desc">
                      <h4 className="projet-card-desc-title">
                        {t(`projets.sections.${section}.cards.${i}.subtitle`)}
                      </h4>
                      <p className="projet-card-desc-text">
                        {t(`projets.sections.${section}.cards.${i}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={`projets-carousel-arrow projets-carousel-arrow--right${isAtEnd(section) ? " arrow-hidden" : ""}`}
                onClick={() => scrollRight(section)}
                aria-label="Avancer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </div>
          </section>
        ))}

      </main>
      <FooterBand />
    </div>
  );
}
