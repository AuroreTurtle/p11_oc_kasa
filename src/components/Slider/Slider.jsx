import React, { useState } from "react";
import accomodation from "../../data/logements.json";
import { useParams } from "react-router-dom";
import "./Slider.css";

function Slider() {
    const { id } = useParams();
    const accomodationPictures = accomodation.find((object) => object.id === id);
    const { pictures } = accomodationPictures;

    const [current, setCurrent] = useState(0);

    /**
     * If the current slide is the last slide, then go to the first slide, otherwise go to the next
     * slide.
     */
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    /**
     * If the current slide is the first slide, then set the current slide to the last slide, otherwise
     * set the current slide to the previous slide.
     */
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="slider">
            {/* Showing slider navigation buttons */}
            {pictures.length > 1 && <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>}
            {pictures.length > 1 && <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>}

            {/* Images */}
            {pictures.map((img, index) => {
                return (
                    <div key={index}>
                        {index === current && <img src={img} alt="Photos du logement" className="slider-image" />}
                        {index === current && (
                            <span className="slider-image-number">
                                {current + 1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slider;
