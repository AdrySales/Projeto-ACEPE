import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Obter a rota atual
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/homepage"><img src={`${process.env.PUBLIC_URL}/logo-acepe.png`} alt="Logo" className="logo" /></Link>
      </div>
      {/* Renderizar botões apenas se não estiver na rota de login */}
      {location.pathname === '/homepage' && (
        <div className="navbar-buttons">
          <Link to="/login?type=login">
            <button className="btn btn-outline">Login</button>
          </Link>
          <Link to="/signup?type=signup">
            <button className="btn btn-primary">Cadastro</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


