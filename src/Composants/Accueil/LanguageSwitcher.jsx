import { useTranslation } from "react-i18next";
import "../../Assets/styles/Header/LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa-solid fa-earth-americas"></i>
        {t("header.language")}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => changeLanguage("fr")}>
            <span className="fi fi-fr"></span> Français
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => changeLanguage("en")}>
            <span className="fi fi-gb"></span> English
          </button>
        </li>
      </ul>
    </div>
  );
}
