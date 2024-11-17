import React, { useState } from 'react';
import '../assets/style/test.css';

const Test = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
    <nav className="navbars">
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li 
          className="dropdown" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <a href="#services">Services</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#app-development">App Development</a></li>
              <li><a href="#seo">SEO Services</a></li>
            </ul>
          )}
        </li>
        <li><a href="#contact" onClick={openModal}>Contact</a></li>
      </ul>
    </nav>

    {/* <Model show={isModalOpen} onClose={closeModal}>
        <h2>Contact Us</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +123 456 7890</p>
        <button onClick={closeModal} style={{ marginTop: '20px' }}>Close</button>
      </Modal> */}
    </>
    
  );
};

export default Test;
