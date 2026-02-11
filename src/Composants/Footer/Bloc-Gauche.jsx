import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";


import "../../Assets/styles/Footer/Bloc-Gauche.css";

export default function BlocGauche () {
  
  const { t } = useTranslation ();

  return (

    <div className="bloc-gauche">

        <div className="titre2">
          <h2>{t("footer.contact")}</h2>
        </div>

        <div className="coordonees">

          <div className="contactItem">
            <FaWhatsapp size={20} />
            <a
              href="https://wa.me/33765149265"
              target="_blank"
              rel="noopener noreferrer"className="span-tel"> 07.65.149.265
            </a>
          </div>

          <div className="contactItem">
            <Mail size={18} />
            <a
              href="mailto:sarah.laura.bendavid@gmail.com"
              className="span-mail"
            >
             sarah.laura.bendavid@gmail.com
            </a>
          </div>
        </div>
      </div>
  );
}