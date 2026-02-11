import { useTranslation } from "react-i18next";
import ReseauxSociaux from "./ReseauxSociaux";
import LanguageSwitcher from "./LanguageSwitcher";
import "../../Assets/styles/Header/Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (

    <header className="header">
      <div className="headerLeft">
        <h1>Sarah Bendavid</h1>
        <h2>{t("header.subtitle")}</h2>
        <h3 className="titre3">{t("header.tagline")}</h3>
        <ReseauxSociaux/>
      </div>
      <div className="headerRight">
        <LanguageSwitcher/>
      </div>
    </header>
  );
}

