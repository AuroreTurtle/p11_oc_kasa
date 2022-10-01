import accomodation from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider.jsx";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
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
                    <Tag tags={tags} />
                </div>

                {/* Host with stars */}
                <div id="host">
                    <div id="host-stars">
                        {range.map((rangeElem) =>
                            rating >= rangeElem ? (
                                <svg
                                    key={rangeElem.toString()}
                                    className="star"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="star-red"
                                        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    key={rangeElem.toString()}
                                    className="star"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="star-grey"
                                        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                    />
                                </svg>
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
                <Collapse
                    title=" Description"
                    content={description}
                    details="accomodation-info-details"
                    summary="accomodation-info-title"
                    text="accomodation-info-text"
                />
                <Collapse
                    title=" Équipements"
                    content={equipments}
                    details="accomodation-info-details"
                    summary="accomodation-info-title"
                    text="accomodation-info-text"
                />
            </div>
        </main>
    );
}

export default Accomodation;
