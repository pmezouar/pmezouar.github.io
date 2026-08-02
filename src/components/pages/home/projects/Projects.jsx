import { Link } from "react-router-dom";

import IntroContainer from "../../../layout/IntroContainer";
import ProjectCard from "../../../layout/ProjectCard";
import "./projects.css";

function Projects() {
  const span = "Portfolio";
  const title = "Mes derniers projets";
  const p =
    "Une vitrine d'architecture technique et d'expériences utilisateur fluides. Ces projets font le lien entre des backends haute performance et des frontends sophistiqués.";

  return (
    <section className="projects">
      <IntroContainer span={span} title={title} p={p} />
      <ProjectCard limit={3} />
      <Link to="/portfolio" className="btn btn-primary">
        Voir plus de projects
      </Link>
    </section>
  );
}

export default Projects;
