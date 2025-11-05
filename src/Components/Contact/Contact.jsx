import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();

  // Texte dynamique FR/EN
  const contactText = {
    FR: {
      header: "Me contacter",
      subtitle: "Vous pouvez me joindre pour toute question ou projet.",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Email",
      messagePlaceholder: "Votre message",
      sendBtn: "Envoyer",
      info: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation"
      }
    },
    EN: {
      header: "Contact Me",
      subtitle: "You can reach out for any question or project.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Your message",
      sendBtn: "Send",
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location"
      }
    }
  };

  const { header, subtitle, namePlaceholder, emailPlaceholder, messagePlaceholder, sendBtn, info } = contactText[language];

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_l5g7cb9",       // ton Service ID EmailJS
      "template_f16z16a",      // ton Template ID EmailJS
      form.current,
      "3oAzwp3AvOfFtBOgN"      // ta clé publique EmailJS
    )
      .then((result) => {
        alert(language === "FR" ? "Message envoyé avec succès !" : "Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert(language === "FR" ? "Erreur lors de l'envoi, veuillez réessayer." : "Error sending message, please try again.");
        console.log(error.text);
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

        {/* Informations de contact */}
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
