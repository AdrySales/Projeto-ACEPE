import { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: `${process.env.PUBLIC_URL}/carousel-1.jpg`, link: '/concurso/1' },
    { id: 2, image: `${process.env.PUBLIC_URL}/carousel-2.jpg`, link: '/concurso/2' },
    { id: 3, image: `${process.env.PUBLIC_URL}/carousel-3.jpg`, link: '/concurso/3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <a href={slide.link}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </a>
        </div>
      ))}
      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
