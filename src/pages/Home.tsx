import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Ahoj, som <span className="highlight">Nina</span>
          </h1>
          <p className="hero-subtitle">
            Web Developer & Creative Designer
          </p>
          <p className="hero-description">
            Vítajte na mojej osobnej stránke! Som vývojár s vášňou pre moderné 
            webové technológie a kreatívny dizajn. Milujem vytvárať jedinečné 
            a užívateľsky prívetivé aplikácie.
          </p>
          <div className="hero-buttons">
            <a href="/projekty" className="btn-primary">
              Pozrieť projekty
            </a>
            <a href="/kontakt" className="btn-secondary">
              Kontaktovať ma
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="animated-circle"></div>
            <div className="animated-circle-2"></div>
            <div className="profile-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="section-title">Moje zručnosti</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Frontend Development</h3>
            <p>React, TypeScript, HTML, CSS</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Figma, Adobe XD, Responsive Design</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimalizácia, Best Practices</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Modern Tools</h3>
            <p>Vite, Git, VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
