import { Link } from "react-router-dom";

const informations = [
  {
    id: 1,
    icon: "bi bi-phone",
    title: "Téléphone",
    link: "tel:+33666430997",
    content: "06.66.43.09.97",
  },
  {
    id: 2,
    icon: "bi bi-envelope-at",
    title: "Email",
    link: "mailto:mezouar.priscilla@gmail.com",
    content: "mezouar.priscilla@gmail.com",
  },
  {
    id: 3,
    icon: "bi bi-github",
    title: "GitHub",
    link: "https://github.com/pmezouar",
    content: "@pmezouar",
  },
  {
    id: 4,
    icon: "bi bi-linkedin",
    title: "LinkedIn",
    link: "https://linkedin.com/in/pmezouar",
    content: "@pmezouar",
  },
];

function Informations() {
  const informationsList = informations.map((information) => (
    <Link to={information.link} target="_blank">
      <li key={information.id} className="item">
        <div>
          <i className={information.icon}></i>
          <h3>{information.title}</h3>
        </div>

        <p>{information.content}</p>
      </li>
    </Link>
  ));
  return <ul className="informations">{informationsList}</ul>;
}

export default Informations;
