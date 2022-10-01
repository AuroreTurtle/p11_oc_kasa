import Collapse from "../../components/Collapse/Collapse";
import "./About.css";
import BannerAboutDesktop from "../../assets/banner-about-desktop.png";
import BannerAboutMobile from "../../assets/banner-about-mobile.png";

function About() {
    return (
        <main>
            <div id="banner">
                <img id="banner-desktop" src={BannerAboutDesktop} alt="Bannière avec un paysage" />
                <img id="banner-mobile" src={BannerAboutMobile} alt="Bannière avec un paysage" />
                <div id="banner-bg"></div>
            </div>
            <div id="about-collapse">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux
                        logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    details="about-details"
                    summary="about-title"
                    text="about-text"
                />

                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                        ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    details="about-details"
                    summary="about-title"
                    text="about-text"
                />

                <Collapse
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez
                        pas à nous contacter si vous avez la moindre question."
                    details="about-details"
                    summary="about-title"
                    text="about-text"
                />

                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                        logement correspond aux critères de sécurité établis par nos services. En laissant une note
                        aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
                        hôtes."
                    details="about-details"
                    summary="about-title"
                    text="about-text"
                />
            </div>
        </main>
    );
}

export default About;
