import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();

  // Texte dynamique FR / EN / DE
  const contactText = {
    FR: {
      header: "Me contacter",
      subtitle: "Vous pouvez me joindre pour toute question ou projet.",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Email",
      messagePlaceholder: "Votre message",
      sendBtn: "Envoyer",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi, veuillez réessayer.",
      info: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
    },
    EN: {
      header: "Contact Me",
      subtitle: "You can reach out for any question or project.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Your message",
      sendBtn: "Send",
      success: "Message sent successfully!",
      error: "Error sending message, please try again.",
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    DE: {
      header: "Kontaktieren Sie mich",
      subtitle: "Sie können mich für Fragen oder Projekte kontaktieren.",
      namePlaceholder: "Vollständiger Name",
      emailPlaceholder: "E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      sendBtn: "Senden",
      success: "Nachricht erfolgreich gesendet!",
      error: "Fehler beim Senden der Nachricht. Bitte erneut versuchen.",
      info: {
        email: "E-Mail",
        phone: "Telefon",
        location: "Standort",
      },
    },
  };

  // ✅ Fallback sécurité
  const data = contactText[language] || contactText.EN;

  const {
    header,
    subtitle,
    namePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    sendBtn,
    success,
    error,
    info,
  } = data;

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_l5g7cb9",
      "template_f16z16a",
      form.current,
      "3oAzwp3AvOfFtBOgN"
    )
      .then(() => {
        alert(success);
        form.current.reset();
      })
      .catch((err) => {
        alert(error);
        console.error(err);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>{header}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="contact-content">
        {/* Formulaire */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder={namePlaceholder}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder={emailPlaceholder}
            required
          />
          <textarea
            name="message"
            placeholder={messagePlaceholder}
            rows="5"
            required
          />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <button type="submit">{sendBtn}</button>
        </form>

        {/* Informations */}
        <div className="contact-info">
          <div className="info-item">
            <h4>{info.email}</h4>
            <p>fatmamezhoud00@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>{info.phone}</h4>
            <p>+216 27 510 079</p>
          </div>
          <div className="info-item">
            <h4>{info.location}</h4>
            <p>Monastir, Tunisie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
