import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CRMCard() {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="projet-card-title">
        {t("projets.webCards.crm.title")}
      </h3>

      <div className="projet-card-photo" />

      <div className="projet-card-links">
        <a
          className="projet-card-link projet-card-link--pink"
          href="#"
        >
          {t("projets.webCards.crm.linkFigma")}
        </a>
        <Link
          className="projet-card-link projet-card-link--purple"
          to="/projets/crm-tourisme"
        >
          {t("projets.webCards.crm.linkDetail")}
        </Link>
      </div>
    </>
  );
}
