import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Texte dynamique FR/EN pour Hero
  const heroText = {
    FR: {
      greeting: "Bonjour, je suis Fatma Mezhoud,",
      profession: "développeuse web passionnée",
      description: "Je conçois et développe des sites et applications modernes, performants et élégants. Mon objectif : transformer vos idées en expériences digitales intuitives et attractives.",
      contactBtn: "Me contacter",
      resumeBtn: "Mon CV"
    },
    EN: {
      greeting: "Hi, I’m Fatma Mezhoud,",
      profession: "a passionate web developer",
      description: "I design and build modern, efficient, and elegant websites and applications. My goal: turning your ideas into intuitive and engaging digital experiences.",
      contactBtn: "Contact Me",
      resumeBtn: "My Resume"
    }
  };

  const { greeting, profession, description, contactBtn, resumeBtn } = heroText[language];

  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt='Fatma Mezhoud' />
      <h1><span>{greeting}</span> {profession}</h1>
      <p>{description}</p>

      <div className='hero-action'>
        <a href="#contact">
          <button className='hero-connect'>{contactBtn}</button>
        </a>

        <a
  href={language === "FR" ? "/CV-pho.pdf" : "/CV-fatma mezhoud.pdf"}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hero-resume">{language === "FR" ? "Mon CV" : "My Resume"}</button>
</a>

      </div>
    </div>
  );
};

export default Hero;
