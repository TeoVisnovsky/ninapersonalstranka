import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projekty" element={<Projects />} />
            <Route path="/kalkulacka" element={<Calculator />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
