import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logoportfolio.png"; // ton logo
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  // Texte dynamique FR/EN
  const footerText = {
    FR: {
      role: "Développeuse Full Stack | Passionnée par la technologie",
      copyright: "© 2025 Fatma Mezhoud. Tous droits réservés."
    },
    EN: {
      role: "Full Stack Developer | Passionate about technology",
      copyright: "© 2025 Fatma Mezhoud. All rights reserved."
    }
  };

  const { role, copyright } = footerText[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Logo & Nom --- */}
        <div className="footer-logo">
          <img src={logo} alt="Logo Fatma Mezhoud" className="footer-logo-img" />
          <h3>Fatma Mezhoud</h3>
          <p>{role}</p>
        </div>

        {/* --- Réseaux sociaux --- */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/mezhoud-fatma-94085a255"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fatmamezhoud"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:fatmamezhoud00@gmail.com"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* --- Bas du footer --- */}
      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
