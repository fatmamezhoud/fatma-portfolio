import React, { useState } from "react";
import "./MyWork.css";
import { useLanguage } from "../../context/LanguageContext";

// Importe tes images
import elearningImg from "../../assets/elearning.png";
import stageImg from "../../assets/stage.png";
import foodieImg from "../../assets/foodie.png";
import travelImg from "../../assets/travel.png";
import ecommerceImg from "../../assets/ecommerce.png";

function MyWork() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  // Texte dynamique FR / EN / DE
  const projectsData = {
    FR: {
      title: "Mes Projets",
      projects: [
        {
          id: 1,
          title: "Application E-learning",
          tech: "React Native • NestJS • TypeScript",
          image: elearningImg,
          description:
            "Application mobile d’apprentissage interactive avec quiz, tests et authentification biométrique. Gestion de cours, notifications et paiements sécurisés.",
        },
        {
          id: 2,
          title: "Application de Gestion de Stages",
          tech: "Angular • Spring Boot",
          image: stageImg,
          description:
            "Application interne pour la gestion et le suivi des stagiaires. Notifications RH et automatisation des contrats.",
        },
        {
          id: 3,
          title: "Réseau Privé Foodie",
          tech: "React • Node.js • MongoDB",
          image: foodieImg,
          description:
            "Réseau social culinaire permettant de partager des recettes et interagir. Backend optimisé pour les performances.",
        },
        {
          id: 4,
          title: "Application Agence de Voyage",
          tech: "React • Node.js",
          image: travelImg,
          description:
            "Plateforme web pour la réservation de voyages en ligne. Gestion des offres et suivi des réservations en temps réel.",
        },
        {
          id: 5,
          title: "Site E-commerce",
          tech: "React • Node.js",
          image: ecommerceImg,
          description:
            "Site complet de vente en ligne avec panier, paiement sécurisé et interface moderne.",
        },
      ],
    },
    EN: {
      title: "My Projects",
      projects: [
        {
          id: 1,
          title: "E-learning Application",
          tech: "React Native • NestJS • TypeScript",
          image: elearningImg,
          description:
            "Interactive mobile learning application with quizzes, tests, and biometric authentication. Course management, notifications, and secure payments.",
        },
        {
          id: 2,
          title: "Internship Management App",
          tech: "Angular • Spring Boot",
          image: stageImg,
          description:
            "Internal application for managing and tracking interns. HR notifications and contract automation.",
        },
        {
          id: 3,
          title: "Foodie Private Network",
          tech: "React • Node.js • MongoDB",
          image: foodieImg,
          description:
            "Culinary social network to share recipes and interact. Optimized backend for performance.",
        },
        {
          id: 4,
          title: "Travel Agency App",
          tech: "React • Node.js",
          image: travelImg,
          description:
            "Web platform for online travel booking. Offers management and real-time reservation tracking.",
        },
        {
          id: 5,
          title: "E-commerce Website",
          tech: "React • Node.js",
          image: ecommerceImg,
          description:
            "Complete online store with cart, secure payment, and modern interface.",
        },
      ],
    },
    DE: {
      title: "Meine Projekte",
      projects: [
        {
          id: 1,
          title: "E-Learning Anwendung",
          tech: "React Native • NestJS • TypeScript",
          image: elearningImg,
          description:
            "Interaktive mobile Lernanwendung mit Quiz, Tests und biometrischer Authentifizierung. Kursverwaltung, Benachrichtigungen und sichere Zahlungen.",
        },
        {
          id: 2,
          title: "Praktikanten-Verwaltungs-App",
          tech: "Angular • Spring Boot",
          image: stageImg,
          description:
            "Interne Anwendung zur Verwaltung und Nachverfolgung von Praktikanten. HR-Benachrichtigungen und Automatisierung der Verträge.",
        },
        {
          id: 3,
          title: "Foodie Privates Netzwerk",
          tech: "React • Node.js • MongoDB",
          image: foodieImg,
          description:
            "Kulinarisches soziales Netzwerk zum Teilen von Rezepten und Interaktion. Optimiertes Backend für hohe Leistung.",
        },
        {
          id: 4,
          title: "Reisebüro-Anwendung",
          tech: "React • Node.js",
          image: travelImg,
          description:
            "Webplattform für Online-Reisebuchungen. Verwaltung von Angeboten und Echtzeit-Reservierungen.",
        },
        {
          id: 5,
          title: "E-Commerce Webseite",
          tech: "React • Node.js",
          image: ecommerceImg,
          description:
            "Kompletter Online-Shop mit Warenkorb, sicherer Bezahlung und moderner Benutzeroberfläche.",
        },
      ],
    },
  };

  const data = projectsData[language] || projectsData.EN;
  const { title, projects } = data;

  return (
    <section className="work-page" id="mywork">
      <h1 className="work-title">{title}</h1>

      <div className="work-container">
        {projects.map((project) => (
          <div
            className="work-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="work-content">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p className="tech">{selectedProject.tech}</p>
            <p>{selectedProject.description}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              {language === "FR" ? "Fermer" : language === "DE" ? "Schließen" : "Close"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyWork;
