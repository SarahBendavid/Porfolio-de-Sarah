import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import linkedinLogo from "../../Assets/images/logo-linkedin.png";
import githubLogo from "../../Assets/images/logo-github.png";
import discordLogo from "../../Assets/images/logo-discord.jpg";

import "../../Assets/styles/Footer/Bloc-Droit.css";

export default function BlocDroit () {

const { t, i18n } = useTranslation();
const currentLang = i18n.language;
const legalLink = currentLang === "fr" ? "/Mentions-legales" : "/Legal-notice";
const privacyLink = currentLang === "fr" ? "/Confidentialite" : "/Privacy-policy";

return (

<div className="liens">

        <div className={`liens-legaux ${
        i18n.language === "en" ? "liens-legaux-EN" : "liens-legaux-FR"
      }`}
    >
         <Link to={legalLink}>{t("footer.legal")}</Link>
         <span className={`separator sep-${i18n.language}`}>|</span>
         <Link to={privacyLink}>{t("footer.privacy")}</Link>
        </div>

        <div className="copyright">
          © 2025 Sarah Bendavid. <span className="copyright-rights">{t("footer.rights")}</span>
        </div>
      </div>
    );
}