import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/logo.png";

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img id="footer-logo" src={Logo} alt="Logo Kasa" />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
