import { useState } from "react";
import "../assets/styles/global.css";

const images = [
  "/images/img3.jpeg",
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  "/images/prueba.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carousel" className="carousel-container">
      <h2 className="carousel-title"> Nuestros Recuerdos  </h2>
      <div className="frog-frame">
        {/* 🐸 Ojos de la ranita */}
        <div className="frog-eye left-eye"></div>
        <div className="frog-eye right-eye"></div>

        {/* 📷 Imagen dentro del marco */}
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevSlide}>❮</button>
          <img src={images[currentIndex]} alt={`Recuerdo ${currentIndex + 1}`} className="carousel-img" />
          <button className="carousel-btn right" onClick={nextSlide}>❯</button>
        </div>

        {/* 🐸 Boca de la ranita */}
        <div className="frog-mouth"></div>
      </div>
    </div>
  );
};

export default Carousel;