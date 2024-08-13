import React, { useState } from 'react';
import '../styles/Header.scss';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5"; // Importando o ícone de menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>TecService</h1>
        </div>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="/Servico">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <button className="contact-button">Fale Conosco</button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <IoClose size={50} />
          ) : (
            <IoMenu size={50} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
