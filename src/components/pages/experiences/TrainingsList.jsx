const trainings = [
  {
    id: 5,
    name: "Cisco DevNet Associate",
    year: "2026",
    location: "Cisco NetAcad",
  },
  {
    id: 4,
    name: "CS50W : Web Programming with Python and JavaScript",
    year: "2026",
    location: "Harvard University Online",
  },
  {
    id: 3,
    name: "CS50X : Introduction to Comptuter Science",
    year: "2025",
    location: "Harvard University Online",
  },
  {
    id: 2,
    name: "Développement Frontend",
    year: "2019",
    location: "FromScratch Podia",
  },
  {
    id: 1,
    name: "WordPress / WooCommerce",
    year: "2019",
    location: "Udemy",
  },
];

function TrainingsList() {
  const trainingsList = trainings.map((training) => (
    <li key={training.id} className="training-item">
      <h3>{training.name}</h3>
      <p>
        <i className="bi bi-geo-alt"></i> {training.location}
      </p>
      <span>
        <i className="bi bi-calendar-check"></i> {training.year}
      </span>
    </li>
  ));
  return (
    <div className="trainings-list">
      <h2>
        <i className="bi bi-mortarboard"></i>
        Formations
      </h2>
      <ul>{trainingsList}</ul>
    </div>
  );
}

export default TrainingsList;
