import React from 'react';
import './UltimasNoticias.css';

function UltimasNoticias() {
  const noticias = [
    { id: 1, title: "Novo concurso anunciado", image: `${process.env.PUBLIC_URL}news-1.jpg` },
    { id: 2, title: "Preparação para provas online", image:`${process.env.PUBLIC_URL}news-2.jpg`  },
    { id: 3, title: "Mudanças nos editais", image: `${process.env.PUBLIC_URL}news-3.jpg`  },
  ];

  return (
    <section className="ultimas-noticias">
      <div className="section-header">
        <h2>Últimas Notícias</h2>
        <button className="btn btn-outline">Ver mais</button>
      </div>
      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-card">
            <img src={noticia.image} alt={noticia.title} />
            <h3>{noticia.title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-outline">Ler mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UltimasNoticias;

