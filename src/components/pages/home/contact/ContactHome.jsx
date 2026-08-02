import IntroContainer from "../../../layout/IntroContainer";
import Form from "./Form";
import Informations from "./Informations";
import "./contact.css";

function ContactHome() {
  const span = "Contact";
  const title = "Construisons votre projet";
  const p =
    "Je suis toujours disponible pour de nouveaux projets, des défis techniques ou des opportunités de faire le lien entre le design et l'ingénierie.";

  return (
    <section className="contact">
      <IntroContainer span={span} title={title} p={p} />
      <div className="container">
        <Form />
        <Informations />
      </div>
    </section>
  );
}

export default ContactHome;
