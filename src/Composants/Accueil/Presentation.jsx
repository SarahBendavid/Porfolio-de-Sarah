import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Download, Zap, FileText, SquareCode, PenTool, Brain } from "lucide-react";

import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/RightZone.css";
import "../../Assets/styles/Main/Accueil/LeftZone.css";
import "../../Assets/styles/Main/Accueil/ContactPreview.css";

import HologramPortrait from "./CadrePortrait";
import PhotoPC     from "../../Assets/images/PhotoPC.png";
import PhotoMobile from "../../Assets/images/PhotoMobile.png";

export default function Presentation() {

  const { t, i18n } = useTranslation();

  return (
    <main>
      <section className="presentation">

        <div className="leftZone">

          <img src={PhotoMobile} className="photo-mobile" alt="" aria-hidden="true" />

          <div className="cadre-wrapper">

            <div className="cadre-top-section">
              <h3 className="cadre-title">{t("description.title")}</h3>
              <div className="cadre-title-line" aria-hidden="true" />
            </div>

            <div className={`cadre-skills-section${i18n.language === "en" ? " cadre-skills-en" : ""}`}>
              <div className="skill-row">
                <SquareCode className="skill-icon" aria-hidden="true" />
                <div className="skill-text">
                  <span className="skill-title">{t("skills.dev.title")}</span>
                  <span className="skill-subtitle">{t("skills.dev.subtitle")}</span>
                </div>
              </div>
              <div className="skill-row">
                <PenTool className="skill-icon" aria-hidden="true" />
                <div className="skill-text">
                  <span className="skill-title">{t("skills.writer.title")}</span>
                  <span className="skill-subtitle">
                    {t("skills.writer.subtitlePart1")}
                    <br className="writer-break" />
                    {t("skills.writer.subtitlePart2")}
                  </span>
                </div>
              </div>
              <div className="skill-row">
                <Brain className="skill-icon" aria-hidden="true" />
                <div className="skill-text">
                  <span className="skill-title">{t("skills.psycho.title")}</span>
                  <span className="skill-subtitle">{t("skills.psycho.subtitle")}</span>
                </div>
              </div>
            </div>

            <div className="cadre-bot-section">
              <div className="cadre-bot-divider" aria-hidden="true" />
              <div className="cadre-bot-lines">
                <div className="cadre-bot-line">
                  <span className="cadre-bot-dash" aria-hidden="true" />
                  <span className="cadre-bot-text">{t("description.tagline1")}</span>
                </div>
                <div className="cadre-bot-line cadre-bot-line--indent">
                  <span className="cadre-bot-dash" aria-hidden="true" />
                  <span className="cadre-bot-text">{t("description.tagline2")}</span>
                </div>
              </div>
            </div>

            <HologramPortrait />
          </div>
        </div>

        <div className="rightZone">
          <img src={PhotoPC} className="photoPC" alt="" aria-hidden="true" />
        </div>

      </section>

      <div className="bottom-section">
        <div className="work-section">
          <h3 className="contact-preview-title">{t("workSection.title")}</h3>
          <div className="work-section-buttons">
            <a
              href={`${import.meta.env.BASE_URL}${i18n.language === "fr" ? "CVFR.pdf" : "CVEN.pdf"}`}
              download
              className="action-btn">
              <Download size={14} />
              {t("buttons.cv")}
            </a>
            <Link to="/projets" className="action-btn">
              {t("buttons.projects")}
            </Link>
          </div>
        </div>

        <div className="contact-preview">
          <h3 className="contact-preview-title">{t("contactPreview.title")}</h3>
          <div className="contact-info-blocks">
            <div className="contact-info-block">
              <Zap className="block-icon" />
              <span className="block-title">{t("contactPreview.block1.title")}</span>
              <span className="block-subtitle">{t("contactPreview.block1.subtitle")}</span>
            </div>
            <div className="contact-info-block">
              <FileText className="block-icon" />
              <span className="block-title">{t("contactPreview.block2.title")}</span>
              <span className="block-subtitle">{t("contactPreview.block2.subtitle")}</span>
            </div>
          </div>
          <Link to="/contact" className="contact-me-btn">{t("contactPreview.btn")}</Link>
        </div>
      </div>

    </main>
  );
}
