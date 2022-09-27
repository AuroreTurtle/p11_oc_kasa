import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
    return (
        <main>
            <div id="error">
                <span>404</span>
                <p id="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <Link id="error-link" to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </main>
    );
}

export default Error;
