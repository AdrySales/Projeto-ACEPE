import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importe a Navbar
import HomePage from './pages/HomePage'; // A HomePage com a estrutura da página inicial
import LoginCadastroPage from './pages/LoginCadastroPage'; // A página de cadastro

function App() {
  return (
    <Router>
      <Navbar /> {/* A Navbar aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/signup" element={<LoginCadastroPage />} /> {/* Página de cadastro */}
        <Route path="/login" element={<LoginCadastroPage />} /> {/* Página de login */}
      </Routes>
    </Router>
  );
}

export default App;
