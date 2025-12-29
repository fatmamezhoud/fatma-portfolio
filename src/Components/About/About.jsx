import React from "react";
import profile_img from "../../assets/profile_img.png";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  // Texte dynamique FR/EN attractif
  const aboutText = {
    FR: {
      title: "À propos de moi",
      description:
        "Je suis Fatma Mezhoud, développeuse web full stack passionnée par la création d’applications modernes et performantes. Curieuse et créative, je transforme les idées en projets concrets offrant une expérience utilisateur fluide et intuitive. Mon objectif : allier design et technologie pour des solutions digitales élégantes et efficaces.",
      skillsTitle: "Compétences",
      skills: [
        "Développement Web",
        "Applications Mobiles",
        "UI/UX Design",
        "React.js",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    EN: {
      title: "About Me",
      description:
        "I’m Fatma Mezhoud, a full stack web developer passionate about building modern and efficient applications. Curious and creative, I turn ideas into tangible projects with seamless and intuitive user experiences. My goal: combining design and technology to deliver elegant and effective digital solutions.",
      skillsTitle: "Skills",
      skills: [
        "Web Development",
        "Mobile Applications",
        "UI/UX Design",
        "React.js",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    DE: {
      title: "Über mich",
      description:
        "Ich bin Fatma Mezhoud, eine leidenschaftliche Full-Stack-Webentwicklerin mit Fokus auf moderne und leistungsstarke Anwendungen. Neugierig und kreativ verwandle ich Ideen in konkrete Projekte mit einer intuitiven und reibungslosen Benutzererfahrung. Mein Ziel: Design und Technologie zu verbinden, um elegante und effiziente digitale Lösungen zu schaffen.",
      skillsTitle: "Kompetenzen",
      skills: [
        "Webentwicklung",
        "Mobile Anwendungen",
        "UI/UX Design",
        "React.js",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
  };


  const { title, description, skillsTitle, skills } = aboutText[language];

  return (
    <section id="about" className="about-section">
      {/* Image à gauche */}
      <div className="about-img-container">
        <img src={profile_img} alt="Fatma Mezhoud" />
      </div>

      {/* Texte et compétences */}
      <div className="about-info">
        <h1>{title}</h1>
        <p>{description}</p>

        <h2>{skillsTitle}</h2>
        <div className="skills-circle">
          {skills.map((skill, idx) => (
            <div className="skill-circle" key={idx}>
              <div className="circle">
                <div className="circle-inner">{skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
