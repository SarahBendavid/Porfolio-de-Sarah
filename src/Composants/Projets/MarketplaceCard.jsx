import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MarketplaceCard() {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="projet-card-title">
        {t("projets.webCards.marketplace.title")}
      </h3>

      <div className="projet-card-photo" />

      <div className="projet-card-links">
        <a
          className="projet-card-link projet-card-link--pink"
          href="#"
        >
          {t("projets.webCards.marketplace.linkDownload")}
        </a>
        <a
          className="projet-card-link projet-card-link--pink"
          href="#"
        >
          {t("projets.webCards.marketplace.linkProto")}
        </a>
        <Link
          className="projet-card-link projet-card-link--purple"
          to="/projets/marketplace-beaute"
        >
          {t("projets.webCards.marketplace.linkDetail")}
        </Link>
      </div>
    </>
  );
}
