import { useTranslation } from "react-i18next";
import Footer from "../Composants/Footer/Footer.jsx";
import "../Assets/styles/Main/CV/CV.css";
import photoProfil from "../Assets/images/photo-cv.png";
import coordonnees from "../Assets/images/coordonnees.png";

export default function CV() {
const { t, i18n } = useTranslation();

const toggleLanguage = () => {
i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
};

return (
<> 
<main className="page-cv"> 
  <div className="parcours">

{/* --- TITRE --- */} 
  <section className="zone-titre"> 
    <div className="titre-nom">Sarah Bendavid</div> 
    <div className="metier">{t("cv.title")}</div> 
  </section>

      {/* --- PRÉSENTATION --- */}
      <section className="zone-presentation">{t("cv.presentation")}</section>

      {/* --- EXPÉRIENCE --- */}
      <section className="titre-parcours">{t("cv.experience")}</section>
      <div className="experience">

      {/* DEVELOPPEUSE */}
      <div className="job">
        <div className="job-header">
          <div className="job-title">
            <span className="title">{t("cv.experiences.freelance.title")}</span>{" "}
              <em>{t("cv.experiences.freelance.subtitle")}</em>
            
          </div>
          <div className="job-info">
            <span className="date">{t("cv.experiences.freelance.date")}</span>
            <br />
            <span className="place">{t("cv.experiences.freelance.place")}</span>
          </div>
        </div>
        <ul className="ul-exp">{t("cv.experiences.freelance.tasks", { returnObjects: true }).map((task, index) => (
          <li key={index}>{task}</li>
        ))}
        </ul>
      </div>

      {/* REDACTRICE */}
      <div className="job">
        <div className="job-header">
          <div className="job-title">
            <span className="title">{t("cv.experiences.redactrice.title")}</span>{" "}
              <em>{t("cv.experiences.redactrice.subtitle")}</em>   
          </div>
          <div className="job-info">
            <span className="date">{t("cv.experiences.redactrice.date")}</span>
            <br />
            <span className="place">{t("cv.experiences.redactrice.place")}</span>
          </div>
        </div>
        <ul className="ul-exp">{t("cv.experiences.redactrice.tasks", { returnObjects: true }).map((task, index) => (
        <li key={index}>{task}</li>
        ))}
        </ul>
      </div>

      {/* SECRETAIRE */}
      <div className="job">
        <div className="job-header">
          <div className="job-title">
            <span className="title">{t("cv.experiences.secretaire.title")}</span>{" "}
              <em>{t("cv.experiences.secretaire.subtitle")}</em>     
          </div>
          <div className="job-info">
            <span className="date">{t("cv.experiences.secretaire.date")}</span>
            <br />
            <span className="place">{t("cv.experiences.secretaire.place")}</span>
          </div>
        </div>
        <ul className="ul-exp">{t("cv.experiences.secretaire.tasks", { returnObjects: true }).map((task, index) => (
          <li key={index}>{task}</li>
        ))}
        </ul>
        </div>
      </div>

   {/* --- FORMATION --- */}
      <section className="titre-parcours">{t("cv.formation")}</section>
      <section className="detail-parcours">
        <ul className="ul-parcours">{t("cv.formations", { returnObjects: true }).map((formation, index) => (
          <li key={index}>
        <span className="diplome">{formation.title}</span>
        <p className="date">{formation.date}</p>
        <p className="place">{formation.place}</p>
          </li>
        ))}
         </ul>
      </section>
    </div>

    {/* --- ASIDE --- */} 

        <aside className="aside">
      <div className="div-photo">
        <img className="photo-profil" src={photoProfil} alt="photo" />
      </div>

      <div className="titre-aside">{t("cv.contact")}</div>
      <div className="renseignements-img">
        <img src={coordonnees} alt="coordonnees" />
      </div>

      <div className="titre-aside">{t("cv.languages")}</div>
      <div className="renseignements">
       <ul>
         {t("cv.langues", { returnObjects: true }).map((langue, index) => (
           <li key={index}>
      {langue.nom} {langue.niveau && <span>: {langue.niveau}</span>}
           </li>
         ))}
       </ul>
      </div>

      <div className="titre-aside">{t("cv.skills")}</div>
      <div className="renseignements">
        {t("cv.competences", { returnObjects: true }).map((comp, index) => (
          <div className="competence" key={index}>
            <span className="nom">{comp.nom}</span>
            <span className="niveau">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`dot ${i < comp.niveau ? "filled" : ""}`}></span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <div className="titre-aside">{t("cv.qualities")}</div>
      <div className="renseignements">
        <ul>
          {t("cv.qualites", { returnObjects: true }).map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>

      <div className="titre-aside">{t("cv.hobbies")}</div>
      <div className="renseignements">
        <ul>
          {t("cv.loisirs", { returnObjects: true }).map((l, index) => (
            <li key={index}>{l}</li>
          ))}
        </ul>
      </div>

      <div className="aside-buttons">
        <a
          href={i18n.language === "fr" ? "/CVFR.pdf" : "/CVEN.pdf"}
          download
          className="btn-download"
        >
          {t("cv.download")}
        </a>

        <button className="btn-lang" onClick={toggleLanguage}>
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </aside>
  </main>

  {/* --- FOOTER --- */}
  <Footer className= "footer-cv"/>
</>
);
}
