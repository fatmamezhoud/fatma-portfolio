import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoportfolio.png';
import { useLanguage } from '../../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuLabels = {
    FR: [
      { label: 'Accueil', id: 'hero' },
      { label: 'À propos', id: 'about' },
      { label: 'Services', id: 'services' },
      { label: 'Mes Projets', id: 'mywork' },
      { label: 'Contact', id: 'contact' }
    ],
    EN: [
      { label: 'Home', id: 'hero' },
      { label: 'About', id: 'about' },
      { label: 'Services', id: 'services' },
      { label: 'My Work', id: 'mywork' },
      { label: 'Contact', id: 'contact' }
    ]
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-logo'>
          <img src={logo} alt='Logo Fatma' />
        </div>
      </div>

      {/* Menu pour PC */}
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {menuLabels[language].map(({ label, id }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => handleClick(id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger + Langue mobile */}
      <div className='navbar-right'>
        <div className='hamburger' onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className='lang-wrapper'>
          <button className='lang-toggle' onClick={toggleLanguage}>
            {language}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
