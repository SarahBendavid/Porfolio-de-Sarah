import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/RightZone.css";
import "../../Assets/styles/Main/Accueil/LeftZone.css";

import CadreTop from "../../Assets/images/CadreTop.jpg";
import CadreMidDesktop from "../../Assets/images/CadreMidDesktop.png";
import CadreMidMobile from "../../Assets/images/CadreMidMobile.png";
import CadreBot from "../../Assets/images/CadreBot.jpg";
import HologramPortrait from "./CadrePortrait";
import PhotoPC from "../../Assets/images/PhotoPC.png";
import PhotoMobile from "../../Assets/images/PhotoMobile.png";

export default function Presentation() {

  const { t, i18n } = useTranslation();

  return (
    <main>
      <section className="presentation">

        <div className="leftZone">

          <img src={PhotoMobile} className="photo-mobile" alt="" aria-hidden="true" />

          <div className="cadre-wrapper">
            <div style={{paddingTop:"9.2%"}}></div>
            <img src={CadreTop} className="cadre-img-top" alt="" aria-hidden="true" />
            <div className="cadre-mid-wrapper">
              <picture>
                <source media="(max-width: 670px)" srcSet={CadreMidMobile} />
                <img src={CadreMidDesktop} style={{width:"100%", height:"auto", display:"block"}} alt="" aria-hidden="true" />
              </picture>
              <div className="cadre-skills-section">
                <div className="skill-row">
                  <div className="skill-text">
                    <span className="skill-title">{t("skills.dev.title")}</span>
                    <span className="skill-subtitle">{t("skills.dev.subtitle")}</span>
                  </div>
                </div>
                <div className="skill-row">
                  <div className="skill-text">
                    <span className="skill-title">{t("skills.writer.title")}</span>
                    <span className="skill-subtitle">{t("skills.writer.subtitle")}</span>
                  </div>
                </div>
                <div className="skill-row">
                  <div className="skill-text">
                    <span className="skill-title">{t("skills.psycho.title")}</span>
                    <span className="skill-subtitle">{t("skills.psycho.subtitle")}</span>
                  </div>
                </div>
              </div>
            </div>
            <img src={CadreBot} className="cadre-img-bot" alt="" aria-hidden="true" />
            <HologramPortrait />
          </div>
          <div className="buttons">
            <a 
              href={`${import.meta.env.BASE_URL}${i18n.language === "fr" ? "CVFR.pdf" : "CVEN.pdf"}`}
              download
              className="btn cv-btn">
              <Download className="download-icon" />
              {t("buttons.cv")}
            </a>
          </div>
        </div>  

        <div className="rightZone">
          <img src={PhotoPC} className="photoPC" alt="" aria-hidden="true" />
        </div>

      </section>
    </main>
  );
}
