import Button from "../../../layout/Button";

function About() {
  return (
    <div className="about">
      <span className="available">
        <i className="bi bi-dot"></i>Disponible
      </span>
      <h1>
        Priscilla <span>MEZOUAR</span>
      </h1>
      <h2>
        Full Stack Software Engineer & CEO OlysWeb | Développement de solutions
        web sur mesure
      </h2>
      <p>
        Bonjour, je m'appelle Priscilla ! Je suis passionnée par le
        développement d'applications web modernes, performantes et évolutives,
        centrées sur l'utilisateur.
        <br /> <br />
        Curieuse, rigoureuse et autonome, j'accorde une grande importance à la
        qualité du code, à l'expérience utilisateur et à l'apprentissage
        continu, afin de toujours mieux vous servir.
      </p>
      <div>
        {/* <Button link_url="/portfolio" class_name="btn btn-primary" title="Découvrir mon portfolio" icon="bi bi-arrow-right" />
        <Button link_url="/experiences" class_name="btn btn-secondary" title="Découvrir mon parcours" /> */}

        <Button link_url="/experiences" class_name="btn btn-primary" title="Découvrir mon parcours" icon="bi bi-arrow-right" />
        <Button link_url="/contact" class_name="btn btn-secondary" title="Contactez-moi" />


      </div>
    </div >
  );
}

export default About;
