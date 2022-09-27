import "./Home.css";
import Card from "../../components/Card/Card";
import Banner from "../../assets/banner.png";
import accomodation from "../../data/logements.json";

function Home() {
    return (
        <main>
            <div id="title">
                <img src={Banner} alt="Bannière avec un paysage" />
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
