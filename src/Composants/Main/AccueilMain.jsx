import { useTranslation, Trans } from "react-i18next";
import { Download } from "lucide-react";

import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/RightZone.css";
import "../../Assets/styles/Main/Accueil/LeftZone.css";

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

          <div className="cadre-svg"><HologramPortrait /></div>

          <div className="texte">
            <h3>{t("description.title")}</h3>
            <p className="description">
              <Trans i18nKey="description.textWithBr" components={{ br: <br /> }} />
            </p>
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
