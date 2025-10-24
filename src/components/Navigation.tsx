import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
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
      </div>
    </nav>
  );
};

export default Navigation;
