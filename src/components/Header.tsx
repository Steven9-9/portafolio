import React, { useState, useRef, useEffect } from 'react';
import '../styles/header.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import { MdArrowForwardIos } from 'react-icons/md';
import { TiSocialLinkedin } from 'react-icons/ti';

interface HeaderProps{
  onNavigate: (section: string) => void;
}


const Header: React.FC <HeaderProps> = ({onNavigate})=> {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header">
      {!isOpen && (
      <button className="menu-button"
       onClick={toggleMenu}
       onMouseEnter={() => setHovered (true)}
       onMouseLeave={() => setHovered(false)}
       >
          <div className={`line top ${hovered ? "hovered" : ""}`}></div>
          <div className="line middle"></div>
          <div className={`line bottom ${hovered ? "hovered" : ""}`}></div>
      </button>
      )}

<div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <nav ref={menuRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#portada" onClick={() => onNavigate ("portada")}><MdArrowForwardIos className="arrow" />Sobre mí</a></li>
          <li><a href="#habilidades" onClick={() => onNavigate("habilidades")}><MdArrowForwardIos className="arrow" />habilidades</a></li>
          <li><a href="#proyectos" onClick={() => onNavigate("proyectos")}><MdArrowForwardIos className="arrow" />Proyectos</a></li>
          <li><a href="#contacto" onClick={() => onNavigate("habilidades")}><MdArrowForwardIos className="arrow" />Contacto</a></li>
        </ul>

        <div className='contacto'>
          <a href='tel:+573148643384' target='_blank' rel='noopener noreferrer'><BsFillTelephoneFill className='icons-contact' size={33}  />  +57 3148643384</a>
          <a href='mailto:johnstevengarcia1992@gmail.com' target='_blank' rel='noopener noreferrer'><MdEmail className='icons-contact' size={33}  />  johnstevengarcia1992@gmail.com</a>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin size={30} /></a>
        </div>

         <button className="close-menu" onClick={toggleMenu}>
          <FaArrowLeftLong size={30} /> 
          </button>      
  
      </nav>
    </header>
  );
};

export default Header;
