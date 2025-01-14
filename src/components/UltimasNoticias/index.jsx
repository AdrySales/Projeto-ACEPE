import React from 'react';
import './UltimasNoticias.css';
import { useNavigate } from 'react-router-dom'; // Supondo que você use React Router

function UltimasNoticias() {
  const navigate = useNavigate();
  const noticias = [
    { id: 1, title: "Novo concurso anunciado", image: `${process.env.PUBLIC_URL}/news-1.jpg`, link: '/noticia/1', date: '12/01/2025', time: '14:30' },
    { id: 2, title: "Preparação para provas online", image: `${process.env.PUBLIC_URL}/news-2.jpg`, link: '/noticia/2', date: '10/01/2025', time: '09:15' },
    { id: 3, title: "Mudanças nos editais", image: `${process.env.PUBLIC_URL}/news-3.jpg`, link: '/noticia/3', date: '08/01/2025', time: '16:45' },
    { id: 4, title: "Novidades no mercado", image: `${process.env.PUBLIC_URL}/news-3.jpg`, link: '/noticia/4', date: '05/01/2025', time: '11:00' },
  ];

  return (
    <section className="ultimas-noticias">
      <div className="section-header">
        <h2>Acompanhe as últimas notícias e atualizações sobre concursos!</h2>
        <button className="btn btn-outline">Ver mais</button>
      </div>
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
    </section>
  );
}

export default UltimasNoticias;
