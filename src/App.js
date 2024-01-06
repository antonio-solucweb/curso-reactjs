import './App.css';
import Welcome from './components/Welcome';
import Contact  from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import RickMorty from './pages/RickMorty';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/about">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/project">Proyecto</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Welcome name="Antonio" age="28" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:name" element={<Profile />} />
            <Route path="/project" element={<RickMorty />} />
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
