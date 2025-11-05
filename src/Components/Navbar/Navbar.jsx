import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoportfolio.png';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  // Labels du menu selon la langue
  const menuLabels = {
    FR: ['Accueil', 'À propos', 'Services', 'Mes Projets', 'Contact'],
    EN: ['Home', 'About', 'Services', 'My Work', 'Contact']
  };

  const labels = menuLabels[language];

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='Logo Fatma' />
      </div>

      <ul className='nav-menu'>
        <li><a href="#hero">{labels[0]}</a></li>
        <li><a href="#about">{labels[1]}</a></li>
        <li><a href="#services">{labels[2]}</a></li>
        <li><a href="#mywork">{labels[3]}</a></li>
        <li><a href="#contact">{labels[4]}</a></li>
      </ul>

      {/* Wrapper pour bouton langue */}
      <div className='lang-wrapper'>
        <button className='lang-toggle' onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
