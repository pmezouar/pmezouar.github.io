import Button from "../../layout/Button";
import "./error404.css";

function Error404() {
    return (
        <main id="error404">
            <h1>Erreur 404 - page non trouvée</h1>
            <p>Il semblerait que la page que vous demandez n'existe pas.</p>
            <Button link_url="/" class_name="btn btn-primary" title="Retour à l'accueil" />

        </main>
    );
}

export default Error404;
