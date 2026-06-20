import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../Composants/Header/Header.jsx";
import FooterBand from "../Composants/Global/FooterBand.jsx";
import UXCard from "../Composants/Projets/UXCard.jsx";
import "../Assets/styles/Main/Projets/MoovitDetail.css";

export default function MoovitDetail() {
  const { t } = useTranslation();

  return (
    <div className="projet-page moovit-detail-page">
      <Header showTitles={false} />
      <main className="moovit-detail-main">
        <Link to="/projets" className="moovit-back">
          ← {t("projets.backToProjects")}
        </Link>
        <div className="moovit-detail-card">
          <UXCard />
        </div>
      </main>
      <FooterBand />
    </div>
  );
}
