import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logoLinkedin from "../Assets/images/logo-linkedin.png";
import logoGithub   from "../Assets/images/logo-github.png";
import logoDiscord  from "../Assets/images/logo-discord.jpg";

import "../Assets/styles/Footer/FooterBand.css";

export default function FooterBand() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";

  return (
    <div className="footerBand">

      <div className="footerBand-social">
        <a href="https://www.linkedin.com/in/sarah-bendavid-6176a0224/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={logoLinkedin} className="footerBand-icon" alt="LinkedIn" />
        </a>
        <a href="https://github.com/SarahBendavid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={logoGithub} className="footerBand-icon" alt="GitHub" />
        </a>
        <a href="https://discord.com/users/laurage3236" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <img src={logoDiscord} className="footerBand-icon" alt="Discord" />
        </a>
      </div>

      <div className="footerBand-legal">
        <Link to={isFr ? "/Mentions-legales" : "/Legal-notice"} className="footerBand-link" target="_blank" rel="noopener noreferrer">
          {t("footer.legal")}
        </Link>
        <Link to={isFr ? "/Confidentialite" : "/Privacy-policy"} className="footerBand-link" target="_blank" rel="noopener noreferrer">
          {t("footer.privacy")}
        </Link>
        <span className="footerBand-copyright">© {new Date().getFullYear()} Sarah Bendavid</span>
      </div>

    </div>
  );
}
