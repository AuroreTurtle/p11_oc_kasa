import "./Footer.css";
import Logo from "../../assets/logo.PNG";

function Footer() {
    return (
        <footer>
            <img id="footer-logo" src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
