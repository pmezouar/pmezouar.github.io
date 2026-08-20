import { Link } from "react-router-dom";

const projects = [
  {
    id: 2,
    screenshot_url: "/herbierdeprovence.png",
    title: "Herbier de Provence",
    description:
      "Un site vitrine pour un grossiste en herbes aromatiques sauvages de Provence",
    demo_url: "https://herbier-provence.com",
    github_url: "https://github.com/pmezouar/herbierdeprovence.git",
  },
  {
    id: 1,
    screenshot_url: "/beautystar.png",
    title: "Beauty Star",
    description: "Une application web pour un institut de beauté à Tarascon",
    demo_url: "https://beautystar.onrender.com",
    github_url: "https://github.com/pmezouar/beautystar.git",
  }
];




function ProjectCard({ limit }: { limit: number }) {
  const projectsList = projects.slice(0, limit).map((project) => (
    <li key={project.id} className="project-card">
      <img src={project.screenshot_url} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div>
        <Link to={project.demo_url} className="demo-link" target="_blank">
          Demo <i className="bi bi-box-arrow-up-right"></i>
        </Link>

        <Link to={project.github_url} target="_blank">
          GitHub <i className="bi bi-code"></i>
        </Link>
      </div>
    </li>
  ));

  return <ul className="projects-container">{projectsList}</ul>;
}

export default ProjectCard;
