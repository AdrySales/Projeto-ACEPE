import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" /></Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="btn btn-outline">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-primary">Cadastro</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
