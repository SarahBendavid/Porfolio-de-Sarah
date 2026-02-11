import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import "../../Assets/styles/Header/ReseauxSociaux.css";

export default function ReseauxSociaux () {
    return (
    <div className="social-buttons">
      <a
        href="https://github.com/SarahBendavid"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
      >
        <FaGithub className="social-icon" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/sarah-bendavid-6176a0224/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >
        <FaLinkedin className="social-icon" />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://discord.com/users/laurage3236"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn discord"
      >
        <FaDiscord className="social-icon" />
        <span>Discord</span>
      </a>
    </div>
  );
}


