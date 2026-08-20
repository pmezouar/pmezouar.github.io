import { Link } from "react-router-dom";
import "./legal.css";

function Legal() {
  return (
    <main>
      <section id="legal-mentions">
        <h1>Mentions légales</h1>

        <em>En vigueur au 01/08/2026</em>

        <div>
          <h2>Informations</h2>
          <p>
            Nom du responsable : Priscilla MEZOUAR
            <br />
            Dénomination sociale : OlysWeb
            <br />
            RCS : Tarascon
            <br />
            SIREN : 850 052 267
            <br />
            Siège social : 7, place Émile Combes 13150 Tarascon, France
            <br />
            Numéro de téléphone :<a href="tel:+33666430997">06.66.43.09.97</a>
            <br />
            Adresse email de contact :
            <Link to="mailto:mezouar.priscilla@gmail.com">
              mezouar.priscilla@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <h2>Informations sur l'hébergeur du site</h2>
          <p>Hébergeur : GitHub</p>
        </div>

        <div>
          <h2>Informations sur le responsable de la publication</h2>
          <p>Responsable de la publication : OlysWeb</p>
        </div>

        <div>
          <h2>Informations sur le développeur :</h2>
          <p>
            Site réalisé par Priscilla MEZOUAR
            <br />
            <br />
          </p>
        </div>

        <div>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du site est la propriété de Priscilla MEZOUAR. Toute
            utilisation des éléments du site, y compris le logo, est interdite
            sans autorisation préalable.
          </p>
        </div>

        <div>
          <h2>Politique de confidentialité et protection des données</h2>
          <p>
            Aucun cookie n'est utilisé. Les données collectées via le formulaire
            de contact sont utilisées uniquement pour répondre aux utilisateurs
            et ne sont pas conservées.
          </p>
        </div>

        <div>
          <h2>Droits et obligations des utilisateurs</h2>
          <p>
            Les utilisateurs du site Pmezouar s'engagent à respecter les droits
            de propriété intellectuelle relatifs aux contenus du site. Toute
            reproduction ou représentation de tout ou partie de ce site est
            interdite sans l'autorisation expresse d'OlysWeb.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Legal;
