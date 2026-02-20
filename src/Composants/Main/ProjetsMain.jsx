import { useTranslation } from "react-i18next";

import "../../Assets/styles/Main/Projets/ProjetMain.css";

import Projet5 from "../../Assets/images/projet5.png";
import Projet6 from "../../Assets/images/projet6.png";
import Projet7 from "../../Assets/images/projet7.png";
import Projet8 from "../../Assets/images/projet8.png";
import Projet9 from "../../Assets/images/projet9.png";

export default function ProjetsMain() {
  const { t } = useTranslation();

  return (
    <>

      <div className="projets">
       
        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.4.title")}</h3>
            <p className="date">{t("projets.item.4.date")}</p>
            <p className="desc">{t("projets.item.4.desc")}</p>
          </div>
          <a className="imgSSclik" href="https://example.com/projet4" target="_blank" rel="noreferrer">
            <img src="https://picsum.photos/800/800?random=1" alt={t("projects.items.4.title")} />
          </a>
        </div>

        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.5.title")}</h3>
            <p className="date">{t("projets.item.5.date")}</p>
            <p className="desc">{t("projets.item.5.desc")}</p>
          </div>
          <a href="https://SarahBendavid.github.io/Jeu-du-Morpion/ " target="_blank" rel="noreferrer">
            <img src={Projet5} alt={t("projects.items.5.title")}/>
          </a>
        </div>

        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.6.title")}</h3>
            <p className="date">{t("projets.item.6.date")}</p>
            <p className="desc">{t("projets.item.6.desc")}</p>
          </div>
          <a href="https://sarahbendavid.github.io/Azertype/" target="_blank" rel="noreferrer">
            <img src={Projet6} alt={t("projects.items.6.title")} />
          </a>
        </div>

        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.7.title")}</h3>
            <p className="date">{t("projets.item.7.date")}</p>
            <p className="desc">{t("projets.item.7.desc")}</p>
          </div>
          <a href="https://sarahbendavid.github.io/TotalTip/ " target="_blank" rel="noreferrer">
            <img src={Projet7} alt={t("projects.items.7.title")} />
          </a>
        </div>

        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.8.title")}</h3>
            <p className="date">{t("projets.item.8.date")}</p>
            <p className="desc">{t("projets.item.8.desc")}</p>
          </div>
          <a href="https://sarahbendavid.github.io/Quizz/ " target="_blank" rel="noreferrer">
            <img src={Projet8} alt={t("projects.items.8.title")} />
          </a>
        </div>

        <div className="cell">
          <div className="overlay">
            <h3>{t("projets.item.9.title")}</h3>
            <p className="date">{t("projets.item.9.date")}</p>
            <p className="desc">{t("projets.item.9.desc")}</p>
          </div>
          <a href="https://sarahbendavid.github.io/coeur-des-mamans/index.html " target="_blank" rel="noreferrer">
            <img src={Projet9} alt={t("projects.items.9.title")} />
          </a>
        </div>
      </div>
    </>
  );
}
