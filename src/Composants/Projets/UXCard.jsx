import "../../Assets/styles/Main/Projets/UXCard.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

import imgQR from "../../Assets/images/QR-FR.png";
import imgQREN from "../../Assets/images/QR-EN.png";

import imgTrajet from "../../Assets/images/Trajet-FR.png";
import imgTrajetEN from "../../Assets/images/Trajet-EN.png";

const STOPS = ["Charles de Gaulle – Étoile", "Ternes", "Wagram", "Malesherbes", "Monceau", "Villiers"];
const STOPS_EN = ["Yad Eliyahu", "Rothschild Blvd / Allenby St", "Bialik St", "Dizengoff Center", "Ben Yehuda St / Frishman St", "Arlozorov St", "HaYarkon St / Ibn Gabirol St", "Kikar Rabin"];

function Divider() {
  return <div className="ux-divider" aria-hidden="true" />;
}

function Section({ number, title, children }) {
  return (
    <div className="ux-section">
      <div className="ux-section__head">
        <span className="ux-section__num">{number}.</span>
        <h3 className="ux-section__title">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function StepLabel({ number, title }) {
  return (
    <div className="ux-step__label">
      <div className="ux-step__num">{number}</div>
      <span className="ux-step__text">{title}</span>
    </div>
  );
}

const STAR = <span className="ux-star" aria-hidden="true">✦</span>;

function PhotoScreen({ src, alt, size }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);
  return (
    <>
      <div className={`ux-screen ${size} ux-screen--photo`} style={{ cursor: "zoom-in" }} onClick={() => setOpen(true)}>
        <img src={src} alt={alt} className="ux-screen__img" />
      </div>
      {open && createPortal(
        <div className="ux-photo-lightbox" onClick={() => setOpen(false)}>
          <button className="ux-photo-lightbox__close" onClick={(e) => { e.stopPropagation(); setOpen(false); }}>✕</button>
          <img src={src} alt={alt} className="ux-photo-lightbox__img" />
        </div>,
        document.body
      )}
    </>
  );
}

function ZoomWrapper({ children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);
  return (
    <>
      <div style={{ cursor: "zoom-in" }} onClick={() => setOpen(true)}>
        {children}
      </div>
      {open && createPortal(
        <div className="ux-photo-lightbox" onClick={() => setOpen(false)}>
          <button className="ux-photo-lightbox__close" style={{ zIndex: 10 }} onClick={(e) => { e.stopPropagation(); setOpen(false); }}>✕</button>
          <div style={{ transform: "scale(2)", transformOrigin: "center center" }}>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function MergedScreen() {
  const { t, i18n } = useTranslation();
  const stops = i18n.language === "en" ? STOPS_EN : STOPS;
  return (
    <div className="ux-screen ux-screen--sm ux-screen--light">
      <div className="ux-merged">
        <div style={{ background: "#fff", padding: "3px 8px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
          <span style={{ fontSize: 9, color: "#444", fontFamily: "monospace" }}>9:41</span>
          <span style={{ fontSize: 8, color: "#444" }}>●●● ▮</span>
        </div>
        <div style={{ padding: "5px 8px 4px", borderBottom: "1px solid #eee" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>{t("uxcard.s4.screenTitle")}</div>
          <div style={{ fontSize: 8, color: "#777", lineHeight: 1.3 }}>{t("uxcard.s4.screenSub")}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 0 5px", borderBottom: "1px solid #eee" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2.5px solid #7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#7c3aed" }}>2:30</div>
          <span style={{ fontSize: 7, color: "#7c3aed", marginTop: 2, whiteSpace: "nowrap" }}>{t("uxcard.s4.timer")}</span>
        </div>
        <div style={{ padding: "0 8px" }}>
          {stops.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 0", borderBottom: "1px solid #f0f0f0", background: i === 1 ? "#f3f0ff" : "transparent", paddingLeft: i === 1 ? 4 : 0, borderRadius: i === 1 ? 3 : 0 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", border: `1.5px solid ${i === 0 ? "#7c3aed" : "#ccc"}`, background: i === 0 ? "#7c3aed" : "transparent", flexShrink: 0 }} />
              <span style={{ fontSize: 9, color: i === 1 ? "#7c3aed" : "#333", fontWeight: i === 1 ? 600 : 400 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpiredScreen() {
  const { t } = useTranslation();
  return (
    <div className="ux-screen ux-screen--sm ux-screen--dark">
      <div style={{ background: "#0a0a0a", padding: "3px 8px", display: "flex", justifyContent: "space-between", flexShrink: 0, fontSize: 6, color: "#888", fontFamily: "monospace" }}>
        <span>9:41</span><span>●●● ▮</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 10px", gap: 6 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#f97316", textAlign: "center" }}>{t("uxcard.s4.expired")}</div>
        <div style={{ fontSize: 6.5, color: "#ccc", lineHeight: 1.4, textAlign: "center" }}>{t("uxcard.s4.expiredDesc")}</div>
      </div>
    </div>
  );
}

export default function UXCard() {
  const { t, i18n } = useTranslation();
  return (
    <div className="ux-card">
      <div className="ux-bg" aria-hidden="true" />

      <div className="ux-header">
        <h2 className="ux-header__title">{t("uxcard.title")}</h2>
      </div>

      <div className="ux-body">

        <div className="ux-s123">
          <div className="ux-s123__text">
            <Section number="1" title={t("uxcard.s1.title")}>
              <p className="ux-text ux-text--intro">{t("uxcard.s1.intro")}</p>
              <ul className="ux-bullets">
                {[
                  t("uxcard.s1.b0"),
                  t("uxcard.s1.b1"),
                ].map((text, i) => (
                  <li key={i} className="ux-bullet">{STAR}<span className="ux-text ux-text--sm">{text}</span></li>
                ))}
              </ul>
            </Section>
          </div>
          <div className="ux-s123__photos">
            <div className="ux-phone-row">
              <div className="ux-step">
                <StepLabel number="1" title={t("uxcard.s1.step1")} />
                <PhotoScreen src={i18n.language === "en" ? imgQREN : imgQR} alt="Scan QR" size="ux-screen--lg" />
              </div>
              <div className="ux-step">
                <StepLabel number="2" title={t("uxcard.s1.step2")} />
                <PhotoScreen src={i18n.language === "en" ? imgTrajetEN : imgTrajet} alt={t("uxcard.s1.step2")} size="ux-screen--lg" />
              </div>
            </div>
          </div>
          <div className="ux-s123__s2s3">
            <Divider />
            <Section number="2" title={t("uxcard.s2.title")}>
              <p className="ux-text ux-text--sm">{t("uxcard.s2.intro")}</p>
              <ul className="ux-bullets">
                {[
                  t("uxcard.s2.b0"),
                  t("uxcard.s2.b1"),
                  t("uxcard.s2.b2"),
                ].map((text, i) => (
                  <li key={i} className="ux-bullet">{STAR}<span className="ux-text ux-text--sm">{text}</span></li>
                ))}
              </ul>
            </Section>

          </div>
        </div>

        <Divider />

        <div className="ux-s345">
          <div className="ux-s345__s3">
            <Section number="3" title={t("uxcard.s3.title")}>
              <ul className="ux-bullets">
                {[
                  t("uxcard.s3.b0"),
                  t("uxcard.s3.b1"),
                  t("uxcard.s3.b2"),
                ].map((text, i) => (
                  <li key={i} className="ux-bullet">{STAR}<span className="ux-text ux-text--sm">{text}</span></li>
                ))}
              </ul>
            </Section>
          </div>
          <div className="ux-s345__s4">
            <Divider />
            <Section number="4" title={t("uxcard.s4.title")}>
              <div className="ux-phone-row ux-phone-row--3">
                <div className="ux-step">
                  <StepLabel number="1" title={t("uxcard.s4.step1")} />
                  <PhotoScreen src={i18n.language === "en" ? imgQREN : imgQR} alt="Scan QR" size="ux-screen--sm" />
                </div>
                <div className="ux-step">
                  <StepLabel number="2" title={t("uxcard.s4.step2")} />
                  <ZoomWrapper><MergedScreen /></ZoomWrapper>
                </div>
                <div className="ux-step">
                  <StepLabel number="3" title={t("uxcard.s4.step3")} />
                  <ZoomWrapper><ExpiredScreen /></ZoomWrapper>
                </div>
              </div>
            </Section>
          </div>
          <div className="ux-s345__s5">
            <Divider />
            <Section number="5" title={t("uxcard.s5.title")}>
              <div className="ux-links">
                <a className="ux-link ux-link--pink" href="https://sarahbendavid.github.io/Refonte-Trajet-Moovit-/" target="_blank" rel="noopener noreferrer">{t("uxcard.s5.link1")}</a>
                <a className="ux-link ux-link--purple" href="https://github.com/SarahBendavid/Refonte-Trajet-Moovit-" target="_blank" rel="noopener noreferrer">{t("uxcard.s5.link2")}</a>
              </div>
            </Section>
          </div>
        </div>

      </div>
    </div>
  );
}
