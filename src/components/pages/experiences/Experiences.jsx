import IntroContainer from "../../layout/IntroContainer";
import JobsList from "./JobsList";
import TrainingsList from "./TrainingsList";
import "./experiences.css"

function Experiences() {
  const span = "Expériences";
  const title = "Full Stack Software Engineer";
  const p =
    "Un parcours construit autour du développement Full Stack, de l'ingénierie logicielle et de l'amélioration continue, avec une expertise couvrant la conception, le développement et le déploiement d'applications web modernes.";

  return (
    <main id="experiences">
      <section>
        <IntroContainer span={span} title={title} p={p} />
        <div className="container">
          <div>
            <TrainingsList />
          </div>
          <JobsList />
        </div>
      </section>
    </main>
  );
}

export default Experiences;
