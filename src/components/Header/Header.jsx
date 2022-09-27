import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.PNG";

function Header() {
    return (
        <header>
            <Link to="/">
                <img id="header-logo" src={Logo} alt="Logo Kasa" />
            </Link>

            <nav>
                <Link className="nav-link" to="/">
                    Accueil
                </Link>
                <Link className="nav-link" to="/about">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
