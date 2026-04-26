import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Composants/Accueil/Header.jsx";
import FooterBand from "../Composants/FooterBand.jsx";
import "../Assets/styles/Main/Projets/ProjetMain.css";

import logoDigitalMarket from "../Assets/images/logo-digital market.png";

const SECTIONS = ["web", "video"];

const CARD_IMAGES = {
  video: {
    0: logoDigitalMarket,
  },
};
const CARD_COUNT = 5;

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
                      {CARD_IMAGES[section]?.[i] && (
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
