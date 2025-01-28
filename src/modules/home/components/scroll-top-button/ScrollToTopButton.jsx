"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Controlamos si el botón debe ser visible y si está en la parte inferior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Comprobamos si el scroll ha pasado la mitad de la altura de la página
      if (scrollY > windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Comprobamos si estamos en la parte inferior de la página
      if (scrollY + windowHeight >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll hacia el top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${isAtBottom ? 'border-2 border-white' : ''}`}
      >
        <FaArrowUp className="text-2xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;