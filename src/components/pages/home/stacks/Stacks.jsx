import IntroContainer from "../../../layout/IntroContainer";
import StacksCard from "./StacksCard";
import "./stacks.css";

function Stacks() {
  const span = "Expertise";
  const title = "Tech Stack";
  const p =
    "Une expertise couvrant l'ensemble du cycle de développement logiciel, de l'interface utilisateur au backend, jusqu'au déploiement et à la maintenance.";

  return (
    <section id="stacks">
      <IntroContainer span={span} title={title} p={p} />
      <StacksCard />
    </section>
  );
}

export default Stacks;
