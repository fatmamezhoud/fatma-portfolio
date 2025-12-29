import React from "react";
import "./Services.css";
import { useLanguage } from "../../context/LanguageContext";

function Services() {
  const { language } = useLanguage();

  const servicesData = {
    FR: {
      title: "Mes Services",
      services: [
        {
          id: "01",
          title: "Développement Web Full Stack",
          description:
            "Création d’applications web performantes avec React.js, Node.js et NestJS. Interfaces dynamiques et API sécurisées."
        },
        {
          id: "02",
          title: "Développement Mobile",
          description:
            "Applications mobiles cross-platform avec React Native et Flutter, incluant notifications et authentification biométrique."
        },
        {
          id: "03",
          title: "UI / UX Design",
          description:
            "Interfaces modernes et intuitives avec Tailwind CSS, Material UI et Figma. Expérience utilisateur optimisée."
        },
        {
          id: "04",
          title: "Architecture & API Backend",
          description:
            "Développement d’architectures robustes et API REST performantes avec NestJS et Spring Boot."
        },
        {
          id: "05",
          title: "DevOps & Gestion de Projet",
          description:
            "CI/CD et déploiement avec Git, Docker et GitHub. Gestion de projet agile et collaboration efficace."
        },
        {
          id: "06",
          title: "Marketing Digital & Analyse",
          description:
            "Stratégies digitales, analyse des performances et optimisation de la visibilité en ligne."
        }
      ]
    },

    EN: {
      title: "My Services",
      services: [
        {
          id: "01",
          title: "Full Stack Web Development",
          description:
            "Creating high-performance web applications with React.js, Node.js, and NestJS. Dynamic interfaces and secure APIs."
        },
        {
          id: "02",
          title: "Mobile Development",
          description:
            "Cross-platform mobile apps with React Native and Flutter, including notifications and biometric authentication."
        },
        {
          id: "03",
          title: "UI / UX Design",
          description:
            "Modern and intuitive interfaces using Tailwind CSS, Material UI, and Figma. Optimized user experience."
        },
        {
          id: "04",
          title: "Architecture & Backend API",
          description:
            "Development of robust architectures and high-performance REST APIs with NestJS and Spring Boot."
        },
        {
          id: "05",
          title: "DevOps & Project Management",
          description:
            "CI/CD and deployment with Git, Docker, and GitHub. Agile project management and effective collaboration."
        },
        {
          id: "06",
          title: "Digital Marketing & Analytics",
          description:
            "Digital strategies, performance analysis, and optimization of online visibility."
        }
      ]
    },

    DE: {
      title: "Meine Leistungen",
      services: [
        {
          id: "01",
          title: "Full-Stack-Webentwicklung",
          description:
            "Entwicklung leistungsstarker Webanwendungen mit React.js, Node.js und NestJS. Dynamische Benutzeroberflächen und sichere APIs."
        },
        {
          id: "02",
          title: "Mobile App-Entwicklung",
          description:
            "Plattformübergreifende mobile Anwendungen mit React Native und Flutter, inklusive Push-Benachrichtigungen und biometrischer Authentifizierung."
        },
        {
          id: "03",
          title: "UI / UX Design",
          description:
            "Moderne und intuitive Benutzeroberflächen mit Tailwind CSS, Material UI und Figma. Optimierte Benutzererfahrung."
        },
        {
          id: "04",
          title: "Backend-Architektur & APIs",
          description:
            "Entwicklung robuster Architekturen und leistungsstarker REST-APIs mit NestJS und Spring Boot."
        },
        {
          id: "05",
          title: "DevOps & Projektmanagement",
          description:
            "CI/CD und Deployment mit Git, Docker und GitHub. Agiles Projektmanagement und effiziente Zusammenarbeit."
        },
        {
          id: "06",
          title: "Digitales Marketing & Analyse",
          description:
            "Digitale Strategien, Performance-Analyse und Optimierung der Online-Sichtbarkeit."
        }
      ]
    }
  };

  const { title, services } = servicesData[language];

  return (
    <section id="services" className="services-page">
      <h1 className="services-title">{title}</h1>

      <div className="services-container">
        {services.map((service) => (
          <div className="services-format" key={service.id}>
            <h3>{service.id}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
