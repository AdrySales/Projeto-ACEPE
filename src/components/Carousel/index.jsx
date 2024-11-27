import  {useState} from 'react';
import { useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: '/carousel-1.jpg', link: '/concurso/1' },
    { id: 2, image: '/carousel-2.jpg', link: '/concurso/2' },
    { id: 3, image: '/carousel-3.jpg', link: '/concurso/3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
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

