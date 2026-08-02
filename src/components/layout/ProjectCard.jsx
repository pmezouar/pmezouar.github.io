import { Link } from "react-router-dom";

const projects = [
  // {
  //   id: 6,
  //   screenshot_url: "/chauffeurprive.png",
  //   title: "Chauffeur Privé Sud",
  //   description:
  //     "Un site vitrine pour un groupe de chauffeur privé basé à Fontvieille, Tarascon et St-Étienne-du-Grès",
  //   demo_url: "https://chauffeurprivesud.fr",
  //   github_url: "https://github.com/pmezouar/chauffeurprivesud.git",
  // },
  // {
  //   id: 5,
  //   screenshot_url: "/allotaxisud.png",
  //   title: "Allo Taxi Sud",
  //   description:
  //     "Un site vitrine pour un groupe de taxis basé à Fontvieille, Tarascon et St-Étienne-du-Grès",
  //   demo_url: "https://allo-taxi-sud.com",
  //   github_url: "https://github.com/pmezouar/allotaxisud.git",
  // },
  // {
  //   id: 4,
  //   screenshot_url: "/jcfamilles.png",
  //   title: "JC Familles",
  //   description:
  //     "Un site vitrine pour une entreprise d'aide à domicile à Marseille",
  //   demo_url: "https://jcfamilles.fr",
  //   github_url: "https://github.com/pmezouar/jcfamilles.git",
  // },
  // {
  //   id: 3,
  //   screenshot_url: "/fotransports13.png",
  //   title: "FO Transports 13",
  //   description:
  //     "Un site vitrine pour le syndicat Force Ouvrière des transports et de la logistique des Bouches-du-Rhône",
  //   demo_url: "https://fo-transports13.fr",
  //   github_url: "https://github.com/pmezouar/fotransports13.git",
  // },
  // {
  //   id: 2,
  //   screenshot_url: "/casadusud.png",
  //   title: "Casa du Sud",
  //   description:
  //     "Un site vitrine avec lien AirBnb pour une location de vacances à Béziers",
  //   demo_url: "https://casadusud.fr",
  //   github_url: "https://github.com/pmezouar/casadusud.git",
  // },
  // {
  //   id: 1,
  //   screenshot_url: "/dpartenr.png",
  //   title: "DParten'R",
  //   description:
  //     "Un site vitrine pour un consultant en transport et logistique",
  //   demo_url: "https://dpartenr.fr",
  //   github_url: "https://github.com/pmezouar/dpartenr.git",
  // }, 
  {
    id: 3,
    screenshot_url: "/herbierdeprovence.png",
    title: "Herbier de Provence",
    description:
      "Un site vitrine pour un grossiste en herbes aromatiques sauvages de Provence",
    demo_url: "https://herbier-provence.com",
    github_url: "https://github.com/pmezouar/herbierdeprovence.git",
  },
  {
    id: 2,
    screenshot_url: "/beautystar.png",
    title: "Beauty Star",
    description: "Une application web pour un institut de beauté à Tarascon",
    demo_url: "https://beautystar.onrender.com",
    github_url: "https://github.com/pmezouar/beautystar.git",
  },

  {
    id: 1,
    screenshot_url: "/passwordgenerator.png",
    title: "Password Generator",
    description: "Une application de génération de mot de passe sécurisé",
    demo_url: "https://passwordgenerator-l5xe.onrender.com",
    github_url: "https://github.com/pmezouar/passwordgenerator.git",
  },

];

function ProjectCard({ limit }) {
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
