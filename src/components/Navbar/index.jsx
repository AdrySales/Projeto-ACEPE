
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Cadastro</button>
      </div>
    </nav>
  );
}

export default Navbar;

