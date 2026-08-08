const stacks = [
  {
    id: 1,
    icon: "i bi bi-code-slash",
    title: "Frontend",
    description:
      "Conception, modélisation et gestion de bases de données relationnelles pour des applications fiables et évolutives.",
    items: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "HTML5" },
      { id: 5, name: "CSS3" },
      { id: 6, name: "SASS" },
    ],
  },
  {
    id: 2,
    icon: "i bi bi-gear-wide-connected",
    title: "Backend",
    description:
      "Développement d'applications web robustes, d'API sécurisées et de logique métier avec Python et ses frameworks.",
    items: [
      { id: 1, name: "Python" },
      { id: 2, name: "Django" },
      { id: 3, name: "Django REST" },
      { id: 4, name: "Flask" },
    ],
  },
  {
    id: 3,
    icon: "i bi bi-database",
    title: "Base de données",
    description:
      "Conception, modélisation et gestion de bases de données relationnelles pour des applications fiables et évolutives.",
    items: [
      { id: 1, name: "PostgreSQL" },
      { id: 2, name: "SQLite" },
      { id: 3, name: "MySQL" },
    ],
  },
  {
    id: 4,
    icon: "i bi bi-link-45deg",
    title: "API & Authentification",
    description:
      "Conception d'API REST, échanges de données, authentification et gestion sécurisée des accès entre applications.",
    items: [
      { id: 1, name: "REST API" },
      { id: 2, name: "OpenAPI" },
      { id: 3, name: "JWT" },
      { id: 4, name: "OAuth2" },
      { id: 5, name: "JSON" },
    ],
  },
  {
    id: 5,
    icon: "i bi bi-flask",
    title: "Tests & Qualité",
    description:
      "Mise en place de tests, validation des fonctionnalités et maintien d'un code propre et cohérent.",
    items: [
      { id: 1, name: "Vitest" },
      { id: 2, name: "Selenium" },
      { id: 3, name: "Prettier" },
    ],
  },
  {
    id: 6,
    icon: "i bi bi-gear",
    title: "Déploiement",
    description:
      "Conteneurisation, intégration continue et déploiement automatisé pour faciliter la mise en production des applications.",
    items: [
      { id: 1, name: "Docker" },
      { id: 2, name: "Gunicorn" },
      { id: 3, name: "GitHub Actions" },
    ],
  },
  {
    id: 7,
    icon: "i bi bi-briefcase",
    title: "Outils",
    description:
      "Maîtrise des outils de développement, de gestion de versions, de collaboration et de suivi de projets.",
    items: [
      { id: 1, name: "Git" },
      { id: 2, name: "GitHub" },
      { id: 3, name: "VS Code" },
      { id: 4, name: "Postman" },
      { id: 5, name: "Trello" },
      { id: 6, name: "Notion" },
    ],
  },
  {
    id: 8,
    icon: "i bi bi-globe",
    title: "CMS",
    description:
      "Création, personnalisation et maintenance de sites web professionnels sous WordPress.",
    items: [
      { id: 1, name: "WordPress" },
    ],
  },
];

function StacksCard() {
  const stacksList = stacks.map((stack) => (
    <li key={stack.id} className="card">
      <i className={stack.icon}></i>
      <h3>{stack.title}</h3>
      <p>{stack.description}</p>

      <ul>
        {stack.items.map((item) => (
          <li key={item.id} className="item">
            {item.name}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div>
      <ul className="card-container">{stacksList}</ul>
    </div>
  );
}

export default StacksCard;
