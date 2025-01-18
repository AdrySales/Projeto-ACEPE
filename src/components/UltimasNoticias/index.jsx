import React, { useState, useEffect } from 'react';
import './UltimasNoticias.css';
import { useNavigate } from 'react-router-dom';

function UltimasNoticias() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const noticias = [
    { id: 1, title: "Novo concurso anunciado", image: `${process.env.PUBLIC_URL}/news-1.jpg`, link: '/noticia/1', date: '12/01/2025', time: '14:30' },
    { id: 2, title: "Preparação para provas online", image: `${process.env.PUBLIC_URL}/news-2.jpg`, link: '/noticia/2', date: '10/01/2025', time: '09:15' },
    { id: 3, title: "Mudanças nos editais", image: `${process.env.PUBLIC_URL}/news-3.jpg`, link: '/noticia/3', date: '08/01/2025', time: '16:45' },
    { id: 4, title: "Novidades no mercado", image: `${process.env.PUBLIC_URL}/news-3.jpg`, link: '/noticia/4', date: '05/01/2025', time: '11:00' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % noticias.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + noticias.length) % noticias.length);

  return (
    <section className="ultimas-noticias">
      <div className="section-header">
        <h2>Acompanhe as últimas notícias e atualizações sobre concursos!</h2>
        <button className="btn btn-outline">Ver mais</button>
      </div>
      {isMobile ? (
        <div className="noticias-carousel">
          <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
          <div
            className="noticia-card"
            onClick={() => navigate(noticias[currentIndex].link)}
            style={{ backgroundImage: `url(${noticias[currentIndex].image})` }}
          >
            <div className="noticia-info">
              <span className="noticia-date-time">🕒 {noticias[currentIndex].date} às {noticias[currentIndex].time}</span>
              <h3>{noticias[currentIndex].title}</h3>
            </div>
          </div>
          <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
        </div>
      ) : (
        <div className="noticias-grid">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="noticia-card"
              onClick={() => navigate(noticia.link)}
              style={{ backgroundImage: `url(${noticia.image})` }}
            >
              <div className="noticia-info">
                <span className="noticia-date-time">🕒 {noticia.date} às {noticia.time}</span>
                <h3>{noticia.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default UltimasNoticias;
