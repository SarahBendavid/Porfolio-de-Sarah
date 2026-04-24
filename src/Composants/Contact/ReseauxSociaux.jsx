import "../../Assets/styles/Header/ReseauxSociaux.css";
import logoGithub   from "../../Assets/images/logo-github.png";
import logoLinkedin from "../../Assets/images/logo-linkedin.png";
import logoDiscord  from "../../Assets/images/logo-discord.jpg";

export default function ReseauxSociaux () {
    return (
    <div className="social-buttons">
      <a
        href="https://github.com/SarahBendavid"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
      >
        <img src={logoGithub} className="social-icon" alt="" aria-hidden="true" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/sarah-bendavid-6176a0224/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >
        <img src={logoLinkedin} className="social-icon" alt="" aria-hidden="true" />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://discord.com/users/laurage3236"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn discord"
      >
        <img src={logoDiscord} className="social-icon" alt="" aria-hidden="true" />
        <span>Discord</span>
      </a>
    </div>
  );
}


