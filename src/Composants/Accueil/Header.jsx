import { useTranslation } from "react-i18next";
import NavMenu from "./NavMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import "../../Assets/styles/Header/Header.css";

export default function Header({ showTitles = true }) {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="headerBand">
        <NavMenu />
        <LanguageSwitcher />
      </div>
      {showTitles && (
        <div className="headerTitles">
          <h1>Sarah Bendavid</h1>
          <div className="header-glow-line" aria-hidden="true"></div>
          <h2>{t("header.subtitle")}</h2>
          <h3 className="titre3">{t("header.tagline")}</h3>
        </div>
      )}
    </header>
  );
}
