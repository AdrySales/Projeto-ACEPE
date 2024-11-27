import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>
            Somos uma plataforma dedicada a ajudar você a encontrar e se preparar
            para os melhores concursos públicos.
          </p>
        </div>
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Concursos Abertos</a></li>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Materiais de Estudo</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>
            Email: contato@concursos.com<br />
            Telefone: (11) 1234-5678<br />
            Endereço: Rua dos Concursos, 123 - São Paulo, SP
          </p>
        </div>
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">LI</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Concursos Website. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

