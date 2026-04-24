import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Header from "../Composants/Accueil/Header.jsx";
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
      .catch((error) => {
        console.error("❌ EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <div className="contact-page">
      <Header showTitles={false} />
      <main className="contact-main">
        <div className="contact-page-header">
          <h2 className="contact-page-title">{t("contact.pageTitle")}</h2>
          <div className="contact-glow-line" aria-hidden="true" />
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
      </main>
    </div>
  );
}
