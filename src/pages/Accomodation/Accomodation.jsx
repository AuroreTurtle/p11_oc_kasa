import accomodation from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider.jsx";
import "./Accomodation.css";

function Accomodation() {
    const { id } = useParams();
    const accomodationDetails = accomodation.find((object) => object.id === id);

    const { title, location, tags, host, rating, description, equipments } = accomodationDetails;

    const range = [1, 2, 3, 4, 5];
    return (
        <main>
            {/* Slider */}
            <Slider />
            {/* Intro of accomodation */}
            <div id="intro">
                <div>
                    <h1 id="intro-title">{title}</h1>
                    <h2 id="intro-location">{location}</h2>
                    <div>
                        {tags.map((tag) => {
                            return (
                                <span className="tag" key={`${tag}`}>
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* Host with stars */}
                <div id="host">
                    <div id="host-stars">
                        {range.map((rangeElem) =>
                            rating >= rangeElem ? (
                                <span className="star-red" key={rangeElem.toString()}>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            ) : (
                                <span className="star-grey" key={rangeElem.toString()}>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            )
                        )}
                    </div>

                    <div id="host-info">
                        <p id="host-info-name">{host.name}</p>
                        <img id="host-info-picture" src={host.picture} alt="{host.name}" />
                    </div>
                </div>
            </div>

            {/* Collapse */}
            <div id="accomodation-info">
                <details className="accomodation-info-details">
                    <summary className="accomodation-info-title">
                        Description <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <p className="accomodation-info-text">{description}</p>
                </details>

                <details className="accomodation-info-details">
                    <summary className="accomodation-info-title">
                        Equipements <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <ul className="accomodation-info-text">
                        {equipments.map((equipment) => {
                            return <li key={`${equipment}`}> {equipment}</li>;
                        })}
                    </ul>
                </details>
            </div>
        </main>
    );
}

export default Accomodation;
