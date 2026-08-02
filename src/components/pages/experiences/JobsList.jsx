const jobs = [
  {
    id: 2,
    name: "CEO & Full Stack Software Engineer",
    location: "OlysWeb",
    description:
      "Conception et développement d'applications Full Stack de la phase de conception au déploiement. Développement d'API REST sécurisées, interfaces React performantes, architecture logicielle, automatisation et optimisation des performances.",
    start_year: "2026",
    end_year: "En poste",
    technologies: [
      "Django",
      "Django REST",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "Vitest",
      "Selenium",
      "Postman",
      "Cisco",
    ],
  },
  {
    id: 1,
    name: "CEO & Développeuse web Full Stack",
    location: "Webilys",
    description:
      "Conception et développement de sites web et solutions e-commerce pour des entreprises. Développement front-end et back-end, intégration CMS, maintenance, référencement et accompagnement technique des clients.",
    start_year: "2019",
    end_year: "2025",
    technologies: [
      "Python",
      "Flask",
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "PostgreSQL",
      "SQLite",
      "MySQL",
      "REST API",
      "JSON",
      "CRUD",
      "Authentication",
      "Authorization",
      "Gunicorn",
      "Prettier",
      "Git",
      "GitHub",
      "VS Code",
      "Trello",
      "Notion",
      "WordPress",
      "WooCommerce",
    ],
  },
];

function JobsList() {
  const jobsList = jobs.map((job) => (
    <li key={job.id} className="job-item">
      <h3>
        {job.name}{" "}
        <span>
          {job.start_year} - {job.end_year}
        </span>
      </h3>
      <h4>{job.location}</h4>
      <p>{job.description}</p>
      <ul className="job-technologies">
        {job.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <div className="jobs-list">
      <h2>
        <i className="bi bi-laptop"></i>
        Expériences professionnelles
      </h2>
      <ul className="jobs-container">{jobsList}</ul>
    </div>
  );
}

export default JobsList;
