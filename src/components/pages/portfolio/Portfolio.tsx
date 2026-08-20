import IntroContainer from "../../layout/IntroContainer";
import ProjectCard from "../../layout/ProjectCard";
import "../home/projects/projects.css";

function Portfolio() {
  const span = "Portfolio";
  const title = "Mes projects";
  const p =
    "Une vitrine d'architecture technique et d'expériences utilisateur fluides. Ces projets font le lien entre des backends haute performance et des frontends sophistiqués.";

  return (
    <main>
      <section className="projects">
        <IntroContainer span={span} title={title} p={p} />

        <ProjectCard limit={100} />
      </section>
    </main>
  );
}

export default Portfolio;
