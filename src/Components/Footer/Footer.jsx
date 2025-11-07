import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logoportfolio.png";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Appel de l’API CountAPI (compteur gratuit)
    fetch("https://api.countapi.xyz/hit/fatma_portfolio/views")
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => console.error("Erreur compteur :", err));
  }, []);

  // Texte dynamique FR/EN
  const footerText = {
    FR: {
      role: "Développeuse Full Stack | Passionnée par la technologie",
      copyright: "© 2025 Fatma Mezhoud. Tous droits réservés.",
      visitors: "👀 Nombre de visiteurs :",
    },
    EN: {
      role: "Full Stack Developer | Passionate about technology",
      copyright: "© 2025 Fatma Mezhoud. All rights reserved.",
      visitors: "👀 Visitors count:",
    },
  };

  const { role, copyright, visitors } = footerText[language];

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
          <a href="mailto:fatmamezhoud00@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* --- Bas du footer --- */}
      <div className="footer-bottom">
        <p>{copyright}</p>
        <p style={{ marginTop: "8px", color: "#ffccf0" }}>
          {visitors} <strong>{views}</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
