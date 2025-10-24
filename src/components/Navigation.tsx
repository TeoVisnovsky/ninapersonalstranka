import { NavLink } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './Navigation.css';

const Navigation = () => {
  const handleConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              O mne
            </NavLink>
          </li>
          <li>
            <NavLink to="/projekty" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Moje projekty
            </NavLink>
          </li>
          <li>
            <NavLink to="/kalkulacka" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Kalkulačka
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Kontakt
            </NavLink>
          </li>
        </ul>
        <button className="confetti-btn" onClick={handleConfetti} title="Spustiť konfety! 🎉">
          🎉
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
