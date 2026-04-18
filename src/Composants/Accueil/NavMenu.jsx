import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../Assets/styles/Header/NavMenu.css";

export default function NavMenu() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Ferme le menu si on redimensionne en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 450) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="nav-menu">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t("nav.home")}
        </NavLink>
        <NavLink to="/projets" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t("nav.projects")}
        </NavLink>
        <a href="#contact" className="nav-link">{t("nav.contact")}</a>
      </nav>

      <button
        className={`burger-btn${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-overlay${open ? " visible" : ""}`}>
        <NavLink to="/" end className="mobile-link" onClick={() => setOpen(false)}>
          {t("nav.home")}
        </NavLink>
        <NavLink to="/projets" className="mobile-link" onClick={() => setOpen(false)}>
          {t("nav.projects")}
        </NavLink>
        <a href="#contact" className="mobile-link" onClick={() => setOpen(false)}>
          {t("nav.contact")}
        </a>
      </div>
    </>
  );
}
