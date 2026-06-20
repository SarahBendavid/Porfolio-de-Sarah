import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PhotoScreen, MergedScreen, ExpiredScreen, ZoomWrapper, StepLabel } from "./UXCard.jsx";
import imgQR from "../../Assets/images/QR-FR.png";
import imgQREN from "../../Assets/images/QR-EN.png";

export default function MoovitCard() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h3 className="projet-card-title">{t("uxcard.title")}</h3>

      <div className="projet-card-screens">
        <div className="ux-phone-row ux-phone-row--3">
          <div className="ux-step">
            <StepLabel number="1" title={t("uxcard.s4.step1")} />
            <PhotoScreen
              src={i18n.language === "en" ? imgQREN : imgQR}
              alt="Scan QR"
              size="ux-screen--sm"
            />
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
      </div>

      <div className="projet-card-links">
        <a
          className="projet-card-link projet-card-link--pink"
          href="https://sarahbendavid.github.io/Refonte-Trajet-Moovit-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projets.webCards.moovit.linkProto")}
        </a>
        <Link className="projet-card-link projet-card-link--purple" to="/projets/moovit">
          {t("projets.webCards.moovit.linkDetail")}
        </Link>
      </div>
    </>
  );
}
