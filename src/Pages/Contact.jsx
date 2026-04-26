import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import WhatsAppIcon from "../Composants/Contact/WhatsAppIcon";
import Header from "../Composants/Header/Header.jsx";
import FooterBand from "../Composants/Global/FooterBand.jsx";
import "../Assets/styles/Main/Contact/ContactMain.css";

const SERVICE_ID  = "service_95trf8k";
const TEMPLATE_ID = "template_ptlcmgr";
const PUBLIC_KEY  = "lEMLCWBEuwStDRbO5";

emailjs.init({ publicKey: PUBLIC_KEY });

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(formRef.current);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        username: data.get("username"),
        email:    data.get("email"),
        message:  data.get("message"),
      })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="contact-page">
      <Header showTitles={false} />
      <main className="contact-main">
        <div className="contact-page-header">
          <h2 className="contact-page-title">{t("contact.pageTitle")}</h2>
          <div className="contact-glow-line" aria-hidden="true" />
        </div>
        <div className="contact-tagline-card">
          <p className="contact-tagline-question">{t("contact.taglineQuestion")}</p>
          <p className="contact-tagline-cta">{t("contact.taglineCta")}</p>
        </div>

        <div className="contact-card">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-field-group">
              <label className="contact-label">{t("contact.name")}</label>
              <input
                type="text"
                name="username"
                placeholder={t("contact.placeholderName")}
                className="contact-input"
                required
              />
            </div>
            <div className="contact-field-group">
              <label className="contact-label">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.placeholderEmail")}
                className="contact-input"
                required
              />
            </div>
            <div className="contact-field-group">
              <label className="contact-label">{t("contact.message")}</label>
              <textarea
                name="message"
                placeholder={t("contact.placeholderMessage")}
                className="contact-textarea"
                required
                rows={8}
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>

            {status === "success" && (
              <p className="contact-feedback contact-feedback--success">
                {t("contact.success")}
              </p>
            )}
            {status === "error" && (
              <p className="contact-feedback contact-feedback--error">
                {t("contact.error")}
              </p>
            )}
          </form>
        </div>

        <a
          href={`https://wa.me/${t("contact.whatsappNumber")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="WhatsApp"
        >
          <svg className="whatsapp-ring-svg" viewBox="0 0 160 160" aria-hidden="true">
            <defs>
              <path id="wa-circle" d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" />
            </defs>
            <circle cx="80" cy="80" r="58" fill="none" stroke="rgba(160,100,255,0.2)" strokeWidth="1" />
            <text className="whatsapp-ring-text">
              <textPath href="#wa-circle">WHATSAPP • WHATSAPP • WHATSAPP • </textPath>
            </text>
          </svg>
          <div className="whatsapp-icon-center">
            <WhatsAppIcon className="whatsapp-icon" size="36px" />
          </div>
        </a>

      </main>
      <FooterBand />
    </div>
  );
}
