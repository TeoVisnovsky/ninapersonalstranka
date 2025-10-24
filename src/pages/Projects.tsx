import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Moderná e-commerce platforma s košíkom a platobnou bránou. Postavená s React a TypeScript.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: "🛒",
      link: "#"
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "Aplikácia na správu úloh s drag & drop funkciou a real-time synchronizáciou.",
      technologies: ["React", "Firebase", "CSS3"],
      image: "📋",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interaktívny dashboard s informáciami o počasí a predpoveďou na 7 dní.",
      technologies: ["React", "API Integration", "Chart.js"],
      image: "🌤️",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responzívna portfolio stránka s modernými animáciami a efektmi.",
      technologies: ["React", "Vite", "CSS Animations"],
      image: "💼",
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Dashboard pre správu sociálnych médií s analytickými údajmi a plánovaním príspevkov.",
      technologies: ["React", "Redux", "REST API"],
      image: "📱",
      link: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Plnohodnotná blogovacia platforma s markdown editorom a komentármi.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "✍️",
      link: "#"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="page-title">Moje projekty</h1>
          <p className="page-subtitle">
            Pozrite si moje najnovšie práce a projekty, na ktorých som pracovala
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Pozrieť projekt →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
