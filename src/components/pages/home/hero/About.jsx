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
        Développeuse Web Full Stack & CEO OlysWeb
      </h2>
      <p>
        Bonjour, je m'appelle Priscilla ! Je conçois des applications web complètes, du front-end au back-end, avec une attention particulière portée à l'architecture, l'expérience utilisateur, la qualité du code et la maintenabilité.
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
