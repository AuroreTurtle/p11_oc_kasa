import "./Home.css";
import accomodation from "../../data/logements.json";
import Card from "../../components/Card/Card";
import BannerDesktop from "../../assets/banner-desktop.png";
import BannerMobile from "../../assets/banner-mobile.png";

function Home() {
    return (
        <main>
            <div id="title">
                <img id="title-banner-desktop" src={BannerDesktop} alt="Bannière avec un paysage" />
                <img id="title-banner-mobile" src={BannerMobile} alt="Bannière avec un paysage" />
                <div id="title-bg"></div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div id="accomodation">
                {accomodation.map((card) => (
                    <Card key={`${card.id}`} cover={card.cover} title={card.title} />
                ))}
            </div>
        </main>
    );
}

export default Home;
