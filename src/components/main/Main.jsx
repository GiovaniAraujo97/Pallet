import React, { useState } from 'react';
import './main.css';

function Main() {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="main">
      <div className='container'>
        <div className='container-left'>
          <h3>Entrega Rápida, <br /> Carga Segura: <br /> Paletes para Todas as Necessidades</h3>
          <p>"Paletes que Oferecem a Resistência que Sua Carga Precisa."</p>
          <button type='button'>Contatos</button>
        </div>

        <div className='container-right'>
        </div>
      </div>
      <div className="main-content">

      </div>
    </div>
  );
}

export default Main;
